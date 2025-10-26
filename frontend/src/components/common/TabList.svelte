<ul class="list {variant}">
  {#each data as item}
    <li
      role="tab"
      style={variant === 'fill' ? `--color: ${item.color}` : null}
      class="list-item"
      class:active={activeItem === item.key.toLowerCase()}
      on:click={() => setActiveItem(item.key.toLowerCase())}
      on:keydown={(e) => e.key === 'Enter' && setActiveItem(item.key.toLowerCase())}
    >
      {formatLabel(item.key)} ({item.value})
    </li>
  {/each}
</ul>

<script lang="ts">
  import type { ArcChartData } from '../../types/chart';
  import { formatLabel } from '../../utils/formatLabel';

  export let data: ArcChartData[] = [];
  export let variant: 'fill' | 'outline' = 'outline';

  export let activeItem: string | null = null;
  export let setActiveItem: (item: string) => void;

  $: if (data.length > 0) {
    data = data.sort((a, b) => a.key.length - b.key.length);
  }
</script>

<style>
  .list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75em;
    margin: 1em 0;
  }

  .list .list-item {
    font-size: 0.9rem;
    background-color: var(--background);
    padding: 0.4em 0.75em;
    border-radius: 100vmax;
    cursor: pointer;
  }

  /* ---- variant classes ---- */
  .list.fill .list-item {
    border: 1px solid var(--color);
    color: var(--color);
  }

  .list.outline .list-item {
    border: 1px solid var(--gray-color);
  }

  /* ---- active classes ---- */
  .list.fill .list-item.active {
    background-color: var(--color);
    color: var(--background);
  }

  .list.outline .list-item.active {
    background-color: var(--dark-gray-color);
    color: var(--background);
  }
</style>
