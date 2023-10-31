<script>
  export let data;

  const user = data.results;
</script>

<img src={user.icon} alt="User icon">

<h1>{user.username}</h1>

<ul>
  <li>Name: {user.firstName} {user.lastName}</li>
  <li>Email: {user.emailAddress}</li>
</ul>