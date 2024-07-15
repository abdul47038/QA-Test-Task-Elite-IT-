/// <reference types="cypress" />

describe('Successful Form Submission', () => {
  beforeEach(() => {
    cy.visit('https://abdul47038.github.io/QA-Test-Task-Elite-IT-/')
  });

  it('should submit the form with valid data', () => {
    cy.get('#fullName').type('Abdul Raheem');
    cy.get('#email').type('abdulraheem@example.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#dateOfBirth').type('2000-01-01');
    cy.get('#gender').select('Female');
    cy.get('#newsletter').select('yes');

    cy.get('button[type="submit"]').click();

    // Assuming the success message or redirection behavior
    cy.get('#successMessage').should('be.visible').and('contain', 'Registration successful');
  });
});
