<script>
  export let items;
  export let setCurrent;
  export let currentItem;
  export let isVisible = false;

  export function toggleVisibility() {
    isVisible = !isVisible;
  }

  export function handleClick(item) {
    setCurrent(item);
    toggleVisibility();
  }
</script>

<div class="container" style="height: {isVisible ? 2 * items.length : 2}em">
  <div class="current item" on:click={toggleVisibility}>
    <span>{currentItem}</span>
  </div>
  <div class="drop-menu {isVisible ? '' : 'isHidden'}">
    {#each items as item}
      {#if item !== currentItem}
        <div class="item" on:click={handleClick(item)}>{item}</div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .container {
    width: 7.25em;
    border: medium solid #eee;
    background-color: white;
  }

  .isHidden {
    display: none;
  }

  .item {
    display: block;
    height: 2em;
    line-height: 2em;
    user-select: none;
  }
  .item:hover {
    cursor: select;
  }

  .current.item {
    position: relative;
  }
  .current.item::after {
    font-size: 0.5em;
    content: "▼";
    position: absolute;
    right: 0.75em;
    top: 0.1em;
  }

  span {
    position: relative;
    left: -0.2em;
  }
</style>
