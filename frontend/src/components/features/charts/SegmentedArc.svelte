<div class="segmented-arc-container">
  <Chart>
    <Svg center>
      {#each { length: segments } as _, segmentIndex}
        {@const segmentAngle = (2 * Math.PI) / segments}
        <Arc
          startAngle={segmentIndex * segmentAngle}
          endAngle={(segmentIndex + 1) * segmentAngle}
          innerRadius={30}
          cornerRadius={2}
          padAngle={0.02}
          fill={(segmentIndex / segments) * 100 < (value ?? 0) ? '#10b981' : '#fefefe'}
        />
      {/each}
    </Svg>
  </Chart>
  <div class="arc-label">
    <p class="value">{value}%</p>
  </div>
</div>

<script lang="ts">
  import { Chart, Svg, Arc } from 'layerchart';

  export let value: number = 0;

  const segments = 10;
</script>

<style>
  .segmented-arc-container {
    position: relative;
    width: 72px;
    height: 72px;
    margin: auto;
  }

  .arc-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .value {
    font-size: 1.25rem;
    margin: 0;
    color: var(--blue-color);
  }
</style>
