<section class="browsers-chart-container">
  <nav>
    <ul role="tablist" class="tabs">
      <li role="tab" tabindex="0" class="tab active">Browsers</li>
      <li role="tab" tabindex="-1" class="tab disabled">Operating Systems</li>
    </ul>
  </nav>
  <div class="main">
    <!-- Browsers Section -->
    {#if $browsersStats.isLoading}
      <div class="skeleton-card">
        <div class="skeleton-title shimmer"></div>
        {#each Array(5) as _}
          <div class="skeleton-value shimmer"></div>
        {/each}
      </div>
    {:else if $browsersStats.data}
      <h4>page views</h4>
      <ul class="list">
        {#each $browsersStats.data.browsers as item}
          <li class="list-item">{item.browser} <span>{item.views}</span></li>
        {/each}
      </ul>
    {/if}
  </div>
</section>

<script lang="ts">
  import { getBrowsersAnalytics } from '../../../queries/analytics';
  import type { Period } from '../../../types/analytics';

  export let selectedPeriod: Period = '7d';

  $: browsersStats = getBrowsersAnalytics(selectedPeriod);
</script>

<style>
  .browsers-chart-container {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    padding: 1em;
    overflow: hidden;
    height: 100%;
  }

  .tabs {
    display: flex;
    gap: 1em;
    list-style: none;
  }

  .tab {
    cursor: pointer;
    border: 1px solid var(--gray-color);
    border-radius: 100vmax;
    padding: 0.5em 1em;
    font-size: 0.95em;
  }

  .tab:hover {
    background-color: var(--light-gray-color);
  }

  .tab.active {
    background-color: var(--orange-color);
    color: white;
    border-color: var(--orange-color);
  }

  .main {
    height: 175px;
    overflow-y: hidden;
  }

  @media (min-width: 1440px) {
    .main {
      height: 230px;
    }
  }

  .main h4 {
    text-align: right;
    text-transform: uppercase;
    color: var(--dark-gray-color);
    font-size: 0.85rem;
    margin-bottom: 1em;
  }

  .list {
    list-style: none;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    background: var(--light-gray-color);
    padding: 0.5em 1em;
    margin-bottom: 0.75em;
    border-left: 2px solid var(--dark-gray-color);
    border-bottom: 1px solid var(--gray-color);
    border-radius: 5px;
  }

  /* --- skeleton container ---- */
  .skeleton-card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .skeleton-title {
    width: 40%;
    height: 25px;
    margin-bottom: 1em;
  }

  .skeleton-value {
    width: 100%;
    height: 35px;
    margin-bottom: 1em;
  }
</style>
