<template>
  <main>
    <h1>Welcome to this useless page!</h1>
    <small>Well, at least it can show the time...</small>
    <p>Current time: {{ getTimeString }}</p>
  </main>
</template>

<script>
export default {
  name: "HomeView.vue",
  data() {
    return {
      time: new Date(),
      intervalId: 0,
    };
  },
  computed: {
    getTimeString() {
      const time = this.time;
      return `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}
              ${time.toTimeString()}`;
    },
  },
  mounted() {
    this.intervalId = setInterval(() => (this.time = new Date()), 500);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
main {
  text-align: center;
}

p {
  margin-top: 20px;
}
</style>
