<section class="home-page">
  <h2 class="heading">Overview</h2>
  <header>
    <!-- Total cheat sheets card -->
    <CheatsheetStatCard value={stats.totalCheatsheets} />

    <div class="stat-cards-container">
      <!-- Total views card -->
      <StatCard label="Total Views" icon={ChartNoAxesCombined} value={stats.totalViews} />

      <!-- Total visitors card -->
      <StatCard label="Total Visitors" icon={Users} value={stats.totalUniqueVisitors} />

      <!-- Total clicks card -->
      <StatCard label="Downloads" icon={MousePointerClick} value={stats.totalClicks} />

      <!-- Total downloads card -->
      <StatCard label="Clicks" icon={Download} value={stats.totalDownloads} />
    </div>

    <StorageStatCard />
  </header>
  <section class="world-map-section">
    <CountriesWorldMap />
    <TopCheatsheets />
  </section>
</section>

<script lang="ts">
  import { ChartNoAxesCombined, Users, MousePointerClick, Download } from 'lucide-svelte';
  import CheatsheetStatCard from '../components/features/stats/CheatsheetStatCard.svelte';
  import StorageStatCard from '../components/features/stats/StorageStatCard.svelte';
  import TopCheatsheets from '../components/features/stats/TopCheatsheets.svelte';
  import CountriesWorldMap from '../components/features/stats/CountriesWorldMap.svelte';
  import StatCard from '../components/features/stats/StatCard.svelte';

  import { getConfig } from '../queries/config';

  $: configData = getConfig();

  $: stats = $configData.data?.stats ?? {
    totalCheatsheets: 0,
    totalViews: 0,
    totalUniqueVisitors: 0,
    totalClicks: 0,
    totalDownloads: 0,
  };
</script>

<style>
  header {
    display: grid;
    grid-template-columns: 0.9fr 1fr 1.4fr;
    gap: 1.5em;
  }

  .stat-cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
  }

  .world-map-section {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 1.5em;
    margin-top: 1.5em;
  }
</style>
