<section class="cheatsheet-page">
  <h2 class="heading">Cheat Sheets</h2>
  <section class="grid">
    <CategoriesGroup bind:activeCategory bind:activeSubcategory />

    <main>
      <header>
        <div class="layout-group">
          <button class="layout-btn" class:active={layout === 'grid'}>
            <Grid2x2 size={25} />
          </button>
          <button class="layout-btn">
            <TableOfContents size={25} />
          </button>
        </div>
        <Dropdown list={filters} name="filters" label={null} id="filter-select" variant="pill" size="small" />
      </header>
      <section>
        {#if $cheatsheets.isLoading}
          <Loader label="Loading Cheat Sheets" />
        {:else if $cheatsheets.data}
          <Grid data={$cheatsheets.data} />
        {/if}
      </section>
    </main>
  </section>
</section>

<script lang="ts">
  import Dropdown from '../components/common/Dropdown.svelte';
  import CategoriesGroup from '../components/features/cheatsheet-display/CategoriesGroup.svelte';

  import { Grid2x2, TableOfContents } from 'lucide-svelte';
  import { getCheatSheets } from '../queries/cheatsheets';
  import Loader from '../components/common/Loader.svelte';
  import Grid from '../components/features/cheatsheet-display/Grid.svelte';

  /* ---- filter dropdown ---- */
  const filters = [
    'Most recent',
    'Oldest first',
    'Most viewed',
    'Least viewed',
    'Most downloaded',
    'Least downloaded',
    'Recently updated',
  ];

  let layout: 'grid' | 'table' = 'grid';

  /* ---- cheat sheets data ---- */
  let activeCategory: string = 'html';
  let activeSubcategory: string = 'concepts';

  $: cheatsheets = getCheatSheets(activeCategory, activeSubcategory);
</script>

<style>
  .cheatsheet-page {
    height: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 315px 1fr;
    gap: 1.5em;
    height: calc(100% - 3.5rem);
  }

  /* ---- cheatsheets display ---- */

  main header {
    display: grid;
    grid-template-columns: 3fr 1.25fr;
    gap: 0.5em;
    margin-bottom: 1.5em;
  }

  @media (min-width: 1440px) {
    main header {
      grid-template-columns: 3fr 1fr;
    }
  }

  .layout-group {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5em;
  }

  .layout-btn {
    padding: 0.75em;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    background-color: var(--background);
    color: var(--blue-color);
    cursor: pointer;
  }

  .layout-btn.active {
    background-color: var(--blue-color);
    color: var(--background);
  }
</style>
