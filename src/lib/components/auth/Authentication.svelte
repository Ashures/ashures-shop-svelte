<script>
    import LoginForm from "$lib/components/auth/LoginForm.svelte";
    import RegisterForm from "$lib/components/auth/RegisterForm.svelte";
    import TabMenu from "../TabMenu.svelte";
</script>

<div class="auth-container">
  <div class="auth-content">
    <TabMenu 
      tabs = {
        [
          {"name": "Login", "component": LoginForm},
          {"name": "Register", "component": RegisterForm},
        ]
      }
    />
  </div>
</div>