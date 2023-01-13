
class NewContactPage {
  getFirstNameField() {
    return cy.get('input#fname');
  }
  getLastNameField() {
    return cy.get('input#lname');
  }
  getMiddleNameField() {
    return cy.get('input[id="tokens.middlename"]');
  }
  getEmailField() {
    return cy.get('input#email');
  }
  getSecondaryEmailField() {
    return cy.get('input#email2');
  }
  getPhoneNumberField() {
    return cy.get('input#phone_number');
  }
  selectJobRole(role) {
    return cy.get('label').contains(role).click();
  }
  getCompanyField() {
    return cy.get('input[id="tokens.company"]');
  }
  getJobTitleField() {
    return cy.get('input[id="tokens.title"]');
  }
  getJobRoleField() {
    return cy.get('input[id="tokens.role"]');
  }
  getNicknameField() {
    return cy.get('input#nickname');
  }
  getCommentsField() {
    return cy.get('textarea[id="tokens.note"]');
  }
  getAddContactDetailsButton() {
    return cy.get('[title="Add more details"]');
  }
  getDeleteContactDetailsButton(contactDetailsSelector) {
    return cy.get(contactDetailsSelector).find('[title="Delete"]');
  }
  getContactDetailsType() {
    return cy.get('.select__input');
  }
  getContactDetailsField(contactDetailsCount) {
    return cy.get('[id="contacts['+contactDetailsCount+'].value"]');
  }
  getCreateContactButton() {
    return cy.get('[title="Create"]');
  }
  getCancelCreationButton() {
    return cy.get('[title="Cancel"]');
  }
}
export default NewContactPage;
