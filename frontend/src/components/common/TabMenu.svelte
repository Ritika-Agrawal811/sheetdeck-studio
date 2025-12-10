<nav>
  <ul role="tablist" class="tabs">
    {#each tabs as tab}
      <li
        role="tab"
        tabindex={activeTab === tab.name ? 0 : -1}
        class="tab {activeTab === tab.name ? 'active' : null}"
        on:click={() => setActiveTab(tab.name)}
        on:keydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setActiveTab(tab.name);
          }
        }}
      >
        {tab.label}
      </li>
    {/each}
  </ul>
</nav>

<script lang="ts">
  import type { Tab } from '../../types/global';

  export let tabs: Tab[] | null = null;
  export let activeTab: string = '';

  const setActiveTab = (tab: string) => {
    activeTab = tab;
  };
</script>

<style>
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
</style>
