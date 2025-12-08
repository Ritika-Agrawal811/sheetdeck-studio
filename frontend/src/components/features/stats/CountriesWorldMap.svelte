<div class="countries-world-map">
  <h3 class="sub-heading">Audience Demographic</h3>
  {#if $countriesStats.isLoading}
    <div class="skeleton-card" style="height: 30dvh;">
      <div class="skeleton-title shimmer" style="width: 50%;"></div>
      <div class="skeleton-map shimmer" style="height: 25dvh; margin-top: 1em;"></div>
    </div>
  {:else if $countriesStats.data}
    <WorldMap {userData} />
  {/if}
</div>

<script lang="ts">
  import WorldMap from '../charts/WorldMap.svelte';

  import { getCountriesAnalytics } from '../../../queries/analytics';

  $: countriesStats = getCountriesAnalytics('3m');
  $: userData = $countriesStats?.data ? populateUserData() : {};

  /**
   * Populate user data for the world map from countries statistics
   */
  const populateUserData = () => {
    if (!$countriesStats.data) return {};

    const data: Record<string, number> = {};

    for (const country of $countriesStats.data.countries) {
      data[country.numericCode] = country.visitors;
    }

    return data;
  };
</script>

<style>
  .countries-world-map {
    border-radius: 10px;
    /* border: 1px solid var(--gray-color); */
    background-color: var(--light-blue-color);
    height: 39dvh;
  }

  .countries-world-map h3 {
    padding: 1em 1em 0;
    margin-bottom: -0.5em;
    color: var(--hover-blue-color);
  }

  @media (min-width: 1440px) {
    .countries-world-map {
      height: 40dvh;
    }
  }
</style>
