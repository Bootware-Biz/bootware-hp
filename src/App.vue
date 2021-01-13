<template>
  <v-app>
    <v-main>

      <transition mode="in">
        <div>
          <ModalLayout v-if="true">
            <HelloWorld/>
          </ModalLayout>
        </div>
      </transition>
    </v-main>


    <v-footer app color="#FFF0" class="justify-center">
<!--      <v-img src="./assets/title.svg" alt="Bootware" max-width="10%"/>-->
      <v-spacer/>
      <v-btn href="#works" text>Works</v-btn>
      <v-btn href="#results" text>Results</v-btn>
      <v-btn href="https://github.com/bootware-whitebox/" target="_blank" text>GitHub</v-btn>
      <v-btn href="#contact" text>Contact</v-btn>

<!--      <span class="font-weight-regular">-->
<!--        <v-card-text>&copy; 2020 <a href="https://www.bootware.org/">Bootware</a></v-card-text>-->
<!--      </span>-->
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ModalLayout from "./components/layouts/ModalLayout.vue";

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    ModalLayout
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
  .svg-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("assets/background.svg") no-repeat center center;
    background-size: cover;
  }
</style>
