<template>
  <div id="app">
    <div class="menu-wrapper">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#/stocks">Stocks</a>
          </li>
          <li>
            <a href="/#/logout">(Username) Logout</a>
          </li>
        </ul>
      </nav>
    </div>

    <div id="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.menu-wrapper {
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-bottom: solid 1px #e7e7e7;
}
.menu-wrapper ul {
  list-style: none;
  padding: 0;
}
.menu-wrapper ul li {
  display: inline;
}
.menu-wrapper ul li a {
  color: #555;
  text-decoration: none;
}
.menu-wrapper ul li a:hover {
  text-decoration: underline;
}
</style>
