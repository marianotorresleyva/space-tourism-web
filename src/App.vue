<template>
  <div id="app">
    <img
      @mouseenter="display"
      @mouseleave="display"
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <header-menu>
      <template v-slot:header>
        <h2>Here might be a page title</h2>
      </template>
    </header-menu>
    <HelloWorld v-show="showUp" msg="Hello world" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderMenu from "./components/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderMenu,
  },
  data: function () {
    return {
      showUp: false,
    };
  },
  methods: {
    display() {
      this.showUp = !this.showUp;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
