<form role="search" class="search-box">
  <label for="cheatsheets-search" class="sr-only"> Search for cheat sheets </label>
  <button type="submit" class="icon">
    <span class="sr-only">Search</span>
    <Search size={20} />
  </button>
  <input type="search" placeholder="Search a cheat sheet" class="search-input" />
</form>

<script lang="ts">
  import { Search } from 'lucide-svelte';
</script>

<style>
  .search-box {
    width: 300px;
    height: 47px;
    border: 1px solid var(--gray-color);
    background-color: var(--light-gray-color);
    border-radius: 100vmax;
    display: flex;
  }

  .search-input {
    flex-grow: 2;
    width: 100%;
    border-radius: 100vmax;
    border: none;
    outline: none;
    padding-inline: 0.5em;
    font-size: 1rem;
    background-color: var(--light-gray-color);
  }

  .search-input::placeholder {
    color: var(--text-color);
  }

  .icon {
    flex-grow: 1;
    background-color: var(--light-gray-color);
    border: none;
    outline: none;
    border-radius: 100vmax 0 0 100vmax;
    padding-left: 1em;
  }
</style>
