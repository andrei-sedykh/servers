class ForgotPasswordPage {
  getSendButton() {
    return cy.get('button[type="submit"]');
  }
  getSuccessMessage() {
    return cy.get('[data-role="alert"]');
  }
}
export default ForgotPasswordPage;
