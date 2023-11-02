<script>
  export let tabs;

  let currentTab = 0;
</script>

<div class="tab-container">
  <div class="tab-list">
    {#each tabs as tab, i (tab.name)}
      <button class={i === currentTab ? "tab selected-tab" : "tab"}>{tab.name}</button>
    {/each}
  </div>
  <div class="tab-content">
    <svelte:component this={tab[currentTab].component} />
  </div>
</div>