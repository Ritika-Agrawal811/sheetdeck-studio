<section>
  <h2 class="heading">Overview</h2>
  <header class="stat-cards-container">
    <!-- Total cheat sheets card -->
    <StatCard label="Total Cheat sheets" variant="fill" redirect="cheatsheet" value={stats.totalCheatsheets} />

    <!-- Total views card -->
    <StatCard label="Total Views" icon={ChartNoAxesCombined} value={stats.totalViews} />

    <!-- Total visitors card -->
    <StatCard label="Total Visitors" icon={Users} value={stats.totalUniqueVisitors} />

    <div class="header-aside">
      <!-- Total clicks card -->
      <StatCard label="Downloads" layout="horizontal" icon={MousePointerClick} value={stats.totalClicks} />

      <!-- Total downloads card -->
      <StatCard label="Clicks" layout="horizontal" icon={Download} value={stats.totalDownloads} />
    </div>
  </header>
</section>

<script lang="ts">
  import { ChartNoAxesCombined, Users, MousePointerClick, Download } from 'lucide-svelte';
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
  .stat-cards-container {
    display: flex;
    gap: 1em;
  }

  .header-aside {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 160px;
    gap: 1em;
  }
</style>
