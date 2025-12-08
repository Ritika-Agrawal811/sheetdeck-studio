<article class="stat-card">
  <span class="stat-icon">
    <svelte:component this={icon} size={20} />
  </span>
  <h3>{label}</h3>
  <p class="stat">{value}</p>
</article>

<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let label: string = '';
  export let value: number = 0;
  export let icon: ComponentType | null = null;
</script>

<style>
  .stat-card {
    height: 155px;
    padding: 1em;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
  }

  .stat-card h3 {
    font-size: 1rem;
    margin-top: 0.75em;
  }

  .stat {
    font-size: 2.15rem;
    margin-top: 0.25em;
  }

  .stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    color: var(--blue-color);
    background-color: var(--light-blue-color);
    padding: 0.5em;
    border-radius: 5px;
  }

  @media (min-width: 1440px) {
    .stat-card {
      height: 165px;
      padding: 1em;
    }

    .stat {
      margin-top: 0.5em;
    }
  }
</style>
