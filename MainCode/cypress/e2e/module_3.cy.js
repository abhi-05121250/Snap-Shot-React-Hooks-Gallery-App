// cypress/integration/item.spec.js

describe("Item Component", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  // Helper function to wait for images to load
  const waitForImagesToLoad = () => {
    cy.get(".photo-container img").should("have.length.greaterThan", 0);
  };

  it("loads mountain images when navigating to /mountain", () => {
    // Visit the /mountain route
    cy.visit("/SnapScout");
    cy.contains("Mountain").click();

    // Wait for images to load
    waitForImagesToLoad();

    // Verify that the page contains the heading "Mountain Pictures"
    cy.contains("h2", "Mountain Pictures").should("exist");
  });

  it("loads beach images when navigating to /beach", () => {
  
  cy.visit("/SnapScout");
    cy.contains("Beach").click();
    // Visit the /beach route

    // Wait for images to load
    waitForImagesToLoad();

    // Verify that the page contains the heading "Beach Pictures"
    cy.contains("h2", "Beach Pictures").should("exist");
  });

  it("loads bird images when navigating to /bird", () => {
    // Visit the /bird route
    cy.visit("/SnapScout");
    cy.contains("Bird").click();

    // Wait for images to load
    waitForImagesToLoad();

    // Verify that the page contains the heading "Bird Pictures"
    cy.contains("h2", "Bird Pictures").should("exist");
  });

  it("loads food images when navigating to /food", () => {
    // Visit the /food route
    cy.visit("/SnapScout");
    cy.contains("Food").click();

    // Wait for images to load
    waitForImagesToLoad();

    // Verify that the page contains the heading "Food Pictures"
    cy.contains("h2", "Food Pictures").should("exist");
  });
});
