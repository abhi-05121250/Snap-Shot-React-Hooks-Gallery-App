describe("Header Component", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("displays title, search input, and search button", () => {
    // Visit the application's home page
    cy.visit("/");

    // Assert that the title is displayed
    cy.contains("h1", "SnapShot").should("be.visible");

    // Assert that the search input is displayed
    cy.get(".search-form input").should("be.visible");

    // Assert that the search button is displayed
    cy.get(".search-form button").should("be.visible");
  });

  it("submits search form", () => {
    // Visit the application's home page
    cy.visit("/");

    // Type a search query in the input field
    cy.get(".search-form input").type("mountain");

    // Click the search button
    cy.get(".search-form button").click();

    // Assert that the URL changes to the search results page
    cy.url().should("include", "/SnapScout/search/mountain");

    
  });
});

