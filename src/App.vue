<template>
  <v-app>
    <v-app-bar
            v-if="false"
            app
            color="#FFF0"
            elevation="0"
    >
      <h2 class="pr-5">bootware</h2>
      <v-spacer/>
      <v-btn href="#profile" text>Profile</v-btn>
      <v-btn href="#works" text>Works</v-btn>
      <v-btn href="#results" text>Results</v-btn>
      <v-btn href="https://github.com/bootware-whitebox/" target="_blank" text>GitHub</v-btn>
      <v-btn href="#contact" text>Contact</v-btn>

    </v-app-bar>

    <transition mode="out-in">
      <HelloWorld/>
    </transition>

    <v-footer v-if="true" color="white" class="justify-center">
      <span class="mt-10 font-weight-regular">
        <v-card-text>&copy; 2020 <a href="https://www.bootware.org/">Bootware</a></v-card-text>
      </span>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    // NOP
  }),
});
</script>

<style lang="less">
  a {
    text-decoration: none;
  }
  .v-enter {
    opacity: 0;
  }
  .v-enter-active {
    transition: opacity 1s
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-leave {
    opacity: 1;
  }
  .v-leave-active {
    transition: opacity 1s
  }
  .v-leave-to {
    opacity: 0;
  }
</style>
