<div class="partial-arc-container">
  <Chart>
    <Svg center>
      <Group y={15}>
        <Arc
          {value}
          range={[-120, 120]}
          {innerRadius}
          {outerRadius}
          cornerRadius={5}
          {spring}
          fill="#10b981"
          track={{ fill: '#10b981', opacity: 0.1 }}
        />
      </Group>
    </Svg>
  </Chart>
  <div class="arc-label">
    <p class="value">{value}%</p>
  </div>
</div>

<script lang="ts">
  import { Chart, Svg, Arc, Group } from 'layerchart';

  export let value: number = 0;

  const innerRadius = 40;
  const outerRadius = 50;
  const spring = { stiffness: 0.3, damping: 0.8 };
</script>

<style>
  .partial-arc-container {
    width: 110px;
    height: 100px;
    position: relative;
  }

  .arc-label {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -65%);
    text-align: center;
  }

  .arc-label .value {
    font-size: 1.45rem;
    font-weight: 500;
  }
</style>
