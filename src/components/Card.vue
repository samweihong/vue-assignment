<template>
  <div
    v-if="card"
    class="card"
    draggable="true"
    @dragstart="this.$emit('cardDragged', card.id)"
    @dragover.prevent
    @drop.prevent="this.$emit('cardDroppedOnto', card.id)"
  >
    <p>Name: {{ card?.name ?? "DIO" }}</p>
    <p
      v-for="[key, value] in Object.entries(card).filter(
        ([key]) => !['id', 'name', 'list'].includes(key)
      )"
      :key="key"
    >
      {{ capitalizeFirstLetter(key) }}: {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  emits: ["cardDragged", "cardDroppedOnto"],
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
div {
  background-color: burlywood;
  width: 180px;
  padding: 15px;
  cursor: move;
}
</style>
