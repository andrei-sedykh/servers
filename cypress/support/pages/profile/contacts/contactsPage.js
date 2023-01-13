
class ContactsPage {
  getCreateContactButton() {
    return cy.get('a[title="Create"]');
  }
  getDeleteContactButton(contactSelector) {
    return cy.get(contactSelector).find('td:last-child');
  }
  getEditContactButton(contactSelector) {
    return cy.get(contactSelector).find('[data-label="Name"]');
  }
}
export default ContactsPage;
