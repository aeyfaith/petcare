<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

</script>

<template>
<link href="https://fonts.cdnfonts.com/css/prompt" rel="stylesheet">

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
