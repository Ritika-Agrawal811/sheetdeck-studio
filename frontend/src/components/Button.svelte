<button class="{variant} {icon && 'flex'}" {type} {disabled} on:click>
  <slot />
</button>

<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let variant: 'fill' | 'outline' = 'fill';
  export let icon: boolean = false;
  export let disabled: boolean = false;
</script>

<style>
  button {
    width: 100%;
    padding: 0.85rem 3rem;
    border: none;
    border-radius: 100vmax;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  button.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
  }

  button.fill {
    background: #3b82f6;
    color: white;
  }

  button.fill:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
  }

  button.outline {
    background-color: transparent;
    border: 2px solid rgb(242, 169, 35);
    color: rgb(242, 169, 35);
  }

  button.outline:hover:not(:disabled) {
    background-color: rgb(242, 169, 35);
    color: #fff;
    transform: translateY(-1px);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
