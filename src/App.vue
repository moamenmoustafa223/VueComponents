<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/UI/Button.vue';
</script>

<template>
  
  <HelloWorld msg="Vite + Vue" />

  <Button variant="default" size="default" :isLoading="false">
      Click Me
    </Button>
    <Button variant="danger" size="sm" :isLoading="true">
      Loading
    </Button>
    <Button variant="cancel" :fullWidth="true">
      Cancel
    </Button>
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
