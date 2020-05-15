<script>
  import { filter, sort } from "../constants/functions.js";

  export let TUNES;
  export let FILTERS;
  export let SORTS;
  export let currentFilter = "All";
  export let currentSort = "Title";
  $: sortedFilteredTunes = sort(filter(TUNES, currentFilter), currentSort);

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

<main>
  <header>
    <select on:change={e => (currentFilter = e.target.value)}>
      {#each FILTERS as FILTER}
        <option>{FILTER}</option>
      {/each}
    </select>
    <span>sorted by</span>
    <select on:change={e => (currentSort = e.target.value)}>
      {#each SORTS as SORT}
        <option>{SORT}</option>
      {/each}
    </select>
  </header>
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
  main {
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 0 auto;
  }

  header {
    margin: 0.5em;
    font-size: 0.94em;
  }

  select {
    margin: 0;
    border: none;
  }
  option {
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .tune {
    margin: 0.5em;
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
