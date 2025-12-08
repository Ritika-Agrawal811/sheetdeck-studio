<div class="tag {position}" style="--color: {getColor(category)}">
  {getCategory(category)}
</div>

<script lang="ts">
  import { getCategory, getColor } from '../../../utils/categoriesData';

  export let category: string;
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | null = null;
</script>

<style>
  .tag {
    border: 1px solid var(--color);
    color: var(--color);
    border-radius: 100vmax;
    padding: 0.2em 0.75em;
    font-size: 0.75rem;
    width: fit-content;
  }

  /* ---- position classes ---- */
  .tag.top-left {
    position: absolute;
    left: 0.55em;
    top: 0.55em;
  }
</style>
