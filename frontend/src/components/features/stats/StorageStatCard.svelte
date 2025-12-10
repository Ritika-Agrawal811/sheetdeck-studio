<section class="storage-stat-card">
  <TabMenu {tabs} bind:activeTab />
  <div class="main">
    {#key activeTab}
      {#if $usage.isLoading}
        <p>loading...</p>
      {:else}
        {@const info = activeTab === 'database' ? databaseUsage : cheatsheetUsage}
        <!-- Usage chart and data -->
        <div class="usage-info">
          <PartialArc value={info.usagePercent} />
          <p>
            <span class="value">{formatSize(info.sizeBytes)}</span>
            <span class="slash-icon">/</span>
            <span class="limit">{info.limitPretty}</span>
          </p>
        </div>

        <!-- Database Top Tables -->
        {#if activeTab === 'database'}
          <div class="top-tables">
            <h4>Top Tables</h4>
            <ul class="list">
              {#each databaseUsage.tables as table}
                <li>
                  <span>{table.tableName}</span>
                  <span class="value">{table.size}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/if}

        <!-- Storage Top File -->
        {#if activeTab === 'storage'}
          <div class="top-files">
            <h4>Top Files</h4>
            <ul class="list">
              {#each cheatsheetUsage.files as file}
                <li>
                  <p>
                    {file.title}
                    <CategoryTag category={file.category} />
                  </p>
                  <span class="value">{file.size}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      {/if}
    {/key}
  </div>
</section>

<script lang="ts">
  import PartialArc from '../charts/PartialArc.svelte';
  import CategoryTag from '../cheatsheet-display/CategoryTag.svelte';
  import TabMenu from '../../common/TabMenu.svelte';

  import { getUsage } from '../../../queries/config';
  import { formatSize } from '../../../utils/formatSize';

  const tabs = [
    { name: 'database', label: 'Database' },
    { name: 'storage', label: 'Storage' },
  ];

  let activeTab: string = 'database';

  $: usage = getUsage();
  $: databaseUsage = $usage.data?.database ?? {
    sizeBytes: 0,
    limitPretty: '500 MB',
    usagePercent: 0,
    tables: [],
  };

  $: cheatsheetUsage = $usage.data?.storage ?? {
    sizeBytes: 0,
    limitPretty: '1 GB',
    usagePercent: 0,
    files: [],
  };
</script>

<style>
  .storage-stat-card {
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    padding: 1em;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 2.5em);
    padding-top: 0.5em;
  }

  .usage-info {
    display: flex;
    align-items: center;
    gap: 1.35em;
  }

  .usage-info p {
    margin-top: 0.5em;
  }

  .usage-info .value {
    font-size: 1.65rem;
    font-weight: 600;
    color: var(--blue-color);
  }

  .usage-info .slash-icon {
    font-size: 1.25rem;
    color: var(--dark-gray-color);
  }

  .usage-info .limit {
    font-size: 1.25rem;
    color: var(--dark-gray-color);
  }

  .top-tables .list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin-top: 1em;
  }

  .top-files .list {
    list-style-type: none;
    margin-top: 1em;
  }

  .top-tables .list li,
  .top-files .list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 0.7em 1em;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    box-shadow: 0 0 0.25em 0.15em var(--light-gray-color);
  }

  .list li .value {
    font-weight: 600;
    color: var(--dark-gray-color);
  }

  .top-files .list li:not(:last-child) {
    margin-bottom: 0.75em;
  }

  .top-files .list li p {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
</style>
