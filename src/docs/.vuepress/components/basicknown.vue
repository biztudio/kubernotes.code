<template>
    <div>Basic Knowledge PPT</div>
</template>

<script>
//https://github.com/superwf/vue-impress#readme

import VueImpress from 'vue-impress'
import 'vue-impress/dist/vue-impress.css'

export default {
    components: {
        VueImpress
    },

    data () {
        return {

        }
    }
}
</script>

<style scoped>
body {
    overflow: hidden;
    height: 100%;
  }
  .app {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .impress-step {
    width: 500px;
    border: solid 1px;
    text-align: center;
    cursor: pointer;
  }
  .impress-viewport.overview .impress-step:not(.active) {
    opacity: 0;
  }
  .impress-step.active {
    cursor: auto;
  }
</style>