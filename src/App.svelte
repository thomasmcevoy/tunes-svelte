<script>
  import { TUNES } from "../constants/tunes.js";
  import { FILTERS } from "../constants/filters.js";
  import { SORTS } from "../constants/sorts.js";
  import { filter, sort } from "../constants/functions.js";
  import DropMenu from "./DropMenu.svelte";

  export let currentFilter = "All";
  export let currentSort = "Title";
  $: sortedFilteredTunes = sort(filter(TUNES, currentFilter), currentSort);

  export const setFilter = value => (currentFilter = value);
  export const setSort = value => (currentSort = value);

  export function toggleSelected(tune) {
    const index = TUNES.indexOf(tune);
    if (!TUNES[index].selected) {
      TUNES[index].selected = true;
    } else {
      TUNES[index].selected = false;
    }
    TUNES = TUNES;
  }
</script>

<header>
  <DropMenu
    items={FILTERS}
    currentItem={currentFilter}
    setCurrent={setFilter} />
  <span>sorted by</span>
  <DropMenu items={SORTS} currentItem={currentSort} setCurrent={setSort} />
</header>
<main>
  <ul>
    {#each sortedFilteredTunes as tune}
      <li
        class="tune {tune.selected ? 'selected' : ''}"
        on:click={toggleSelected(tune)}>
        <div class="title">{tune.title}</div>
        <div>{tune.composer} ({tune.year})</div>
      </li>
    {/each}
  </ul>
</main>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 0.5em);
    height: 2.5em;
    margin: 0;
    padding: 0.5em 0.25em;
    display: flex;
    background-color: inherit;
    text-align: top;
    z-index: 5;
  }

  span {
    padding: 0 0.1rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.875em;
    font-weight: 100;
  }

  main {
    margin: 3.5em auto 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .tune {
    margin: 0 0.5em 0.5em;
    border: 1.5px solid white;
    padding: 1em;
    background-color: rgb(255, 255, 255);
    font-size: 0.75em;
  }

  .selected {
    border: 1.5px solid #0866a0;
    color: #052031;
    background-color: #e1eff8;
  }

  .title {
    font-size: 1.5em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
