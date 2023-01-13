
class ContactInfoPage {
  getEditContactButton() {
    return cy.get('button[title="Edit"]');
  }
  getRefreshContactsButton() {
    return cy.get('button[title="Refresh"]');
  }
}
export default ContactInfoPage;
