<section class="dashboard">
  <aside>
    <Button size="small" variant="outline" icon={true}
      ><ImageUp size={20} /> Upload New Sheet</Button
    >
    <ul></ul>
  </aside>
  <main class="container">
    <UploadCheatsheet />
  </main>
</section>

<script lang="ts">
  import { ImageUp } from 'lucide-svelte';
  import Button from '../components/Button.svelte';

  /* Pages */
  import UploadCheatsheet from './UploadCheatsheet.svelte';
</script>

<style>
  .dashboard {
    height: calc(100vh - 5.625em);
    padding-top: 1em;
    display: flex;
  }

  /* ----- aside ----- */
  aside {
    height: 100%;
    background-color: var(--gray-color);
    border-radius: 0 3em 0 0;
    padding: 1.5em 2.5em;
  }

  /* ---- container ---- */
  .container {
    flex-grow: 1;
    padding: 2em 2.5em;
  }
</style>
