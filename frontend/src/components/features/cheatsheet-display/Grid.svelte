<div class="grid-container" bind:this={gridElement}>
  {#each data as item}
    <article class="card">
      <div class="tag" style="--color: {getColor(item.category)}">
        {getCategory(item.category)}
      </div>
      <figure>
        <img src={item.imageUrl} alt={item.title} />
      </figure>

      <h4>
        {item.title}

        {#if selectedFilter.includes('downloaded')}
          <div class="filter-tag"><ArrowDownToLine size={16} /> {item.downloads}</div>
        {:else if selectedFilter.includes('viewed')}
          <div class="filter-tag"><ChartNoAxesColumn size={16} /> {item.views}</div>
        {/if}
      </h4>
    </article>
  {/each}
</div>

<script lang="ts">
  import type { Cheatsheet, SortFilters } from '../../../types/cheatsheet';
  import { CATEGORIES_INFO, type CategoryKey } from '../../../constants/categories';
  import { ArrowDownToLine, ChartNoAxesColumn } from 'lucide-svelte';

  export let data: Cheatsheet[];
  export let selectedFilter: SortFilters = 'recent';

  let gridElement: HTMLDivElement | undefined = undefined;
  export { gridElement as this };

  const getCategory = (category: string) => {
    return CATEGORIES_INFO[category as CategoryKey].title;
  };

  const getColor = (category: string) => {
    return CATEGORIES_INFO[category as CategoryKey].color;
  };

  export function scrollBy(options: ScrollToOptions) {
    gridElement?.scrollBy(options);
  }
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5em;
    height: 620px;
    overflow-y: auto;
  }

  @media (min-width: 1440px) {
    .grid-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      height: 650px;
    }
  }

  .card {
    position: relative;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 260px;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
  }

  img {
    height: 230px;
    width: 85%;
    object-fit: contain;
    filter: drop-shadow(0 0 5px var(--gray-color));
  }

  h4 {
    position: relative;
    font-size: 0.95rem;
    font-weight: 400;
    text-align: center;
    margin: 0.65em 0;
  }

  .filter-tag {
    position: absolute;
    right: 5px;
    top: 0;
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .filter-tag:hover {
    color: var(--blue-color);
  }

  .tag {
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    border: 1px solid var(--color);
    color: var(--color);
    border-radius: 100vmax;
    padding: 0.2em 0.75em;
    font-size: 0.75rem;
    width: fit-content;
  }
</style>
