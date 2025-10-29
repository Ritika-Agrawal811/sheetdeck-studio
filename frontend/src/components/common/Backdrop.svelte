{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="document" on:click={onClick}></div>
{/if}

<script lang="ts">
  export let onClick: () => void;
  export let show: boolean = false;
</script>

<style>
  .document {
    position: fixed;
    inset: 0;
  }
</style>
