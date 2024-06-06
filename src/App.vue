<template>
  <HelloWorld msg="Vite + Vue" />

  <!-- Button with default variant -->

  <Button variant="default" size="lg" :fullWidth="true" icon="fa-solid fa-angle-left" @click="handleClick('default')">
    Default Button
  </Button> 
  <Button variant="defaultOutline" size="lg" :fullWidth="true" @click="handleClick('default')">
    Default Button
  </Button>
  <Button variant="sec" size="lg" :fullWidth="true" @click="handleClick('default')">
    Default Button
  </Button>
  <Button variant="secOutline" size="lg" :fullWidth="true" @click="handleClick('default')">
    Default Button
  </Button>

  <!-- Button with danger variant -->
  <Button variant="danger" size="lg" :fullWidth="true" @click="handleClick('danger')">
    Danger Button
  </Button>
  <Button variant="dangerOutline" size="lg" :fullWidth="true" @click="handleClick('danger')">
    Danger Button
  </Button>
  <!-- Button with cancel variant -->
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/UI/Button.vue';

function handleClick(variant) {
  console.log(`${variant} button clicked!`);
}
</script>

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
