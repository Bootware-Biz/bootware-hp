<template>
  <v-app>
    <v-app-bar
      app
      color="#FFFC"
      elevate-on-scroll="true"
    >
      <h2 class="pr-5">bootware.org</h2>
      <v-spacer/>
      <v-btn href="#profile" text>Profile</v-btn>
      <v-btn href="#works" text>Works</v-btn>
      <v-btn href="#results" text>Results</v-btn>
      <v-btn href="https://github.com/bootware-whitebox/" target="_blank" text>GitHub</v-btn>
      <v-btn href="#contact" text>Contact</v-btn>

    </v-app-bar>

    <v-main transition="fade-transition">
      <HelloWorld/>
    </v-main>

    <v-footer color="white">
      <span class="mt-10 font-weight-regular">
        &copy; 2020 Bootware.
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
