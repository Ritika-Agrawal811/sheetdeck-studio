<section class="upload-cheatsheet-section">
  <h2>Upload Cheatsheets</h2>
  {#if $configStore.loading}
    <Loader />
  {:else if $configStore.data}
    {#if !loading}
      <!-- Success/Error state  -->
      {#if !errorMsg}
        <section class="success-error-upload-result">
          <CircleCheckBig size={50} />
          <p>Cheat sheet was successfully uploaded!</p>
        </section>
      {/if}

      <!-- Upload Form -->
      <form on:submit|preventDefault={handleSubmit}>
        <section class="upload-cheatsheet-form">
          <Input label="Title" id="sheet-title" bind:value={title} />
          <Input label="Slug" id="sheet-slug" bind:value={slug} />

          <!-- Category and Subcategory dropdowns -->
          <div class="category-container">
            <Dropdown
              list={$categories}
              name="categories"
              label="Category"
              id="category-select"
              bind:value={category}
            />
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
            <Button type="reset" variant="default" size="big">Reset</Button>
          </div>
        </section>

        <!-- Upload image section -->
        <section class="upload-image">
          <label for="cheatsheet-image">Image</label>
          <div
            class="image-preview"
            role="button"
            tabindex="0"
            aria-label="Upload image"
            on:click={handleBrowseClick}
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleBrowseClick()}
          >
            {#if previewUrl}
              <img src={previewUrl} alt="Preview" class="preview-image" />
            {:else}
              <CloudUpload size={50} />
              <div>
                <h3>Choose a file or drag &amp; drop it here</h3>
                <p>only WebP format is allowed, upto 1MB</p>
              </div>
              <Button type="button" on:click={handleBrowseClick}>Browse File</Button>
            {/if}

            <input
              type="file"
              id="cheatsheet-image"
              accept=".webp"
              bind:this={fileInput}
              on:change={handleFileChange}
            />
          </div>
          {#if selectedFile}
            <!-- Uploaded Images Card -->
            <article class="file-info">
              <span
                class="close-icon"
                role="button"
                tabindex="0"
                aria-label="Remove selected image"
                on:click={handleRemoveSelectedFile}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleRemoveSelectedFile()}
              >
                <CircleX size={20} />
              </span>

              <FileImage size={30} />
              <div>
                <p class="selected-file">{selectedFile.name}</p>
                <p class="file-size">
                  <span>{(selectedFile.size / 1024).toFixed(2)} KB</span>
                  <span class="icon"><CircleCheckBig size={15} /> Completed</span>
                </p>
              </div>
            </article>
          {/if}
        </section>
      </form>
    {:else}
      <Loader label="Uploading Cheat Sheet" />
    {/if}
  {/if}
</section>

<script lang="ts">
  import Button from '../components/Button.svelte';
  import Input from '../components/Input.svelte';
  import Dropdown from '../components/Dropdown.svelte';
  import Loader from '../components/Loader.svelte';
  import { CloudUpload, FileImage, CircleCheckBig, CircleX } from 'lucide-svelte';

  import { configStore, categories, subcategories } from '../stores/config';
  import { UploadCheatsheet } from '../../wailsjs/go/main/App';
  import type { CheatsheetMetadata } from '../types/cheatsheet';

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

  /* ---- cheatsheet image ---- */
  let fileInput: HTMLInputElement;
  let selectedFile: File | null = null;
  let previewUrl: string | null = null;

  /* ---- Loading states ---- */
  let loading = false;
  let errorMsg: string | null = null;

  /* ---- Set cheat sheet metadata and slug ---- */
  $: metadata = { title, slug, category, subcategory };
  $: metadataString = JSON.stringify(metadata, null, 2).trim();

  $: if (category) {
    slug = `${category}-`;
  }

  /**
   * Trigger file input to open upload dialog
   * @param e
   */
  const handleBrowseClick = (e?: Event) => {
    e?.stopPropagation();
    fileInput?.click();
    console.log('clicked');
  };

  /**
   * Remove the selected file and reset preview url
   */
  const handleRemoveSelectedFile = () => {
    selectedFile = null;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      previewUrl = null;
    }

    if (fileInput) {
      fileInput.value = '';
    }
  };

  /**
   * Handle the selected file, check against contrainst and set the preview URL
   * @param event
   */
  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    processFile(file);
  };

  const processFile = (file: File | undefined) => {
    if (!file) return;

    if (file.type !== 'image/webp') {
      return;
    }

    const maxSize = 1024 * 1024; // 1MB
    if (file.size > maxSize) {
      return;
    }

    selectedFile = file;

    /* ---- create preview URL ---- */
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    previewUrl = URL.createObjectURL(file);
  };

  /**
   * Handle form submit
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
    }
  };
</script>

<style>
  .upload-cheatsheet-section {
    position: relative;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6em;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1em;
  }

  /* ---- upload cheatsheet form ---- */

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

  /* ---- upload image section ---- */

  .upload-image {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .upload-image label {
    font-size: 1.15rem;
  }

  .image-preview {
    width: 95%;
    max-width: 600px;
    height: min(50vh, 800px);
    padding: 0.5em;
    margin-inline: auto;
    border-radius: 10px;
    border: 2px dashed var(--dark-gray-color);
    background-color: var(--light-gray-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    cursor: pointer;
    overflow: hidden;
  }

  .preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }

  .image-preview :is(h3, p) {
    text-align: center;
  }

  #cheatsheet-image {
    display: none;
  }

  /* ---- selected image card ---- */

  .file-info {
    position: relative;
    width: 95%;
    padding: 1rem;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 1em;
    border-radius: 10px;
    border: 2px solid var(--blue-color);
    box-shadow: 0 0 0.15em 0.15em var(--light-gray-color);
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
  }

  .selected-file {
    font-weight: 500;
    font-size: 1rem;
  }

  .file-size {
    color: var(--dark-gray-color);
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.75em;
  }

  .file-size .icon {
    color: var(--green-color);
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
  }
</style>
