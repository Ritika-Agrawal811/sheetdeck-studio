{#if !loading}
  {#if showNotification}
    {#if !errorMsg}
      <section class="success-state">
        <span class="icon">
          <PartyPopper size={80} />
        </span>
        <p class="label">Your cheat sheet is successfully uploaded!</p>
      </section>
    {:else}
      <section class="error-state">
        <span class="icon">
          <FileX2 size={75} />
        </span>
        <p class="label">Failed to upload your cheat sheet. Try again.</p>
      </section>
    {/if}
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <section class="upload-cheatsheet-form">
      <Input label="Title" id="sheet-title" bind:value={title} />
      <Input label="Slug" id="sheet-slug" bind:value={slug} />

      <!-- Category and Subcategory dropdowns -->
      <div class="category-container">
        <Dropdown list={$categories} name="categories" label="Category" id="category-select" bind:value={category} />
        <Dropdown
          list={$subcategories}
          name="subcategories"
          label="Sub Category"
          id="subcategory-select"
          bind:value={subcategory}
        />
      </div>

      <!-- Metadata JSON Preview -->
      <div>
        <h3>Metadata JSON Preview</h3>
        <pre>{@html hljs.highlight(metadataString, { language: 'json' }).value}</pre>
      </div>

      <!-- Upload and Reset buttons -->
      <div class="btn-group">
        <Button type="submit" size="big">Upload</Button>
        <Button type="button" variant="default" size="big" on:click={handleReset}>Reset</Button>
      </div>
    </section>

    <!-- Upload image section -->
    <UploadImageSection bind:selectedFile />
  </form>
{:else}
  <Loader label="Uploading Cheat Sheet" />
{/if}

<script lang="ts">
  import Button from '../../common/Button.svelte';
  import Input from '../../common/Input.svelte';
  import Dropdown from '../../common/Dropdown.svelte';
  import Loader from '../../common/Loader.svelte';
  import UploadImageSection from './UploadImageSection.svelte';

  import { PartyPopper, FileX2 } from 'lucide-svelte';
  import { categories, subcategories } from '../../../stores/config';
  import type { CheatsheetMetadata } from '../../../types/cheatsheet';
  import { UploadCheatsheet } from '../../../../wailsjs/go/main/App';

  import hljs from 'highlight.js/lib/core';
  import json from 'highlight.js/lib/languages/json';
  import 'highlight.js/styles/github.css';

  hljs.registerLanguage('json', json);

  /* --- new cheatsheet data --- */
  let title: string = '';
  let slug: string = '';
  let category: string = '';
  let subcategory: string = '';
  let metadata: CheatsheetMetadata | null = null;
  let selectedFile: File | null = null;

  /* ---- Loading states ---- */
  let loading = false;
  let errorMsg: string | null = null;
  let showNotification = false;

  /* ---- Set cheat sheet metadata and slug ---- */
  $: metadata = { title, slug, category, subcategory };
  $: metadataString = JSON.stringify(metadata, null, 2).trim();

  $: if (category) {
    slug = `${category}-`;
  }

  /**
   * Handle form submit to upload the cheat sheet to the database
   */
  const handleSubmit = async () => {
    if (title == '' || slug == '' || category == '' || subcategory == '' || selectedFile == null) {
      return;
    }

    loading = true;

    const arrayBuffer = await selectedFile.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const imageBytes = Array.from(uint8Array);

    try {
      await UploadCheatsheet(slug, title, category, subcategory, imageBytes);
    } catch (error) {
      const err = error instanceof Error ? error.message : 'Failed to upload cheatsheet';
      errorMsg = err;
    } finally {
      loading = false;
      showNotification = true;

      // Hide notification after 3 seconds
      setTimeout(() => {
        showNotification = false;
        errorMsg = '';
      }, 1000);

      handleReset();
    }
  };

  /**
   * Handle form reset
   */
  const handleReset = () => {
    title = '';
    category = '';
    subcategory = '';
    selectedFile = null;
  };
</script>

<style>
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6em;
  }

  .upload-cheatsheet-form {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1em;
  }

  .category-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }

  pre {
    padding: 1em 1.5em;
    border-radius: 10px;
    border: 2px dashed var(--dark-gray-color);
    background-color: var(--light-gray-color);
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-x: auto;
  }

  .btn-group {
    display: flex;
    gap: 1.5em;
  }

  /* ---- error ans success states ---- */
  .error-state,
  .success-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    position: absolute;
    width: 100%;
    height: calc(100% - 3rem);
    padding: 10em 0;
    background-color: var(--background);
    z-index: 5;
  }

  .success-state .icon {
    color: var(--green-color);
  }

  .error-state .icon {
    color: var(--red-color);
  }

  .error-state .label,
  .success-state .label {
    font-size: 1.05rem;
    font-weight: 700;
  }
</style>
