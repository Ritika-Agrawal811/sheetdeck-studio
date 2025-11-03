<section class="grid-container">
  {#each data as item}
    <article class="card">
      <figure>
        <img src={item.imageUrl} alt={item.title} />
      </figure>

      <h4>{item.title}</h4>
    </article>
  {/each}
</section>

<script lang="ts">
  import type { Cheatsheet } from '../../../types/cheatsheet';

  export let data: Cheatsheet[];
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5em;
    height: 620px;
    overflow-y: scroll;
  }

  @media (min-width: 1440px) {
    .grid-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      height: 650px;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
  }

  img {
    height: 230px;
    width: 85%;
    object-fit: contain;
    filter: drop-shadow(0 0 5px var(--gray-color));
  }

  h4 {
    font-weight: 400;
    text-align: center;
    margin: 1em 0;
  }
</style>
