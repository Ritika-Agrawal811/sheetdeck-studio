<main>
  <Header />
  {#if $isAuthenticated}
    <Dashboard />
  {:else}
    <Login />
  {/if}
</main>

<script>
  import { onMount } from 'svelte';
  import { isAuthenticated } from './stores/auth';
  import { configStore } from './stores/config';

  onMount(async () => {
    if ($isAuthenticated) {
      await configStore.load();
    }
  });

  // Reload config when user logs in
  $: if ($isAuthenticated) {
    configStore.load();
  }

  // components
  import Header from './components/Header.svelte';
  import Login from './pages/Login.svelte';
  import Dashboard from './pages/Dashboard.svelte';
</script>
