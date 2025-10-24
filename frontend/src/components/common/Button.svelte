<button class="{variant} {icon && 'flex'} {width} {size}" {type} {disabled} on:click>
  <slot />
</button>

<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let variant: 'fill' | 'outline' | 'default' | 'transparent' = 'fill';
  export let width: 'full' | 'fit' = 'fit';
  export let size: 'tiny' | 'small' | 'default' | 'big' = 'default';
  export let icon: boolean = false;
  export let disabled: boolean = false;
</script>

<style>
  button {
    border: none;
    border-radius: 100vmax;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }

  /* ----- size classes ----- */

  button.tiny {
    padding: 0.65em;
    font-size: 0.95rem;
  }

  button.small {
    padding: 0.75em 1.05em;
    font-size: 1rem;
  }

  button.default {
    padding: 0.75em 1.15em;
    font-size: 1.15rem;
  }

  button.big {
    padding: 0.75em 2.5em;
    font-size: 1.15rem;
  }

  /* ----- width classes ----- */

  button.fit {
    width: fit-content;
  }

  button.full {
    width: 100%;
  }

  /* ----- icon classes ----- */

  button.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
  }

  button.small.flex {
    gap: 0.5em;
  }

  button.tiny.flex {
    gap: 0.15em;
  }

  /* ----- variant classes ----- */

  button.default {
    background-color: var(--light-gray-color);
    color: var(--dark-gray-color);
    border: 1px solid var(--gray-color);
  }

  button.default:hover:not(:disabled) {
    background-color: var(--gray-color);
    transform: translateY(-1px);
  }

  button.fill {
    background: var(--blue-color);
    color: var(--background);
  }

  button.fill:hover:not(:disabled) {
    background: var(--hover-blue-color);
    transform: translateY(-1px);
  }

  button.outline {
    background-color: var(--background);
    border: 2px solid var(--orange-color);
    color: var(--orange-color);
  }

  button.outline:hover:not(:disabled) {
    background-color: var(--orange-color);
    color: var(--background);
    transform: translateY(-1px);
  }

  button.transparent {
    background-color: transparent;
    color: var(--dark-gray-color);
  }

  button.transparent:hover {
    color: var(--blue-color);
  }

  /* ----- extra classes ----- */

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
