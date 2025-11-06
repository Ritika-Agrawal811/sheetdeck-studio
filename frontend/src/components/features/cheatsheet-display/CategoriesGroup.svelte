<aside class="categories-group">
  <!-- Categories Section -->
  <div>
    <h3 class="sub-heading">Categories</h3>
    <Arc data={categoriesData} label="Cheat Sheets" count={totalCheatsheets} />
    <TabList data={categoriesData} variant="fill" bind:activeItem={activeCategory} setActiveItem={setActiveCategory} />
  </div>

  <!-- Sub Categories Section -->
  <div class="subcategories-section">
    <h3 class="sub-heading">Sub Categories</h3>
    <TabList
      data={subcategoriesData}
      variant="outline"
      bind:activeItem={activeSubcategory}
      setActiveItem={setActiveSubcategory}
    />
  </div>
</aside>

<script lang="ts">
  import TabList from '../../common/TabList.svelte';
  import Arc from '../charts/Arc.svelte';

  import { categoryStatsToArcChartData, subcategoryStatstoArcChartData } from '../../../utils/prepareChartData';
  import { getConfig } from '../../../queries/config';

  export let activeCategory: string | null = null;
  export let activeSubcategory: string | null = null;

  $: configData = getConfig();

  $: totalCheatsheets = $configData.data?.stats.totalCheatsheets ?? 0;
  $: categoriesStats = $configData.data?.categoryStats ?? [];
  $: categoriesData = categoryStatsToArcChartData(categoriesStats);

  $: subcategories = categoriesStats.find((item) => item.category == activeCategory)?.subcategoriesStats;
  $: subcategoriesData = subcategories ? subcategoryStatstoArcChartData(subcategories) : [];

  /**
   * Set active sub category and prepare sub cateogies data for the TabList component
   */
  $: if (subcategories?.[0]) {
    activeSubcategory = subcategories[0].subcategory;
  }

  const setActiveCategory = (category: string) => {
    activeCategory = category;
  };

  const setActiveSubcategory = (subcategory: string) => {
    activeSubcategory = subcategory;
  };
</script>

<style>
  .categories-group {
    width: 315px;
    height: 100%;
    border-radius: 15px;
    padding: 1em;
    background-color: var(--light-gray-color);
    border: 1px solid var(--gray-color);
  }

  .subcategories-section {
    margin-top: 2em;
  }
</style>
