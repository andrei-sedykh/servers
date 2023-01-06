import LoginPage from '../support/pages/loginPage.js';
import {
  email,
  pass,
  invalidPass,
  shortPass,
  invalidEmail
} from '../fixtures/fixture.json';

describe('Login spec', function() {
  const loginPage = new LoginPage();

  beforeEach(function() {
    cy.visit('/');
  });
  
  it('Should login successfully with valid credentials', function() {
    loginPage.getEmail().clear().type(email);
    loginPage.getPassword().clear().type(pass);
    loginPage.getSignInButton().click( {force: true} );
    cy.get('span').contains('Dashboard').should('be.visible');
  })

  it('Should not login with valid email and invalid password', function() {
    loginPage.getEmail().clear().type(email);
    loginPage.getPassword().clear().type(invalidPass);
    loginPage.getSignInButton().click( {force: true} );
    loginPage.getErrorMessage().text().should('eql', 'Incorrect email or password');
  })

  it('Should show alerts when email&password fields are empty', function() {
    loginPage.getEmail().clear();
    loginPage.getPassword().clear();
    loginPage.getSignInButton().click( {force: true} );
    loginPage.getEmailAlert().text().should('eql', 'This field is required');
    loginPage.getPasswordAlert().text().should('eql', 'This field is required');
  })

  it('Should show alert when password < 10 chars', function() {
    loginPage.getEmail().clear().type(email);
    loginPage.getPassword().clear().type(shortPass);
    cy.clickOutside();
    loginPage.getPasswordAlert().text().should('eql', 'Please enter at least 10 characters.');
  })

  it('Should show alert when email is invalid', function() {
    loginPage.getEmail().clear().type(invalidEmail);
    cy.clickOutside();
    loginPage.getEmailAlert().text().should('eql', 'Invalid email address');
  })

})
