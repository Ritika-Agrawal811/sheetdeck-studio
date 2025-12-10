<div class="scroll-buttons">
  {#if isScrollingUpDown}
    <button class="scroll-btn" on:click={scrollUp}><ArrowUp size={20} /></button>
    <button class="scroll-btn" on:click={scrollDown}><ArrowDown size={20} /></button>
  {:else}
    <button class="scroll-btn" on:click={scrollLeft}><ArrowLeft size={20} /></button>
    <button class="scroll-btn" on:click={scrollRight}><ArrowRight size={20} /></button>
  {/if}
</div>

<script lang="ts">
  import { ArrowLeft, ArrowRight, ArrowDown, ArrowUp } from 'lucide-svelte';

  export let isScrollingUpDown: boolean = false;
  export let valueToScroll: number = 300;

  export let scrollContainer: HTMLElement | null = null;

  /**
   * helper function to handle scroll left
   */
  const scrollLeft = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -valueToScroll, behavior: 'smooth' });
    }
  };

  /**
   * helper function to handle scroll right
   */
  const scrollRight = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: valueToScroll, behavior: 'smooth' });
    }
  };

  /**
   * helper function to handle scroll up
   */
  const scrollUp = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ top: -valueToScroll, behavior: 'smooth' });
    }
  };

  /**
   * helper function to handle scroll down
   */
  const scrollDown = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ top: valueToScroll, behavior: 'smooth' });
    }
  };
</script>

<style>
  .scroll-buttons {
    display: flex;
    gap: 0.5em;
    justify-content: center;
  }

  .scroll-btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid var(--gray-color);
    background-color: var(--background);
    color: var(--blue-color);
    cursor: pointer;
  }

  .scroll-btn:hover {
    background-color: var(--light-gray-color);
  }
</style>
