<section class="upload-cheatsheet-section">
  <h2>Upload Cheatsheets</h2>
  {#if $configStore.loading}
    <Loader />
  {:else if $configStore.data}
    <UploadCheatsheetForm />
  {/if}
</section>

<script lang="ts">
  import { configStore } from '../stores/config';

  import Loader from '../components/common/Loader.svelte';
  import UploadCheatsheetForm from '../components/features/upload-cheatsheet/UploadCheatsheetForm.svelte';
</script>

<style>
  .upload-cheatsheet-section {
    position: relative;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1em;
  }
</style>
