// cypress/integration/style.spec.js

describe("SnapShot App Styling", () => {
   Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  

  it("has a centered body text with correct font-family and color", () => {
  cy.visit("/");
    cy.get("body").should("have.css", "text-align", "center");
    cy.get("body").should("have.css", "font-family", '"Josefin Sans", Helvetica, Arial, sans-serif');
    cy.get("body").should("have.css", "color", "rgb(63, 72, 80)");
  });

  it("styles h1 correctly with Lobster font, font-size, and color", () => {
  cy.visit("/");
    cy.get("h1").should("have.css", "font-family", 'Lobster, "Josefin Sans", Helvetica, Arial, sans-serif');
    cy.get("h1").should("have.css", "font-size", "64px");
    cy.get("h1").should("have.css", "color", "rgb(5, 28, 51)");
  });

  it("styles h2 correctly with text-transform, font-size, and color", () => {
  cy.visit("/");
    cy.get("h2").should("have.css", "text-transform", "capitalize");
    cy.get("h2").should("have.css", "font-size", "32px");
    cy.get("h2").should("have.css", "color", "rgb(5, 28, 51)");
  });

  it("applies correct styles to ul and a elements", () => {
  cy.visit("/");
    cy.get("ul").should("have.css", "list-style-type", "none");
    cy.get("a").should("have.css", "text-decoration", "none solid rgb(255, 255, 255)");
  });

  it("applies styles to .search-form and input/button elements", () => {
  cy.visit("/");
    cy.get(".search-form").should("have.css", "max-width", "460px");
    cy.get("input").should("have.css", "font-size", "16px");
    cy.get("input").should("have.css", "width", "389px");
    cy.get("button").should("have.css", "background-color", "rgb(5, 27, 51)");
  });

  it("applies styles to .main-nav and its elements", () => {
  cy.visit("/");
    cy.get(".main-nav li").should("have.css", "width", "100px");
    cy.get(".main-nav a").should("have.css", "background", "rgb(5, 28, 51) none repeat scroll 0% 0% / auto padding-box border-box");
  });

  it("applies styles to .photo-container and its elements", () => {
  cy.visit("/");
    cy.get(".photo-container ul").should("have.css", "display", "flex");
    cy.get(".photo-container ul li").should("have.css", "width", "220px");
    cy.get(".photo-container ul img").should("have.css", "width", "275px");
  });

  it("applies media queries correctly for screen width < 767px", () => {
  cy.visit("/");
    cy.viewport(500, 700);
    cy.get("body").should("have.css", "padding-top", "32px");
    cy.get(".photo-container li").should("have.css", "margin", "0px 7.25px 15px");
  });

  it("applies media queries correctly for screen width >= 768px", () => {
  cy.visit("/");
    cy.viewport(800, 700);
    cy.get("body").should("have.css", "padding-top", "64px");
    cy.get(".container").should("have.css", "max-width", "960px");
    cy.get(".main-nav ul").should("have.css", "display", "flex");
    cy.get(".main-nav li").should("have.css", "margin", "10px");
  });
});
