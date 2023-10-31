<script>
  import { page } from "$app/stores";
</script>

<h1>Error {$page.status}: {$page.error.message}</h1>
<h2>This profile doesn't work or is missing.</h2>