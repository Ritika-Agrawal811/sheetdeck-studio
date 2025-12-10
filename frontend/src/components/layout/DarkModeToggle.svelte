<button class="toggle" on:click={toggleTheme}>
  <span class="sr-only">Dark Mode Toggle</span>
  <span class="icon moon-icon {isDarkMode && 'active'}">
    <Moon />
  </span>
  <span class="icon sun-icon {!isDarkMode && 'active'}">
    <Sun />
  </span>
  <span class="indicator"></span>
</button>

<script lang="ts">
  import { Moon, Sun } from 'lucide-svelte';

  let isDarkMode: boolean = false;

  /**
   * Toggle dark mode
   */
  const toggleTheme = () => {
    isDarkMode = !isDarkMode;
  };
</script>

<style>
  .toggle {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.75em;
    padding: 0.25em 1em;
    border-radius: 100vmax;
    background-color: var(--dark-gray-color);
    border: 1px solid var(--gray-color);
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .icon {
    color: var(--background);
    font-size: 2.15rem;
    position: relative;
    z-index: 5;
    transition: color 0.3s;
  }

  .indicator {
    position: absolute;
    width: 2.15rem;
    height: 2.15rem;
    border-radius: 50%;
    background-color: var(--background);
    left: calc(100% - 2.5rem);
    z-index: 1;
    transition: left 0.3s;
  }

  /* ---- active classes ---- */

  .active.icon {
    color: var(--text-color);
  }

  /* Move indicator based on dark mode state */

  .toggle:has(.moon-icon.active) .indicator {
    left: 0.45rem;
  }

  .toggle:has(.sun-icon.active) .indicator {
    left: calc(100% - 2.5rem);
  }

  .toggle:has(.sun-icon.active) {
    background-color: var(--orange-color);
    border: 1px solid var(--orange-color);
  }
</style>
