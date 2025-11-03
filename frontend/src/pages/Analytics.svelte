<section class="analytics-page">
  <header>
    <h2 class="heading">Analytics</h2>
    <Dropdown
      list={periodFilters}
      name="time-filters"
      label={null}
      id="time-filters-select"
      variant="pill"
      size="small"
      bind:value={periodLabel}
    />
  </header>
  <section class="chart-grid">
    <AnalyticsPanel bind:selectedPeriod />
    <DevicesStatCard bind:selectedPeriod />
  </section>
</section>

<script lang="ts">
  import Dropdown from '../components/common/Dropdown.svelte';
  import AnalyticsPanel from '../components/features/stats/AnalyticsPanel.svelte';
  import DevicesStatCard from '../components/features/stats/DevicesStatCard.svelte';

  import type { Period } from '../types/analytics';

  /* ---- time filter dropdown ---- */
  const periods = [
    {
      label: 'Last 24 Hours',
      period: '24h',
    },
    {
      label: 'Last 7 Days',
      period: '7d',
    },
    {
      label: 'Last 30 Days',
      period: '30d',
    },
    {
      label: 'Last 3 Months',
      period: '3m',
    },
    {
      label: 'Last 6 Months',
      period: '6m',
    },
    {
      label: 'Last 12 Months',
      period: '12m',
    },
  ];

  const periodFilters = periods.map((item) => item.label);

  let periodLabel: string = 'Last 7 Days';
  let selectedPeriod: Period = '7d';

  $: if (periodLabel) {
    selectedPeriod = (periods.find((p) => p.label === periodLabel)?.period as Period) ?? '7d';
  }
</script>

<style>
  .analytics-page {
    height: 100%;
  }

  header {
    display: grid;
    grid-template-columns: 5fr 1fr;
  }

  .chart-grid {
    display: grid;
    grid-template-columns: 2.5fr 1.5fr;
    gap: 1.5em;
  }
</style>
