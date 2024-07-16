describe("snapshot spec", () => {
  it("home page", () => {
    cy.visit("/");
    cy.get("div h1")
      .should("exist")
      .contains("SnapShot");
    cy.get("form input").should("exist");
    cy.get("button svg").should("exist");
    cy.get("nav").should("exist");
    cy.get("ul li").should("exist");
    cy.get("li a")
      .should("exist")
      .contains("Mountain");
    cy.get("li a")
      .should("exist")
      .contains("Beaches");
    cy.get("li a")
      .should("exist")
      .contains("Birds");
    cy.get("li a")
      .should("exist")
      .contains("Food");
    cy.get("div h2")
      .should("exist")
      .contains("mountain Pictures");
    cy.get("li img").should("exist");
  });
});
