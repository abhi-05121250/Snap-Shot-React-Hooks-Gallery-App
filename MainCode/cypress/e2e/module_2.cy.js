// cypress/integration/navigation.spec.js

describe("Navigation Component", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("displays navigation links and navigates to corresponding sections", () => {
    // Visit the application's home page
    cy.visit("/");
    cy.get('.main-nav').should('exist');
    cy.get('.main-nav ul li').should('have.length', 4);
    cy.get('.main-nav ul li').eq(0).should('contain.text', 'Mountain');
    cy.get('.main-nav ul li').eq(1).should('contain.text', 'Beach');
    cy.get('.main-nav ul li').eq(2).should('contain.text', 'Bird');
    cy.get('.main-nav ul li').eq(3).should('contain.text', 'Food');


    // Click on the "Mountain" link
    cy.contains("Mountain").click();

    // Assert that the URL changes to the mountain section
    cy.url().should("include", "SnapScout/mountain");
    cy.contains("h2", "Mountain Pictures");

    // Click on the "Beaches" link
    cy.contains("Beach").click();

    // Assert that the URL changes to the beaches section
    cy.url().should("include", "SnapScout/beach");
    cy.contains("h2", "Beach Pictures");

    // Click on the "Birds" link
    cy.contains("Bird").click();

    // Assert that the URL changes to the birds section
    cy.url().should("include", "SnapScout/bird");
    cy.contains("h2", "Bird Pictures");
    

    // Click on the "Food" link
    cy.contains("Food").click();

    // Assert that the URL changes to the food section
    cy.url().should("include", "SnapScout/food");
    cy.contains("h2", "Food Pictures");
  });
});
