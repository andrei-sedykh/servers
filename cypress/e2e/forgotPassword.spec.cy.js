import LoginPage from '../support/pages/loginPage.js';
import ForgotPasswordPage from '../support/pages/forgotPasswordPage.js';
import {
  invalidEmail,
  fakeEmail,
  forgotPasswordSentMessage
} from '../fixtures/fixture.json';

describe('Forgot password spec', function() {
  const loginPage = new LoginPage();
  const forgotPasswordPage = new ForgotPasswordPage();

  beforeEach(function() {
    cy.visit('/');
    loginPage.getForgotPasswordButton().click( {force: true}  );
  });
  
  it('Should send link to the valid email and show success message', function() {
    loginPage.getEmail().clear().type(fakeEmail);
    forgotPasswordPage.getSendButton().click();
    forgotPasswordPage.getSuccessMessage().text().should('eql', forgotPasswordSentMessage);
  })

  it('Should show alert when email is empty', function() {
    loginPage.getEmail().clear();
    forgotPasswordPage.getSendButton().click();
    loginPage.getEmailAlert().text().should('eql', 'This field is required');
  })

  it('Should show alert when email is invalid', function() {
    loginPage.getEmail().clear().type(invalidEmail);
    forgotPasswordPage.getSendButton().click();
    loginPage.getEmailAlert().text().should('eql', 'Invalid email address');
  })

})
