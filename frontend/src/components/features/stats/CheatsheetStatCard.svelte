<section class="cheatsheets-stat-card">
  <header>
    <h3>Total Cheat Sheets</h3>
    <button class="redirect-icon" on:click={() => setActivePath('cheatsheet')}>
      <MoveUpRight size={17} />
    </button>
  </header>
  <p class="stat">{value}</p>
  <div>
    <h4>Top Categories</h4>
    <ul class="list">
      {#each categoriesData.slice(0, 2) as item}
        <li>
          <div class="category-info">
            <img src={getImageUrl(item.category)} alt={getCategory(item.category)} width="30" height="30" />
            <p>{getCategory(item.category)}</p>
          </div>
          <span class="value">{item.totalCount}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<script lang="ts">
  import { MoveUpRight } from 'lucide-svelte';
  import { setActivePath } from '../../../stores/navigate';
  import { getConfig } from '../../../queries/config';
  import { getCategory, getImageUrl } from '../../../utils/categoriesData';

  export let value: number = 0;

  $: configData = getConfig();
  $: categoriesStats = $configData.data?.categoryStats ?? [];
  $: categoriesData = categoriesStats.sort((a, b) => b.totalCount - a.totalCount);
</script>

<style>
  .cheatsheets-stat-card {
    padding: 1em;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cheatsheets-stat-card header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cheatsheets-stat-card h3 {
    font-size: 1.05rem;
  }

  .cheatsheets-stat-card .stat {
    font-size: 3rem;
    margin-top: 0.2em;
  }

  .redirect-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    color: var(--background);
    background-color: var(--blue-color);
    padding: 0.5em;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .redirect-icon:hover {
    background-color: var(--hover-blue-color);
  }

  .cheatsheets-stat-card h4 {
    font-size: 0.95rem;
    margin-bottom: 1em;
  }

  .cheatsheets-stat-card .list {
    list-style-type: none;
  }

  .cheatsheets-stat-card .list li {
    font-size: 1.15rem;
    padding: 0.75em 0.75em 0.75em 0.5em;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cheatsheets-stat-card .list li .category-info {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .cheatsheets-stat-card .list li:not(:last-child) {
    margin-bottom: 1em;
  }

  .cheatsheets-stat-card .list li .value {
    font-weight: 600;
    color: var(--dark-gray-color);
  }
</style>
