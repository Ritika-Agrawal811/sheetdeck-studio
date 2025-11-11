<section class="countries-chart-container">
  <h3>Countries</h3>

  <div class="chart">
    <h4>page views</h4>
    <ul class="chart-list">
      {#if $countriesStats.isLoading}
        <div class="skeleton-card">
          <div class="skeleton-title shimmer"></div>
          {#each Array(3) as _}
            <div class="skeleton-value shimmer"></div>
          {/each}
        </div>
      {:else if $countriesStats.data}
        {@const topCountries = $countriesStats.data?.countries?.slice(0, 3) ?? []}
        {#each topCountries as item, index}
          {@const flagUrl = getCountryFlagUrl(item.name)}
          <li class="chart-bar">
            <p>
              {#if flagUrl}
                <img src={flagUrl} alt={`${item.name} flag`} width="18" height="13" />
              {:else}
                <Earth size={10} />
              {/if}
              {item.name}
            </p>
            <div class="content">
              <div class="bar" style="width: {100 - index * 15}%"></div>
              <span>{item.views}</span>
            </div>
          </li>
        {/each}
      {/if}
    </ul>
  </div>

  <!-- Modal Button -->
  <div class="view-all-btn-container">
    <button class="view-all-btn" on:click={openModal}>View All <Maximize2 size={15} /></button>
  </div>

  <!-- Modal -->
  <Modal bind:isOpen={isModalOpen} heading="Countries">
    {#if $countriesStats.isLoading}
      <div class="skeleton-card">
        <div class="skeleton-title shimmer"></div>
        {#each Array(5) as _}
          <div class="skeleton-value shimmer"></div>
        {/each}
      </div>
    {:else if $countriesStats.data}
      <h4>page views</h4>
      <ul class="list">
        {#each $countriesStats.data?.countries as item}
          {@const flagUrl = getCountryFlagUrl(item.name)}
          <li class="list-item">
            <p>
              {#if flagUrl}
                <img src={flagUrl} alt={`${item.name} flag`} width="18" height="13" />
              {:else}
                <Earth size={10} />
              {/if}
              {item.name}
            </p>
            <span>{item.views}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </Modal>
</section>

<script lang="ts">
  import { Maximize2, Earth } from 'lucide-svelte';
  import Modal from '../../common/Modal.svelte';

  import { getCountriesAnalytics } from '../../../queries/analytics';
  import { getCountryFlagUrl } from '../../../utils/getCountryFlagUrl';
  import type { Period } from '../../../types/analytics';

  export let selectedPeriod: Period = '7d';
  export let isModalOpen: boolean = false;

  $: countriesStats = getCountriesAnalytics(selectedPeriod);

  const openModal = () => {
    isModalOpen = true;
  };
</script>

<style>
  .countries-chart-container {
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

  h3 {
    font-size: 1.15rem;
  }

  h4 {
    text-align: right;
    text-transform: uppercase;
    color: var(--dark-gray-color);
    font-size: 0.85rem;
    margin-bottom: 0.75em;
  }

  .chart-list,
  .list {
    list-style: none;
  }

  .chart-bar .content {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 0.35em 0 0.75em;
  }

  .chart-bar .bar {
    height: 20px;
    border-radius: 5px;
    background: var(--blue-color);
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
    display: flex;
    align-items: center;
    gap: 0.65em;
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
