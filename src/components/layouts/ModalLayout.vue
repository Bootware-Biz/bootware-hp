<template>
  <div class="modal-layer">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<script>
  import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
  } from 'body-scroll-lock';

  export default {
    mounted() {
      const modal = document.querySelector('.modal')
      disableBodyScroll(modal)
    },

    beforeDestory() {
      clearAllBodyScrollLocks()
    }
  }
</script>
