<div class="chart-container">
  <canvas bind:this={canvas}></canvas>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart, registerables } from 'chart.js';
  import 'chartjs-adapter-date-fns';

  import type { AreaChartData } from '../../../types/chart';

  export let data: AreaChartData[] = [];
  export let label: string = 'Views';

  let canvas: HTMLCanvasElement;
  let chart: Chart;

  onMount(() => {
    Chart.register(...registerables);

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((d) => d.key),
        datasets: [
          {
            label: label,
            data: data.map((d) => d.value),
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#3b82f6',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'white',
            titleColor: '#1f2937',
            bodyColor: '#3b82f6',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
              title: (context) => {
                const dataIndex = context[0].dataIndex;
                const rawDate = data[dataIndex].key;
                const date = new Date(rawDate);

                return date.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'long',
                  day: 'numeric',
                });
              },
              label: (context) => {
                return `${label}: ${context.parsed.y}`;
              },
            },
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'MMM dd',
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#e5e7eb',
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  });

  $: if (chart && data) {
    chart.data.labels = data.map((d) => d.key);
    chart.data.datasets[0].data = data.map((d) => d.value);
    chart.update();
  }
</script>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
    padding: 1rem;
  }
</style>
