import ContactsPage from '../support/pages/profile/contacts/contactsPage';
import NewContactPage from '../support/pages/profile/contacts/newContactPage';
import ContactInfoPage from '../support/pages/profile/contacts/contactInfoPage';
import {
  email,
  pass,
  testContact
} from '../fixtures/fixture.json';

describe('Logout spec', function() {
  const contactsPage = new ContactsPage();
  const newContactPage = new NewContactPage();
  const contactInfoPage = new ContactInfoPage();

  beforeEach(function() {
    cy.login(email, pass);
    cy.visit('/profile/contacts');
  });
  
  it('Should add new contact', function() {
    contactsPage.getCreateContactButton().click();
    newContactPage.getFirstNameField().type(testContact.firstName);
    newContactPage.getLastNameField().type(testContact.lastName);
    newContactPage.getMiddleNameField().type(testContact.middleName);
    newContactPage.getEmailField().type(testContact.email);
    newContactPage.getSecondaryEmailField().type(testContact.secondaryEmail);
    newContactPage.getPhoneNumberField().type(testContact.phoneNumber);
    newContactPage.selectJobRole(testContact.role);
    newContactPage.getCompanyField().type(testContact.company);
    newContactPage.getJobTitleField().type(testContact.jobTitle);
    newContactPage.getJobRoleField().type(testContact.jobRole);
    newContactPage.getNicknameField().type(testContact.nickname);
    newContactPage.getCommentsField().scrollIntoView().type(testContact.comments, {force: true});
    newContactPage.getAddContactDetailsButton().click({force: true});
    newContactPage.getContactDetailsType().click({force: true});
    cy.contains(testContact.contactDetails.type, {force: true}).click({force: true});
    newContactPage.getContactDetailsField(0).type(testContact.contactDetails.value, {force: true});

    newContactPage.getCreateContactButton().click({force: true});

    contactInfoPage.getEditContactButton().should('be.visible');
    cy.contains(testContact.firstName);
  })

  it('Should edit a contact', function() {
    const newName = "new name";
    contactsPage.getEditContactButton('tbody>tr:last-child').contains(testContact.firstName).click();
    contactInfoPage.getEditContactButton().click();
    newContactPage.getFirstNameField().clear().type(newName);

    newContactPage.getCreateContactButton().click({force: true});

    contactInfoPage.getEditContactButton().should('be.visible');
    cy.contains(newName);
  })

  it('Should delete a contact', function() {
    contactsPage.getDeleteContactButton('tr:last-child').click();
    cy.get('strong').contains(testContact.lastName);
    cy.get('form button[title="Delete"]').click();
    // verify that only default contact exists with role = Primary
    cy.get('[data-label="Role"]:last').text().should('eql', 'Primary');
  })

})
