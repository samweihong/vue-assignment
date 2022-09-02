<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/dragdrop">Drop & Drop</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  margin-bottom: 10px;
}

nav * {
  margin-right: 10px;
}
</style>
