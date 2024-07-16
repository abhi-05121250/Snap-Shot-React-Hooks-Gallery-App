// cypress/integration/search.spec.js

describe("Search Component", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  // Helper function to wait for images or error messages to load
  const waitForContentToLoad = () => {
    cy.get(".photo-container img, .not-found h2").should("exist");
  };

  it("loads images for valid search term 'fruits'", () => {
    // Visit the /search/fruits route
    cy.visit("/SnapScout");
    
    cy.get(".search-form input").type("Fruits");
    cy.get(".search-form button").click();

    // Wait for images or error messages to load
    waitForContentToLoad();

    // Verify that the page contains the heading "Fruits Pictures"
    cy.contains("h2", "Fruits Pictures").should("exist");
  });

  it("loads images for valid search term 'vegetables'", () => {
    // Visit the /search/vegetables route
    cy.visit("/SnapScout");
    
    cy.get(".search-form input").type("vegetables");
    cy.get(".search-form button").click();

    // Wait for images or error messages to load
    waitForContentToLoad();

    // Verify that the page contains the heading "Vegetables Pictures"
    cy.contains("h2", "vegetables Pictures").should("exist");
  });

  it("displays 'No Images Found' for invalid search term 'chugcbkhqf'", () => {
    // Visit the /search/chugcbkhqf route
    cy.visit("/SnapScout");
    
    cy.get(".search-form input").type("chugcbkhqf");
    cy.get(".search-form button").click();

    // Wait for images or error messages to load
    waitForContentToLoad();

    // Verify that the "No Images Found" message is displayed
    cy.contains("h2", "No Images Found").should("exist");
  });

  it("displays 'Page Not Found' for a random URL", () => {
    // Visit a random URL
    cy.visit("/#/SnapScout/random-url");

    // Verify that the "Page Not Found" message is displayed
    
    cy.contains("h2", "Page Not Found").should("exist");
  });
});
