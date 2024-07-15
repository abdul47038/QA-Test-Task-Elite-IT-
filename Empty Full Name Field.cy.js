/// <reference types="cypress" />
describe('Form Submission', () => {
  it('NS-001: Empty Full Name Field', () => {
    cy.visit('https://abdul47038.github.io/QA-Test-Task-Elite-IT-/');

    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');

    cy.get('button[type="submit"]').click();

    // Assert that the error message is displayed
    cy.contains('Full Name is required').should('be.visible');
  });
});
