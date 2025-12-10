<QueryClientProvider client={queryClient}>
  <main>
    <Header />
    {#if $isAuthenticated}
      <Dashboard />
    {:else}
      <Login />
    {/if}
  </main>
</QueryClientProvider>

<script>
  // components
  import Header from './components/layout/Header.svelte';
  import Login from './pages/Login.svelte';
  import Dashboard from './pages/Dashboard.svelte';

  import { onMount } from 'svelte';
  import { isAuthenticated } from './stores/auth';
  import { configStore } from './stores/config';

  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 3,
      },
    },
  });

  onMount(async () => {
    if ($isAuthenticated) {
      await configStore.load();
    }
  });

  // Reload config when user logs in
  $: if ($isAuthenticated) {
    configStore.load();
  }
</script>
