// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-commands';
import LoginPage from '../support/pages/loginPage.js';
const loginPage = new LoginPage();

Cypress.Commands.add('login', (email, password) => {
      cy.visit('/');
      loginPage.getEmail().clear().type(email);
      loginPage.getPassword().clear().type(password);

      cy.intercept('GET', '/rest/tickets*').as('tickets');
      loginPage.getSignInButton().click( {force: true} );
      cy.wait('@tickets').its('response.statusCode').should('eq', 200);

      cy.get('span').contains('Dashboard').should('be.visible');
});

Cypress.Commands.add('clickOutside', () => {
  return cy.get('body').click(0, 0);
});
