<template>
  <div>
    <div
      class="space"
      @dragover.prevent
      @drop.prevent="
        this.$emit('containerDroppedOnto', { containerId, position: 'top' })
      "
    ></div>
    <div
      class="card-container"
      @dragover.prevent
      @drop.prevent="
        this.$emit('containerDroppedOnto', { containerId, position: 'center' })
      "
    >
      <Card
        v-for="card in filteredCards"
        :key="card.id"
        :card="card"
        @cardDragged="(cardId) => this.$emit('cardDragged', cardId)"
        @cardDroppedOnto="(cardId) => this.$emit('cardDroppedOnto', cardId)"
      />
    </div>
    <div
      class="space"
      @dragover.prevent=""
      @drop.prevent="
        this.$emit('containerDroppedOnto', { containerId, position: 'bottom' })
      "
    ></div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "CardContainer",
  components: { Card },
  props: ["containerId", "cards"],
  emits: ["containerDroppedOnto", "cardDragged", "cardDroppedOnto"],
  computed: {
    filteredCards() {
      return this.cards.filter((card) => card.list === this.containerId);
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: wheat;
  min-width: 210px;
  min-height: 100px;
  padding: 0 30px 0 30px;
}

.space {
  background-color: wheat;
  min-height: 50px;
}
</style>
