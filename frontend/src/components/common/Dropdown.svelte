<div class="select-container">
  <label for={id}>{label}</label>

  <div class="custom-select">
    <button
      type="button"
      class="select-display {isOpen && 'open'}"
      id={`${name}-dropdown-button`}
      on:click={toggleDropdown}
    >
      <span class="selected-label">{removeSnakeCase(value)}</span>
      <span class="arrow" class:rotated={isOpen}></span>
    </button>

    {#if isOpen}
      <ul class="options-list">
        {#each list as item}
          <li
            class={`options-item ${item === value && 'selected'}`}
            on:click|stopPropagation={() => selectItem(item)}
            on:keydown={(e) => e.key === 'Enter' && selectItem(item)}
            tabindex="0"
            role="option"
            aria-selected={item === value}
          >
            {removeSnakeCase(item)}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { removeSnakeCase } from '../../utils/caseConverter';

  export let list: string[] = [];
  export let id: string = '';
  export let name: string = '';
  export let label: string = '';
  export let value: string = '';

  let isOpen = false;

  $: if (!value && list.length > 0) {
    value = list[0];
  }

  onMount(() => {
    if (!value && list.length > 0) {
      selectItem(list[0]);
    }
  });

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  const selectItem = (item: string) => {
    value = item;
    isOpen = false;
  };
</script>

<style>
  .select-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  label {
    font-size: 1.15rem;
  }

  .custom-select {
    position: relative;
  }

  .select-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1.05rem;
    font-size: 1.15rem;
    border: 2px solid var(--blue-color);
    border-radius: 10px;
    background-color: transparent;
    transition: border-color 0.2s;
    cursor: pointer;
  }

  .select-display.open {
    border-color: var(--orange-color);
    outline: none;
  }

  .arrow {
    width: 0;
    height: 0;
    margin-left: 1em;
    border-left: 0.5em solid transparent;
    border-right: 0.5em solid transparent;
    border-top: 0.5em solid var(--dark-gray-color);
    transition: transform 0.2s;
  }

  .arrow.rotated {
    transform: rotate(180deg);
  }

  .options-list {
    position: absolute;
    list-style: none;
    top: 105%;
    left: 0;
    right: 0;
    z-index: 10;
    overflow-y: auto;
    width: 100%;
    max-height: 200px;
    background-color: white;
    border-radius: 0.5em;
    border: 2px solid var(--gray-color);
    box-shadow: 0 0.5em 1em var(--gray-color);
  }

  .options-item {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    color: var(--dark-gray-color);
    transition: background-color 0.1s;
    cursor: pointer;
  }

  .options-item:hover,
  .options-item:focus {
    background-color: var(--gray-color);
    color: var(--dark-blue);
    outline: none;
  }

  .options-item.selected {
    background-color: var(--blue-color);
    color: white;
    font-weight: 500;
  }
</style>
