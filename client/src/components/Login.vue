<template>
  <div>
    <form v-on:submit="login">
      <div>
        <input id="email" type="text" />
        <input id="password" type="password" />
        <input type="submit" value="Login" />
      </div>
    </form>
    <div>
      <a href="#">forgot password</a> |
      <a href="#">create account</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>