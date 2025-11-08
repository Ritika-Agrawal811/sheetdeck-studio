<section class="devices-chart-container">
  <h3 class="sub-heading">Devices</h3>
  {#if $devicesStats.isLoading}
    <div class="skeleton-card">
      <div class="skeleton-labels">
        <div class="skeleton-title shimmer"></div>
        {#each devicesChartData as _}
          <div class="skeleton-label-group">
            <div class="skeleton-value shimmer"></div>
            <div class="skeleton-label shimmer"></div>
          </div>
        {/each}
      </div>
    </div>
  {:else if $devicesStats.data}
    <ConcentricArcs data={devicesChartData} label="page views" />
  {/if}
</section>

<script lang="ts">
  import ConcentricArcs from '../charts/ConcentricArcs.svelte';

  import { getDevicesAnalytics } from '../../../queries/analytics';
  import { devicesStatsToConcentricArcChartData } from '../../../utils/prepareChartData';

  import { DEVICES } from '../../../constants/metrics';
  import type { Period } from '../../../types/analytics';
  import type { ConcentricArcChartData } from '../../../types/chart';

  export let selectedPeriod: Period = '7d';

  let devicesChartData: ConcentricArcChartData[] = DEVICES.map((item) => ({
    key: item.type,
    value: 0,
    color: item.color,
  }));

  $: devicesStats = getDevicesAnalytics(selectedPeriod);
  $: if ($devicesStats.data) {
    devicesChartData = devicesStatsToConcentricArcChartData($devicesStats.data, 'page views');
  }
</script>

<style>
  .devices-chart-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    padding: 1em;
    overflow: hidden;
  }

  /* ---- skeleton container ---- */
  .skeleton-card {
    position: relative;
    height: 90%;
    width: 100%;
  }

  .skeleton-labels {
    position: absolute;
    width: 50%;
    right: 0;
  }

  .skeleton-title {
    width: 90%;
    height: 25px;
    margin-bottom: 2em;
  }

  .skeleton-label-group {
    margin-bottom: 2em;
  }

  .skeleton-value {
    width: 80%;
    height: 20px;
    margin-bottom: 1em;
  }

  .skeleton-label {
    width: 70%;
    height: 15px;
  }
</style>
