<section class="referrers-routes-chart-container">
  <nav>
    <!-- Tabs List -->
    <ul role="tablist" class="tabs">
      {#each tabs as tab}
        <li
          role="tab"
          tabindex={activeTab === tab.name ? 0 : -1}
          class="tab {activeTab === tab.name ? 'active' : null}"
          on:click={() => setActiveTab(tab.name)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActiveTab(tab.name);
            }
          }}
        >
          {tab.label}
        </li>
      {/each}
    </ul>
  </nav>
  <!-- List -->
  <div class="main">
    {#key activeTab}
      {#if (activeTab === 'os' && $operatingSystemsStats.isLoading) || (activeTab === 'referrer' && $referrerStats.isLoading)}
        <div class="skeleton-card">
          <div class="skeleton-title shimmer"></div>
          {#each Array(5) as _}
            <div class="skeleton-value shimmer"></div>
          {/each}
        </div>
      {:else}
        {@const stats =
          activeTab === 'os' ? $operatingSystemsStats.data?.operatingSystems : $referrerStats.data?.referrers}
        {#if stats}
          <h4>page views</h4>
          <ul class="list">
            {#each stats as item}
              <li class="list-item">
                {#if activeTab === 'os'}
                  {item.name}
                {:else}
                  {@const domain = extractDomain(item.name)}
                  <p>
                    <img src={getFaviconUrl(domain)} alt={domain} width="15" height="15" />
                    {domain}
                  </p>
                {/if}
                <span>{item.views}</span>
              </li>
            {/each}
          </ul>
        {/if}
      {/if}
    {/key}
  </div>

  <!-- Modal Button -->
  <div class="view-all-btn-container">
    <button class="view-all-btn" on:click={openModal}>View All <Maximize2 size={15} /></button>
  </div>

  <!-- Modal -->
  <Modal bind:isOpen={isModalOpen} heading={activeTab === 'os' ? 'Operating Systems' : 'Referrers'}>
    {#key activeTab}
      {#if (activeTab === 'os' && $operatingSystemsStats.isLoading) || (activeTab === 'referrer' && $referrerStats.isLoading)}
        <div class="skeleton-card">
          <div class="skeleton-title shimmer"></div>
          {#each Array(5) as _}
            <div class="skeleton-value shimmer"></div>
          {/each}
        </div>
      {:else}
        {@const stats =
          activeTab === 'os' ? $operatingSystemsStats.data?.operatingSystems : $referrerStats.data?.referrers}
        {#if stats}
          <h4>page views</h4>
          <ul class="list">
            {#each stats as item}
              <li class="list-item">
                {#if activeTab === 'os'}
                  {item.name}
                {:else}
                  {@const domain = extractDomain(item.name)}
                  <p>
                    <img src={getFaviconUrl(domain)} alt={domain} width="15" height="15" />
                    {domain}
                  </p>
                {/if}
                <span>{item.views}</span>
              </li>
            {/each}
          </ul>
        {/if}
      {/if}
    {/key}
  </Modal>
</section>

<script lang="ts">
  import { Maximize2 } from 'lucide-svelte';
  import Modal from '../../common/Modal.svelte';

  import { getReferrersAnalytics, getOperatingSystemsAnalytics } from '../../../queries/analytics';
  import type { Period } from '../../../types/analytics';

  const tabs = [
    { name: 'referrer', label: 'Referrers' },
    { name: 'os', label: 'Operating Systems' },
  ];

  export let selectedPeriod: Period = '7d';
  export let isModalOpen: boolean = false;
  let activeTab: string = 'referrer';

  $: referrerStats = getReferrersAnalytics(selectedPeriod);
  $: operatingSystemsStats = getOperatingSystemsAnalytics(selectedPeriod);

  const setActiveTab = (tab: string) => {
    activeTab = tab;
  };

  const openModal = () => {
    isModalOpen = true;
  };

  const extractDomain = (url: string): string => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return url;
    }
  };

  const getFaviconUrl = (domain: string): string => {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  };
</script>

<style>
  .referrers-routes-chart-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    padding: 1em;
    overflow: hidden;
    height: 100%;
  }

  .tabs {
    display: flex;
    gap: 1em;
    list-style: none;
  }

  .tab {
    cursor: pointer;
    border: 1px solid var(--gray-color);
    border-radius: 100vmax;
    padding: 0.5em 1em;
    font-size: 0.95em;
  }

  .tab:hover {
    background-color: var(--light-gray-color);
  }

  .tab.active {
    background-color: var(--orange-color);
    color: white;
    border-color: var(--orange-color);
  }

  .main {
    height: 175px;
    overflow-y: hidden;
  }

  @media (min-width: 1440px) {
    .main {
      height: 230px;
    }
  }

  h4 {
    text-align: right;
    text-transform: uppercase;
    color: var(--dark-gray-color);
    font-size: 0.85rem;
    margin-bottom: 1em;
  }

  .list {
    list-style: none;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    background: var(--light-gray-color);
    padding: 0.5em 1em;
    margin-bottom: 0.75em;
    border-left: 1px solid var(--dark-gray-color);
    border-bottom: 1px solid var(--gray-color);
    border-radius: 5px;
  }

  p {
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  /* ---- view all button ---- */

  .view-all-btn-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.75em 0;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, transparent, var(--background), var(--light-gray-color));
    backdrop-filter: blur(20px);
  }

  .view-all-btn {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em 1em;
    font-size: 0.9rem;
    background-color: var(--background);
    border: 1px solid var(--gray-color);
    border-radius: 100vmax;
    cursor: pointer;
  }

  .view-all-btn:hover {
    background-color: var(--light-gray-color);
  }

  /* --- skeleton container ---- */
  .skeleton-card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .skeleton-title {
    width: 40%;
    height: 25px;
    margin-bottom: 1em;
  }

  .skeleton-value {
    width: 100%;
    height: 35px;
    margin-bottom: 1em;
  }
</style>
