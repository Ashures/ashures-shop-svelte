<script>
  export let user;
</script>

<div class="user-container">
  <img src={user.icon} alt="User icon" class="user-icon">
  <div class="user-info">
    <h1>{user.username}</h1>
    <ul>
      <li>Name: {user.firstName} {user.lastName}</li>
      <li>Email: {user.emailAddress}</li>
    </ul>
  </div>
</div>
