import DashboardPage from '../support/pages/dashboardPage.js';
import {
  email,
  pass
} from '../fixtures/fixture.json';

describe('Logout spec', function() {
  const dashboardPage = new DashboardPage();

  beforeEach(function() {
    cy.login(email, pass);
    cy.visit('/dashboard');
    cy.clickOutside();
  });
  
  it('Should login successfully with valid credentials', function() {
    dashboardPage.getUserSelect(email).click( {force: true} );

    cy.intercept('DELETE', '/auth/logout').as('logout');
    dashboardPage.getLogoutButton().click();
    cy.wait('@logout').its('response.statusCode').should('eq', 200);
    cy.url().should('contain', '/login');
  })

})
