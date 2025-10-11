<section class="dashboard">
  <Sidebar />
  <main class="container">
    <UploadCheatsheet />
  </main>
</section>

<script lang="ts">
  /* components */
  import UploadCheatsheet from './UploadCheatsheet.svelte';
  import Sidebar from '../components/Sidebar.svelte';
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
    padding: 2em 2.5em;
  }
</style>
