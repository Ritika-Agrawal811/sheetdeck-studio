<section class="dashboard" class:minimize={isMinimized}>
  <Sidebar bind:isMinimized />
  <main class="container">
    <svelte:component this={pages[$activePath]} />
  </main>
</section>

<script lang="ts">
  /* components */
  import Home from './Home.svelte';
  import Cheatsheet from './Cheatsheet.svelte';
  import Analytics from './Analytics.svelte';
  import UploadCheatsheet from './UploadCheatsheet.svelte';
  import Sidebar from '../components/layout/Sidebar.svelte';

  /* Types */
  import type { ComponentType } from 'svelte';
  import type { Paths } from '../stores/navigate';

  import { activePath } from '../stores/navigate';

  type Page = {
    [key in Paths]: ComponentType;
  };

  const pages: Page = {
    home: Home,
    cheatsheet: Cheatsheet,
    analytics: Analytics,
    upload: UploadCheatsheet,
  };

  let isMinimized = false;
</script>

<style>
  .dashboard {
    height: calc(100vh - 5.625em);
    display: grid;
    grid-template-columns: 250px 1fr;
    transition: all 0.5s;
  }

  .dashboard.minimize {
    grid-template-columns: 100px 1fr;
  }

  /* ---- container ---- */
  .container {
    padding: 1.5em;
  }
</style>
