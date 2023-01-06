class LoginPage {
  getEmail() {
    return cy.get('input[type="email"]');
  }
  getPassword() {
    return cy.get('input[type="password"]');
  }
  getSignInButton() {
    return cy.get('button[type="submit"]');
  }
  getErrorMessage() {
    return cy.get('[data-role="alert"]');
  }
  getRegistrationButton() {
    return cy.get('a[href="/registration"]');
  }
  getForgotPasswordButton() {
    return cy.get('a[href="/password/forgot"]');
  }
  getEmailAlert() {
    return cy.get('[data-theme="alert"]:first');
  }
  getPasswordAlert() {
    return cy.get('[data-theme="alert"]:last');
  }
}
export default LoginPage;
