<section class="dashboard">
  <Sidebar />
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
</script>

<style>
  .dashboard {
    height: calc(100vh - 5.625em);
    padding-top: 1em;
    display: flex;
  }

  /* ---- container ---- */
  .container {
    flex-grow: 1;
    padding: 1.5em 2em;
  }
</style>
