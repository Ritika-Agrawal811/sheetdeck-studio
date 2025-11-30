<div class="table-container" bind:this={tableElement}>
  <table>
    <thead>
      <tr>
        <th class="w-40">Title</th>
        <th>Category</th>
        <th>Last Modified</th>
        <th>File Size</th>
      </tr>
    </thead>

    <tbody>
      {#each data as item}
        <tr>
          <td>{item.title}</td>
          <td>
            <div class="tag" style="--color: {getColor(item.category)}">
              {getCategory(item.category)}
            </div>
          </td>
          <td>{formatDate(item.updatedAt)}</td>
          <td>{formatFileSize(item.imageSize)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<script lang="ts">
  import type { Cheatsheet } from '../../../types/cheatsheet';
  import { CATEGORIES_INFO, type CategoryKey } from '../../../constants/categories';
  import { formatDate } from '../../../utils/formatDate';
  import { formatFileSize } from '../../../utils/formatFileSize';

  export let data: Cheatsheet[];

  let tableElement: HTMLDivElement | undefined = undefined;
  export { tableElement as this };

  const getCategory = (category: string) => {
    return CATEGORIES_INFO[category as CategoryKey].title;
  };

  const getColor = (category: string) => {
    return CATEGORIES_INFO[category as CategoryKey].color;
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
    z-index: 10;
  }

  th,
  td {
    text-align: left;
    padding: 1.35em 1em;
  }

  th {
    padding: 1.65em 1em;
  }

  .tag {
    border: 1px solid var(--color);
    color: var(--color);
    border-radius: 100vmax;
    padding: 0.2em 0.75em;
    font-size: 0.85rem;
    width: fit-content;
  }

  .w-40 {
    width: 40%;
  }
</style>
