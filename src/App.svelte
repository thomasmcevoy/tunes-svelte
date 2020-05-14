<script>
  import { filter, sort } from "../constants/functions.js";

  export let FILTERS;
  export let currentFilter = "All";
  export let SORTS;
  export let currentSort = "Title";
  export let TUNES;
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
    margin-top: 1em;
    font-size: 0.94em;
  }

  select {
    border: none;
  }
  option {
    user-select: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .tune {
    margin: 1em;
    border: 2px solid white;
    padding: 1em;
    background-color: rgb(255, 255, 255);
  }

  .selected {
    border: 2px solid #15232c;
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
