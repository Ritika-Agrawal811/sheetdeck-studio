{#if $pageviewsStats.isLoading}
  <!-- Skeleton Loader -->
  <div class="skeleton-card">
    <div class="skeleton-tabs">
      {#each metricsData as item}
        <div class="skeleton-tab">
          {item.type}
          <div class="skeleton-tab-value shimmer"></div>
        </div>
      {/each}
    </div>
    <div class="skeleton-chart shimmer" />
  </div>
{:else if $pageviewsStats.data}
  <!-- Analytics Panel -->
  <section class="analytics-chart-container">
    <ul role="tablist" class="tab-list">
      {#each metricsData as item}
        <li
          role="tab"
          class="tab"
          class:active={selectedMetric === item.type}
          on:click={() => setActiveMetric(item.type)}
          on:keydown={(e) => e.key === 'Enter' && setActiveMetric(item.type)}
        >
          {item.type}
          <span class="tab-value">{item.value}</span>
        </li>
      {/each}
    </ul>
    <Area data={pageviewsStatstoAreaChartData($pageviewsStats.data.intervals)} />
  </section>
{/if}

<script lang="ts">
  import Area from '../charts/Area.svelte';

  import { METRICS, type Metric } from '../../../constants/metrics';
  import type { AreaChartData } from '../../../types/chart';
  import type { MetricsData, Period } from '../../../types/analytics';

  import { getPageviewsAnalytics } from '../../../queries/analytics';
  import { pageviewsStatstoAreaChartData } from '../../../utils/prepareChartData';

  export let selectedPeriod: Period = '7d';
  export let selectedMetric: Metric = 'page views';

  let metricsData: MetricsData[] = METRICS.map((item) => ({ type: item.type, value: 0 }));

  $: pageviewsStats = getPageviewsAnalytics(selectedPeriod);

  $: if ($pageviewsStats.data) {
    metricsData = METRICS.map((item) => {
      return {
        type: item.type,
        value: item.key ? $pageviewsStats.data[item.key] : 0,
      };
    });
  }

  const setActiveMetric = (type: Metric) => {
    selectedMetric = type;
  };
</script>

<style>
  .analytics-chart-container {
    border-radius: 10px;
    border: 1px solid var(--gray-color);
  }

  .tab-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    list-style-type: none;
    background-color: var(--light-gray-color);
  }

  .tab-list .tab {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em 1em 0.5em 1em;
    cursor: pointer;
    font-size: 0.95rem;
    text-transform: capitalize;
    border-bottom: 1px solid var(--gray-color);
  }

  .tab-list .tab.active {
    background-color: var(--background);
    border-bottom: 4px solid var(--orange-color);
  }

  .tab-list .tab:not(:last-child) {
    border-right: 1px solid var(--gray-color);
  }

  .tab-list .tab-value {
    font-size: 1.75rem;
    font-weight: 700;
  }

  /* ---- skeleton container ---- */
  .skeleton-card {
    height: 400px;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
  }

  .skeleton-tabs {
    height: 20%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-bottom: 1px solid var(--gray-color);
    background-color: var(--light-gray-color);
  }

  .skeleton-tab {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    font-size: 0.95rem;
    text-transform: capitalize;
  }

  .skeleton-tab:not(:last-child) {
    border-right: 1px solid var(--gray-color);
  }

  .skeleton-tab-value {
    width: 80%;
    height: 40%;
  }

  .skeleton-chart {
    width: 95%;
    height: 70%;
    margin: 1em auto;
  }
</style>
