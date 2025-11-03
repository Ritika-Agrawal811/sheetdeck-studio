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

    <input type="file" id="cheatsheet-image" accept=".webp" bind:this={fileInput} on:change={handleFileChange} />
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

<script lang="ts">
  import Button from '../../common/Button.svelte';
  import { CloudUpload, FileImage, CircleCheckBig, CircleX } from 'lucide-svelte';

  export let selectedFile: File | null = null;

  /* ---- cheatsheet image ---- */
  let fileInput: HTMLInputElement;
  let previewUrl: string | null = null;

  $: if (!selectedFile) {
    handleRemoveSelectedFile();
  }

  /**
   * Trigger file input to open upload dialog
   * @param e
   */
  const handleBrowseClick = (e?: Event) => {
    e?.stopPropagation();
    fileInput?.click();
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

  /**
   * Process the selected file, check it against contrainsts like size and type and set the preview URL
   * @param File the selected image file
   */
  const processFile = (file: File | undefined) => {
    if (!file) return;

    if (file.type !== 'image/webp' && file.type !== 'image/gif') {
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
</script>

<style>
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
    width: 90%;
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
