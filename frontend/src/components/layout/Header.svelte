<header>
  <nav>
    <figure>
      <img src={logo} alt="SheetDeck Studio logo" />
    </figure>

    {#if $isAuthenticated}
      <div class="nav-end">
        <Searchbar />
        <DarkModeToggle />
        <Button type="button" variant="fill" size="small" icon={true} on:click={logout}>
          <LogOut size={20} />
          Logout
        </Button>
      </div>
    {/if}
  </nav>
</header>

<script>
  import logo from '../../assets/images/logo.png';

  import { isAuthenticated, logout } from '../../stores/auth';
  import { LogOut } from 'lucide-svelte';
  import Button from '../common/Button.svelte';
  import DarkModeToggle from './DarkModeToggle.svelte';
  import Searchbar from './Searchbar.svelte';
</script>

<style>
  nav {
    padding: 1.5em;
    display: flex;
    justify-content: space-between;
  }

  figure {
    height: 2.5em;
  }

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }

  .nav-end {
    display: flex;
    gap: 1em;
    align-items: center;
  }
</style>
