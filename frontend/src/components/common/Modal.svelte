{#if isOpen}
  <section class="modal-container">
    <Backdrop show={isOpen} onClick={closeModal} />
    <div class="modal-content">
      <h3 class="sub-heading">{heading}</h3>
      <button class="close-btn" on:click={closeModal}><CircleX size={20} /></button>
      <hr />
      <slot />
    </div>
  </section>
{/if}

<script lang="ts">
  import Backdrop from '../common/Backdrop.svelte';
  import { CircleX } from 'lucide-svelte';

  export let isOpen: boolean = false;
  export let heading: string = '';

  const closeModal = () => {
    isOpen = false;
  };
</script>

<style>
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.15);
  }

  .modal-content {
    position: relative;
    background-color: var(--background);
    padding: 1.5em;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
    z-index: 50;
    width: min(90%, 500px);
    height: min(80dvh, 600px);
    overflow-y: auto;
  }

  .close-btn {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--gray-color);
    border: none;
    margin-bottom: 2em;
  }
</style>
