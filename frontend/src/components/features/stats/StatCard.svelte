<article class="stat-card {layout} {variant}">
  <div class="stat-header">
    <h3>{label}</h3>
    {#if redirect}
      <button class="stat-redirect-icon" on:click={() => setActivePath(redirect)}>
        <MoveUpRight size={20} />
      </button>
    {:else}
      <span class="stat-icon">
        <svelte:component this={icon} size={30} />
      </span>
    {/if}
  </div>
  <span class="stat">{value}</span>
</article>

<script lang="ts">
  import { MoveUpRight } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';
  import { setActivePath, type Paths } from '../../../stores/navigate';

  export let label: string = '';
  export let value: number = 0;
  export let icon: ComponentType | null = null;
  export let layout: 'vertical' | 'horizontal' = 'vertical';
  export let variant: 'fill' | 'outline' = 'outline';
  export let redirect: Paths | null = null;
</script>

<style>
  .stat-card {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    min-width: fit-content;
    border: 2px solid transparent;
    border-radius: 10px;
    box-shadow: 0 0 0.15em 0.15em var(--light-gray-color);
  }

  /* ---- variant classes ---- */
  .stat-card.outline {
    border: 2px solid var(--gray-color);
  }

  .stat-card.fill {
    background-color: var(--blue-color);
    color: var(--background);
  }

  /* ---- layout classes ---- */

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

  /* --- redirect icon classes ---- */
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
