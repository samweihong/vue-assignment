<template>
  <div class="container">
    <CardContainer
      v-for="i in getMaxList"
      :key="i"
      :containerId="i"
      :cards="cards"
      @cardDragged="(cardId) => (this.draggedCardId = cardId)"
      @cardDroppedOnto="(cardId) => dropOntoCard(cardId)"
      @containerDroppedOnto="
        ({ containerId, position }) => dropOntoContainer(containerId, position)
      "
    />
  </div>
</template>

<script>
import CardContainer from "@/components/CardContainer.vue";
import { useCardsStore } from "@/stores/cards";
import { storeToRefs } from "pinia";

const store = useCardsStore();
store.fetchInitialData();

export default {
  name: "DragDropView.vue",
  components: { CardContainer },
  data() {
    return {
      cards: storeToRefs(store).cards,
      draggedCardId: 0,
    };
  },
  computed: {
    getMaxList() {
      return Math.max(2, ...this.cards.map((card) => card.list));
    },
  },
  methods: {
    dropOntoCard(droppedOntoCardId) {
      const draggedCardIndex = this.cards.findIndex(
        (card) => card.id === this.draggedCardId
      );
      const draggedOntoCardIndex = this.cards.findIndex(
        (card) => card.id === droppedOntoCardId
      );
      const draggedCard = this.cards[draggedCardIndex];
      const draggedOntoCard = this.cards[draggedOntoCardIndex];

      draggedCard.list = draggedOntoCard.list;
      this.cards.splice(draggedCardIndex, 1);
      this.cards.splice(draggedOntoCardIndex, 0, draggedCard);
    },
    dropOntoContainer(droppedOntoContainerId, position) {
      const draggedCardIndex = this.cards.findIndex(
        (card) => card.id === this.draggedCardId
      );
      const draggedCard = this.cards[draggedCardIndex];

      if (draggedCard.list === droppedOntoContainerId && position === "center")
        return;

      draggedCard.list = droppedOntoContainerId;
      this.cards.splice(draggedCardIndex, 1);
      if (position === "top") this.cards.splice(0, 0, draggedCard);
      else this.cards.push(draggedCard);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
