// https://docs.cypress.io/api/introduction/api.html

describe("Drag and Drop", () => {
  beforeEach(() => {
    cy.visit("/dragdrop");
  });

  it("drag a card from container1 to container2", () => {
    cy.get(".card").first().trigger("dragstart");
    cy.get(".card-container").eq(1).trigger("drop");
    cy.get(".card-container").eq(0).find(".card").should("have.length", 1);
    cy.get(".card-container").eq(1).find(".card").should("have.length", 2);
  });

  it("drag a card from container2 to container1", () => {
    cy.get(".card").eq(2).trigger("dragstart");
    cy.get(".card-container").eq(0).trigger("drop");
    cy.get(".card-container").eq(0).find(".card").should("have.length", 3);
    cy.get(".card-container").eq(1).find(".card").should("have.length", 0);
  });
});
