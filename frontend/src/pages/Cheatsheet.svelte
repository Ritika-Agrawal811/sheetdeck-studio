<section class="cheatsheet-page">
  <h2 class="heading">Cheat Sheets</h2>
  <section class="grid">
    <CategoriesGroup />

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
        <Dropdown list={filters} name="filters" label={null} id="filter-select" />
      </header>
    </main>
  </section>
</section>

<script lang="ts">
  import Dropdown from '../components/common/Dropdown.svelte';

  import { Grid2x2, TableOfContents } from 'lucide-svelte';
  import CategoriesGroup from '../components/features/cheatsheet-display/CategoriesGroup.svelte';

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
</script>

<style>
  .cheatsheet-page {
    height: 100%;
  }

  .grid {
    display: flex;
    height: calc(100% - 3.5rem);
  }

  /* ---- cheatsheets display ---- */

  main {
    flex-grow: 1;
    padding: 0.5em 1em;
  }

  main header {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0.5em;
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
