<header>
  <nav>
    <figure>
      <img src={logo} alt="SheetDeck Studio logo" />
    </figure>

    {#if $isAuthenticated}
      <Button type="button" variant="fill" size="small" icon={true} on:click={logout}
        ><LogOut size={20} /> Logout
      </Button>
    {/if}
  </nav>
</header>

<script>
  import logo from '../assets/images/logo.png';

  import { isAuthenticated, logout } from '../stores/auth';
  import { LogOut } from 'lucide-svelte';
  import Button from './Button.svelte';
</script>

<style>
  nav {
    padding: 1.5em 2em;
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
</style>
