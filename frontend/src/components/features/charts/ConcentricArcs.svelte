<div class="concentric-arc-container">
  <div class="chart">
    <Chart>
      <Svg center>
        {#each data as circle, i}
          <Arc
            initialValue={0}
            value={circle.value}
            domain={[0, total]}
            range={[0, 180]}
            innerRadius={-20}
            outerRadius={i * -40}
            cornerRadius={10}
            fill={circle.color}
            track={{ fill: circle.color, opacity: 0.1 }}
            tweened={{ duration: 1000, easing: cubicInOut }}
          />
        {/each}
      </Svg>
    </Chart>
  </div>
  <aside class="chart-labels">
    <h4>{label}</h4>
    {#each data as item}
      <div class="label-group" style={`--color: ${item.color}`}>
        <span class="value">{item.value}</span>
        <p class="label">{item.key}</p>
      </div>
    {/each}
  </aside>
</div>

<script lang="ts">
  import { Chart, Svg, Arc } from 'layerchart';
  import { cubicInOut } from 'svelte/easing';

  import type { ChartData } from '../../../types/chart';

  export let data: ChartData[] = [];
  export let label: string = '';

  $: total = data.reduce((sum, item) => sum + item.value, 0);
</script>

<style>
  .concentric-arc-container {
    position: relative;
    display: flex;
    gap: 1.5em;
  }

  .chart {
    height: 275px;
    width: 100%;
    transform: translateX(-50%);
  }

  .chart-labels {
    position: absolute;
    width: 50%;
    right: 0;
    padding: 0 1.5em;
  }

  .chart-labels h4 {
    text-transform: uppercase;
    color: var(--dark-gray-color);
    font-size: 1rem;
    margin-bottom: 2em;
  }

  .label-group {
    position: relative;
    margin-bottom: 2em;
    padding-left: 1.5em;
  }

  .label-group::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 5px;
    border-radius: 100vmax;
    left: 0;
    background-color: var(--color);
  }

  .label-group .value {
    font-size: 1.75rem;
    font-weight: 700;
  }

  .label-group .label {
    font-size: 1.05rem;
    text-transform: capitalize;
  }
</style>
