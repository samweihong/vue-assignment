import { defineStore } from "pinia";

export const useCardsStore = defineStore({
  id: "cards",
  state: () => ({ cards: [] }),
  actions: {
    async fetchInitialData() {
      const patient = await fetch("https://build.fhir.org/patient-example.json").then(
        (res) => res.json()
      );
      const name = patient.name[1].given[0];
      this.cards = [
        { id: 1, name, gender: patient.gender, list: 1 },
        { id: 2, name, birthdate: patient.birthDate, list: 1 },
        { id: 3, name, address: patient.address[0].text, list: 2 },
      ];
    },
  },
});
