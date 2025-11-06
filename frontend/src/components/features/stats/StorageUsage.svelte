<section class:minimize={isMinimized}>
  <div class="container">
    {#if isMinimized}
      <article>
        <h5>Database</h5>
        <SegmentedArc value={databaseUsage.usagePercent} />
      </article>

      <article>
        <h5>Storage</h5>
        <SegmentedArc value={cheatsheetUsage.usagePercent} />
      </article>
    {:else}
      <h4 class="text">Storage details</h4>
      <!-- Database Usage -->
      <article>
        <h5 class="text">
          <span class="icon-text">
            <Database size={16} />
            Database
          </span>
          <span class="percentage">
            {databaseUsage.usagePercent}%
          </span>
        </h5>
        <div class="progress-track">
          <div class="progress-fill" style={`width: ${databaseUsage.usagePercent}%;`}></div>
        </div>
        <p class="text">{databaseUsage.sizePretty} of {databaseUsage.limitPretty} used</p>
      </article>

      <!-- Storage Usage -->
      <article>
        <h5 class="text">
          <span class="icon-text">
            <Layers size={16} />
            Cheat Sheets
          </span>
          <span class="percentage">
            {cheatsheetUsage.usagePercent}%
          </span>
        </h5>
        <div class="progress-track">
          <div class="progress-fill" style={`width: ${cheatsheetUsage.usagePercent}%;`}></div>
        </div>
        <p class="text">{cheatsheetUsage.sizePretty} of {cheatsheetUsage.limitPretty} used</p>
      </article>
    {/if}
  </div>
</section>

<script lang="ts">
  import { Database, Layers } from 'lucide-svelte';
  import SegmentedArc from '../charts/SegmentedArc.svelte';

  import { getUsage } from '../../../queries/config';

  export let isMinimized = false;

  $: usage = getUsage();
  $: if ($usage.data) {
    console.log('Usage data:', $usage.data);
  }

  $: databaseUsage = $usage.data?.database ?? {
    limitPretty: '500 MB',
    sizePretty: '0 MB',
    usagePercent: 0,
  };

  $: cheatsheetUsage = $usage.data?.storage ?? {
    limitPretty: '1 GB',
    sizePretty: '0 MB',
    usagePercent: 0,
  };
</script>

<style>
  section {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 1em;
  }

  .container {
    width: 80%;
  }

  h4 {
    margin-bottom: 1em;
    font-size: 1rem;
    font-weight: 400;
  }

  article {
    margin-bottom: 1em;
  }

  h5 {
    font-size: 0.95rem;
    font-weight: 400;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h5 .icon-text {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .percentage {
    color: var(--blue-color);
  }

  p {
    font-size: 0.85rem;
    color: var(--dark-gray-color);
    margin-top: 0.45em;
  }

  .progress-track {
    width: 100%;
    height: 8px;
    background-color: var(--background);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  .progress-fill {
    height: 100%;
    background-color: var(--green-color);
    border-radius: 5px;
    transition: width 0.7s ease-out;
  }

  section .text {
    visibility: visible;
    transition: visibility 0s 0.7s;
    white-space: nowrap;
  }

  /* ---- minimize classes ---- */

  section.minimize article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5em;
  }

  section.minimize h5 {
    margin-bottom: 0.75em;
  }

  section.minimize .text {
    visibility: hidden;
    display: none;
    transition: visibility 0s 0.2s;
  }
</style>
