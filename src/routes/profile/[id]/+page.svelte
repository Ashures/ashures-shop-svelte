<script>
  export let data;

  const user = data.results;
</script>

<img width="300" src={user.icon} alt="User icon" class="user-icon">

<h1>{user.username}</h1>

<ul>
  <li>Name: {user.firstName} {user.lastName}</li>
  <li>Email: {user.emailAddress}</li>
</ul>