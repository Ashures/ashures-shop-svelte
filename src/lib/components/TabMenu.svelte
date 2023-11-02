<script>
  import { onMount } from "svelte";

  export let tabs;

  let tabButtons = [];
  let currentTab = 0;

  const changeTab = (index) => {
    if (currentTab === index) return;

    tabButtons[currentTab].classList.remove("selected-tab");
    currentTab = index;
    tabButtons[currentTab].classList.add("selected-tab");
  };

  onMount(() => {
    tabButtons = document.getElementsByClassName("tab");
  });
</script>

<div class="tab-container">
  <div class="tab-list">
    {#each tabs as tab, i (tab.name)}
      <button class={i === currentTab ? "tab selected-tab" : "tab"} on:click={() => changeTab(i)}>{tab.name}</button>
    {/each}
  </div>
  <div class="tab-content">
    <svelte:component this={tabs[currentTab].component} />
  </div>
</div>