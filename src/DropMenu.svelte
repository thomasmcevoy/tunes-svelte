<script>
  export let items;
  export let setItem;
  export let currentItem;
  export let isVisible = false;

  export function toggleVisibility() {
    isVisible = !isVisible;
  }

  export function handleClick(newValue) {
    setItem(newValue);
    toggleVisibility();
  }
</script>

<div class="container">
  <div class="current item" on:click={toggleVisibility}>{currentItem}</div>
  <div class="drop-menu {isVisible ? '' : 'isHidden'}">
    {#each items as item}
      {#if item !== currentItem}
        <div class="item" on:click={handleClick(item)}>{item}</div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .drop-menu {
    border: thin solid #eee;
    border-top: thin solid white;
  }
  .isHidden {
    display: none;
  }

  .item {
    height: 2em;
    width: 6em;
    line-height: 2em;
    background-color: white;
    user-select: none;
  }
  .item:hover {
    cursor: select;
  }

  .current.item {
    border: solid thin white;
  }
</style>
