<template>
  <main id="app">
    <!-- <img
            @mouseenter="display"
            @mouseleave="display"
            alt="Vue logo"
            src="./assets/logo.png"
        /> -->
    <header-menu />
    <HelloWorld v-show="showUp" msg="Hello world" />
  </main>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* margin-top: 60px;jj */
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
