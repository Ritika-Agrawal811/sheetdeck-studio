<div class="input-container">
  <label for={id}>{label}</label>
  <input {type} {placeholder} {value} on:input={handleInput} {id} />
</div>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let type: string = 'text';
  export let label: string = 'Name';
  export let id: string = 'username';
  export let placeholder: string = '';
  export let value: string = '';

  const dispatch = createEventDispatcher();

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    value = target.value;
    dispatch('change', value);
  };
</script>

<style>
  label {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.75rem 0.5rem;
    font-size: 1.15rem;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--blue-color);
    background: transparent;
  }

  input::placeholder {
    color: #64748b;
  }

  /* Focus styles */
  input:focus {
    border-bottom-color: var(--orange-color);
  }

  /* Disabled state */
  input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
