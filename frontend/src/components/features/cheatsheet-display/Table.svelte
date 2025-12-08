<div class="table-container" bind:this={tableElement}>
  <table>
    <thead>
      <tr>
        <th class="w-40">Title</th>
        <th>Category</th>
        <th>{getColumnHeader(selectedFilter)}</th>
        <th>File Size</th>
      </tr>
    </thead>

    <tbody>
      {#each data as item}
        <tr>
          <td>{item.title}</td>
          <td>
            <CategoryTag category={item.category} />
          </td>
          <td>{getCellValue(item, selectedFilter)}</td>
          <td>{formatSize(item.imageSize)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<script lang="ts">
  import CategoryTag from './CategoryTag.svelte';

  import type { Cheatsheet, SortFilters } from '../../../types/cheatsheet';
  import { formatDate } from '../../../utils/formatDate';
  import { formatSize } from '../../../utils/formatSize';

  export let data: Cheatsheet[];
  export let selectedFilter: SortFilters = 'recent';

  let tableElement: HTMLDivElement | undefined = undefined;
  export { tableElement as this };

  const getColumnHeader = (filter: SortFilters) => {
    if (filter.includes('downloaded')) return 'Downloads';
    if (filter.includes('viewed')) return 'Views';
    return 'Last Modified';
  };

  const getCellValue = (item: Cheatsheet, filter: SortFilters) => {
    if (filter.includes('downloaded')) return item.downloads;
    if (filter.includes('viewed')) return item.views;
    return formatDate(item.createdAt);
  };

  export function scrollBy(options: ScrollToOptions) {
    tableElement?.scrollBy(options);
  }
</script>

<style>
  .table-container {
    height: 620px;
    overflow-y: scroll;
  }

  @media (min-width: 1440px) {
    .table-container {
      height: 650px;
    }
  }

  .table-container table {
    width: 100%;
    table-layout: fixed;
  }

  .table-container thead {
    position: sticky;
    top: -5px;
    border-radius: 10px;
    background-color: var(--light-gray-color);
    z-index: 5;
  }

  th,
  td {
    text-align: left;
    padding: 1.35em 1em;
  }

  th {
    padding: 1.65em 1em;
  }

  .w-40 {
    width: 40%;
  }
</style>
