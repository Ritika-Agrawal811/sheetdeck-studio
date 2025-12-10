<div class="world-map-chart">
  {#if countries && pathGenerator}
    <svg viewBox="0 0 960 500" xmlns="http://www.w3.org/2000/svg" class="world-map-svg">
      {#each countries.features as country}
        <path d={pathGenerator(country)} fill={getCountryColor(country.id)} stroke="#fff" stroke-width="0.5" />
      {/each}
    </svg>
  {:else}
    <div>Loading map...</div>
  {/if}
</div>

<script lang="ts">
  import { geoPath, geoEqualEarth } from 'd3-geo';
  import type { GeoProjection, GeoPath } from 'd3-geo';
  import { feature } from 'topojson-client';
  import type { Topology, GeometryCollection } from 'topojson-specification';
  import type { FeatureCollection, Geometry } from 'geojson';
  import { onMount } from 'svelte';

  export let userData: Record<string, number> = {};

  let countries: FeatureCollection<Geometry> | null = null;

  /**
   * Load world map topology data on component mount
   * Filter out Antarctica (ID: "010") for better visualization
   */
  onMount(async () => {
    try {
      const response = await fetch('/static/assets/json/countries-110m.json');
      const worldTopology = (await response.json()) as Topology<{
        countries: GeometryCollection;
        land: GeometryCollection;
      }>;

      const allCountries = feature(worldTopology, worldTopology.objects.countries) as FeatureCollection<Geometry>;

      countries = {
        type: 'FeatureCollection',
        features: allCountries.features.filter((feature) => feature.id !== '010'),
      };
    } catch (error) {
      console.error('Failed to load map data:', error);
    }
  });

  /**
   * Get color for a country based on user data intensity
   *
   * @param countryId
   */
  function getCountryColor(countryId: string | number | undefined): string {
    if (!countryId) return '#fefefe';

    const count = userData[String(countryId)];
    if (!count) return '#fefefe';

    const maxCount = Math.max(...Object.values(userData));
    const intensity = count / maxCount;

    const r = Math.floor(59 + (1 - intensity) * 50);
    const g = Math.floor(130 + (1 - intensity) * 10);
    const b = 246;

    return `rgb(${r}, ${g}, ${b})`;
  }

  let projection: GeoProjection | null = null;
  let pathGenerator: GeoPath<any, any> | null = null;

  $: if (countries) {
    projection = geoEqualEarth().fitSize([960, 500], countries);
    pathGenerator = geoPath().projection(projection);
  }
</script>

<style>
  .world-map-chart {
    width: 100%;
    height: calc(100% - 2em);
  }

  .world-map-svg {
    width: 100%;
    height: 100%;
  }
</style>
