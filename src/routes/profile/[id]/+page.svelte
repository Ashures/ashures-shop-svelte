<script>
  import User from "$lib/components/profile/User.svelte";

  export let data;
</script>

<div class="main">
  <User user={data.results} />
</div>