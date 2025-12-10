<div class="top-cheatsheets-container">
  <header>
    <h3 class="sub-heading">Most Viewed Cheat Sheets</h3>
    <ScrollButtons scrollContainer={element} valueToScroll={300} />
  </header>
  {#if $cheatsheets.isLoading}
    <div class="skeleton-card" style="height: 20dvh; margin-top: 1em;">
      <div class="skeleton-title shimmer" style="width: 60%;"></div>
      <div class="skeleton-list shimmer" style="height: 15dvh; margin-top: 1em;"></div>
    </div>
  {:else if $cheatsheets.data}
    <div class="cheatsheets-list" bind:this={element}>
      {#each $cheatsheets.data as item}
        <article class="cheatsheet-card">
          <CategoryTag category={item.category} position="top-left" />
          <figure>
            <img src={item.imageUrl} alt={item.title} />
          </figure>
          <h4>{item.title}</h4>
          <p>Sub category : {item.subcategory}</p>
          <div class="cheatsheet-stats">
            <div class="filter-tag"><ArrowDownToLine size={16} /> {item.downloads}</div>
            <div class="filter-tag"><ChartNoAxesColumn size={16} /> {item.views}</div>
          </div>
        </article>
      {/each}
    </div>
  {/if}
</div>

<script lang="ts">
  import ScrollButtons from '../../common/ScrollButtons.svelte';
  import CategoryTag from './CategoryTag.svelte';
  import { ArrowDownToLine, ChartNoAxesColumn } from 'lucide-svelte';

  import { getCheatSheets } from '../../../queries/cheatsheets';

  let element: HTMLElement | undefined = undefined;

  $: cheatsheets = getCheatSheets('', '', 'most_viewed', 5);
</script>

<style>
  .top-cheatsheets-container {
    position: relative;
    overflow-x: hidden;
  }

  .top-cheatsheets-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 4em;
    height: 80%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, var(--background));
    backdrop-filter: blur(20px);
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  .cheatsheets-list {
    margin-top: 1em;
    width: 100%;
    display: flex;
    gap: 1.5em;
    overflow-x: auto;
  }

  .cheatsheet-card {
    position: relative;
    min-width: 275px;
    height: 275px;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    padding: 1em;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 165px;
  }

  img {
    height: 145px;
    width: 85%;
    object-fit: contain;
    filter: drop-shadow(0 0 5px var(--gray-color));
  }

  .cheatsheet-card h4 {
    margin-top: 0.5em;
    font-size: 0.9rem;
  }

  .cheatsheet-card p {
    margin-top: 0.25em;
    font-size: 0.85rem;
    color: var(--dark-gray-color);
  }

  .cheatsheet-card .cheatsheet-stats {
    display: flex;
    gap: 1.5em;
    margin-top: 0.5em;
  }

  .filter-tag {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .filter-tag:hover {
    color: var(--blue-color);
  }

  @media (min-width: 1440px) {
    .cheatsheet-card {
      height: 300px;
    }

    .cheatsheet-card .cheatsheet-stats {
      margin-top: 0.75em;
    }

    figure {
      height: 180px;
    }
  }
</style>
