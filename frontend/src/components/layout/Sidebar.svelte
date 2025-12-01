<aside class:minimize={isMinimized}>
  <div class="flex-center upload-btn" class:selected={$activePath === 'upload'}>
    <Button size="small" variant="outline" icon={true} on:click={() => setActivePath('upload')}>
      <ImageUp size={22} />
      <span class="text">Upload New Sheet</span>
    </Button>
  </div>

  {#if !isMinimized}
    <div class="toggle-btn">
      <hr />
      <Button size="small" variant="transparent" icon={true} on:click={toggleSidebar}>
        <ChevronLeft size={25} /> Minimize
      </Button>
    </div>
  {:else}
    <div class="toggle-btn">
      <Button size="tiny" variant="transparent" icon={true} on:click={toggleSidebar}>
        Expand <ChevronRight size={26} />
      </Button>
    </div>
  {/if}

  <nav class="menu">
    <ul role="tablist">
      {#each navItems as item}
        <li
          role="tab"
          tabindex="0"
          class:selected={$activePath === item.path}
          on:click={() => setActivePath(item.path)}
          on:keydown={(e) => e.key === 'Enter' && setActivePath(item.path)}
        >
          <svelte:component this={item.icon} size={25} />
          <span class="text">{item.label}</span>
        </li>
      {/each}
    </ul>
  </nav>

  <StorageUsage bind:isMinimized />
</aside>

<script lang="ts">
  import { ImageUp, ChevronLeft, ChevronRight, House, FileText, ChartNoAxesCombined } from 'lucide-svelte';
  import StorageUsage from '../features/stats/StorageUsage.svelte';
  import Button from '../common/Button.svelte';
  import type { ComponentType } from 'svelte';

  import { activePath, setActivePath } from '../../stores/navigate';
  import type { Paths } from '../../stores/navigate';

  /* ---- Toggle sidebar width ---- */
  export let isMinimized = false;

  const toggleSidebar = () => {
    isMinimized = !isMinimized;
  };

  /* ---- Handle Navigation links ---- */
  type NavItem = {
    label: string;
    icon: ComponentType;
    path: Paths;
  };

  const navItems: NavItem[] = [
    { label: 'Home', icon: House, path: 'home' },
    { label: 'Cheat Sheets', icon: FileText, path: 'cheatsheet' },
    { label: 'Analytics', icon: ChartNoAxesCombined, path: 'analytics' },
  ];
</script>

<style>
  aside {
    width: 250px;
    height: 100%;
    background-color: var(--gray-color);
    border-radius: 0 3em 0 0;
    padding: 2em 0;
    transition: width 0.5s;
    display: flex;
    flex-direction: column;
  }

  aside.minimize {
    width: 100px;
  }

  .flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  aside .text {
    visibility: visible;
    transition: visibility 0s 0.7s;
    white-space: nowrap;
  }

  aside.minimize .text {
    visibility: hidden;
    display: none;
    transition: visibility 0s 0.2s;
  }

  /* ---- minimize/maximize button ---- */

  .toggle-btn {
    display: flex;
    align-items: center;
    gap: 0.25em;
    margin: 1em 0;
  }

  .toggle-btn hr {
    flex-grow: 1;
    height: 1px;
    background-color: var(--dark-gray-color);
  }

  /* ---- upload button ---- */
  .upload-btn.selected :global(button) {
    background-color: var(--orange-color);
    color: var(--background);
  }

  /* ---- main menu ---- */
  .menu ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .menu ul li {
    width: 85%;
    font-size: 1.15rem;
    color: var(--dark-gray-color);
    padding: 0.75em 1em;
    margin: 0.5em 0;
    display: flex;
    align-items: center;
    gap: 1em;
    cursor: pointer;
    transition: all 0.3s;
  }

  .menu ul li:hover {
    background-color: var(--hover-gray-color);
  }

  .menu ul li.selected {
    background-color: var(--orange-color);
    color: var(--background);
  }
</style>
