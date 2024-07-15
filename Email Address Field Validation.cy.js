/// <reference types="cypress" />
describe('Email Address Field Validation', () => {
  it(' Email Address Field Validation', () => {
    cy.visit('https://abdul47038.github.io/QA-Test-Task-Elite-IT-/');

    cy.get('input[name="email"]').type('abdulraheem@example.com');
    cy.get('button[type="submit"]').click();

    // Assert that no error message for Email Address is displayed
    cy.get('.error-message').should('not.exist');
  });
});