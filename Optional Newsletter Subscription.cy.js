/// <reference types="cypress" />
describe('Form Submission', () => {
  it('PS-002: Optional Newsletter Subscription', () => {
    cy.visit('https://abdul47038.github.io/QA-Test-Task-Elite-IT-/');

    cy.get('input[name="fullName"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    
    cy.get('input[name="newsletter"]').check('no'); // Assuming it's a radio button with values 'yes' and 'no'

    cy.get('button[type="submit"]').click();

    // Assert that a confirmation message is displayed
    cy.contains('Form submitted successfully').should('be.visible');
    // Or assert that the user is redirected to the confirmation page
    cy.url().should('include', '/confirmation-page');
  });
});
