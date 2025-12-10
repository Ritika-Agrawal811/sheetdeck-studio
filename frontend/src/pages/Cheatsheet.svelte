<section class="cheatsheet-page">
  <h2 class="heading">Cheat Sheets</h2>
  <section class="cheatsheet-display">
    <CategoriesGroup bind:activeCategory bind:activeSubcategory />
    <main>
      <header>
        <div class="layout-group">
          <button class="layout-btn" class:active={layout === 'grid'} on:click={() => setLayout('grid')}>
            <Grid2x2 size={25} />
          </button>
          <button class="layout-btn" class:active={layout === 'table'} on:click={() => setLayout('table')}>
            <TableOfContents size={25} />
          </button>
        </div>
        <Dropdown
          list={sortFilters}
          name="filters"
          label={null}
          id="filter-select"
          variant="pill"
          size="small"
          bind:value={sortLabel}
        />
      </header>
      <section>
        {#if $cheatsheets.isLoading}
          <Loader label="Loading Cheat Sheets" />
        {:else if $cheatsheets.data}
          {#if layout === 'grid'}
            <Grid data={$cheatsheets.data} bind:this={gridElement} {selectedFilter} />
          {:else if layout === 'table'}
            <Table data={$cheatsheets.data} bind:this={tableElement} {selectedFilter} />
          {/if}
        {/if}
      </section>
      <div class="scroll-buttons-wrapper">
        <ScrollButtons isScrollingUpDown={true} {scrollContainer} valueToScroll={620} />
      </div>
    </main>
  </section>
</section>

<script lang="ts">
  import Loader from '../components/common/Loader.svelte';
  import Dropdown from '../components/common/Dropdown.svelte';
  import CategoriesGroup from '../components/features/cheatsheet-display/CategoriesGroup.svelte';
  import Grid from '../components/features/cheatsheet-display/Grid.svelte';
  import Table from '../components/features/cheatsheet-display/Table.svelte';
  import ScrollButtons from '../components/common/ScrollButtons.svelte';

  import { Grid2x2, TableOfContents } from 'lucide-svelte';
  import { getCheatSheets } from '../queries/cheatsheets';
  import type GridComponent from '../components/features/cheatsheet-display/Grid.svelte';
  import type TableComponent from '../components/features/cheatsheet-display/Table.svelte';
  import type { SortFilters } from '../types/cheatsheet';

  /* ---- filter dropdown ---- */
  const filters = [
    { label: 'Most recent', value: 'recent' },
    { label: 'Oldest first', value: 'oldest' },
    { label: 'Most viewed', value: 'most_viewed' },
    { label: 'Least viewed', value: 'least_viewed' },
    { label: 'Most downloaded', value: 'most_downloaded' },
    { label: 'Least downloaded', value: 'least_downloaded' },
  ];

  const sortFilters = filters.map((item) => item.label);

  let layout: 'grid' | 'table' = 'grid';

  /* ---- cheat sheets data ---- */
  let activeCategory: string = 'html';
  let activeSubcategory: string = 'concepts';
  let sortLabel: string = 'Most recent';

  let gridElement: GridComponent;
  let tableElement: TableComponent;

  $: selectedFilter = (filters.find((p) => p.label === sortLabel)?.value as SortFilters) ?? 'recent';
  $: cheatsheets = getCheatSheets(activeCategory, activeSubcategory, selectedFilter, 15);
  $: scrollContainer = layout === 'grid' ? gridElement?.getScrollContainer() : tableElement?.getScrollContainer();

  const setLayout = (layoutType: 'grid' | 'table') => {
    layout = layoutType;
  };
</script>

<style>
  .cheatsheet-page {
    height: 100%;
  }

  .cheatsheet-display {
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

  main {
    position: relative;
  }

  .scroll-buttons-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.5em 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, transparent, var(--background), var(--light-gray-color));
    backdrop-filter: blur(20px);
  }
</style>
