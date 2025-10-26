<div class="arc-container">
  <Chart>
    <Svg center>
      <Group y={75}>
        {#each segments as segment}
          <Arc
            value={segment.value}
            domain={segment.domain}
            range={segment.range}
            {innerRadius}
            {outerRadius}
            cornerRadius={0}
            {spring}
            fill={segment.color}
          />
        {/each}
      </Group>
    </Svg>
  </Chart>
  <div class="arc-label">
    <p class="value">{count}</p>
    <p class="title">{label}</p>
  </div>
</div>

<script lang="ts">
  import { Chart, Svg, Arc, Group } from 'layerchart';
  import type { ArcChartData } from '../../../types/chart';

  export let data: ArcChartData[] = [];
  export let label: string = '';
  export let count: number = 0;

  const innerRadius = 110;
  const outerRadius = 140;
  const spring = { stiffness: 0.3, damping: 0.8 };

  const arcRange = [-90, 90];
  const totalAngle = arcRange[1] - arcRange[0];
  const total = data.reduce((sum, d) => sum + d.value, 0);

  /* ---- Calculate each segment's range ---- */
  let currentAngle = arcRange[0];

  const segments = data.map((item) => {
    const startAngle = currentAngle;
    const proportion = item.value / total;
    const angleCoverage = totalAngle * proportion;
    const endAngle = currentAngle + angleCoverage;

    currentAngle = endAngle;

    return {
      ...item,
      range: [startAngle, endAngle],
      domain: [0, item.value],
    };
  });
</script>

<style>
  .arc-container {
    height: 145px;
    margin: 1em 0;
    position: relative;
  }

  .arc-label {
    position: absolute;
    left: 50%;
    bottom: 0.5em;
    transform: translateX(-50%);
    text-align: center;
  }

  .arc-label .title {
    font-size: 0.85rem;
  }

  .arc-label .value {
    font-size: 2.25rem;
    font-weight: 700;
  }
</style>
