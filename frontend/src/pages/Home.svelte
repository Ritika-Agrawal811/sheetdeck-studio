<section>
  <h2>Overview</h2>
  <header class="stat-cards-container">
    <!-- Total cheat sheets card -->
    <article class="stat-card vertical cheatsheet-count-card">
      <div class="stat-header">
        <h3>Total Cheat sheets</h3>
        <button class="stat-redirect-icon" on:click={() => setActivePath('cheatsheet')}>
          <MoveUpRight size={20} />
        </button>
      </div>
      <span class="stat">{$stats.totalCheatsheets}</span>
    </article>

    <!-- Total views card -->
    <article class="stat-card vertical">
      <div class="stat-header">
        <h3>Total Views</h3>
        <span class="stat-icon">
          <ChartNoAxesCombined size={30} />
        </span>
      </div>
      <span class="stat">{$stats.totalViews}</span>
    </article>

    <!-- Total visitors card -->
    <article class="stat-card vertical">
      <div class="stat-header">
        <h3>Total Visitors</h3>
        <span class="stat-icon">
          <Users size={30} />
        </span>
      </div>
      <span class="stat">{$stats.totalUniqueVisitors}</span>
    </article>

    <div class="header-aside">
      <!-- Total clicks card -->
      <article class="stat-card horizontal">
        <div class="stat-header">
          <span class="stat-icon">
            <MousePointerClick size={30} />
          </span>
          <h3>Clicks</h3>
        </div>
        <span class="stat">{$stats.totalClicks}</span>
      </article>

      <!-- Total downloads card -->
      <article class="stat-card horizontal">
        <div class="stat-header">
          <span class="stat-icon">
            <Download size={30} />
          </span>
          <h3>Downloads</h3>
        </div>
        <span class="stat">{$stats.totalDownloads}</span>
      </article>
    </div>
  </header>
</section>

<script>
  import { MoveUpRight, ChartNoAxesCombined, Users, MousePointerClick, Download } from 'lucide-svelte';
  import { stats } from '../stores/config';
  import { setActivePath } from '../stores/navigate';
</script>

<style>
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1em;
  }

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

  /* ---- stat cards ---- */

  .stat-card {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    min-width: fit-content;
    border: 2px solid var(--gray-color);
    border-radius: 10px;
    box-shadow: 0 0 0.15em 0.15em var(--light-gray-color);
  }

  .stat-card.vertical {
    height: 160px;
    flex-direction: column;
    padding: 1em 1.25em;
  }

  .stat-card.horizontal {
    align-items: center;
    gap: 2em;
    padding: 0.5em 1.15em;
  }

  .stat-card .stat-header {
    display: flex;
    align-items: center;
  }

  .stat-card.vertical .stat-header {
    justify-content: space-between;
    gap: 3em;
  }

  .stat-card.horizontal .stat-header {
    gap: 1em;
  }

  .stat-card h3 {
    font-size: 1rem;
  }

  .stat-card.vertical .stat {
    font-size: 3rem;
  }

  .stat-card.horizontal .stat {
    font-size: 1.75rem;
  }

  .stat-icon {
    color: var(--green-color);
  }

  .cheatsheet-count-card {
    background-color: var(--blue-color);
    color: var(--background);
  }

  .stat-redirect-icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--background);
    color: var(--dark-gray-color);
    transition: all 0.2s;
    cursor: pointer;
    outline: none;
    border: none;
  }

  .stat-redirect-icon:hover {
    background-color: var(--orange-color);
    color: var(--background);
  }
</style>
