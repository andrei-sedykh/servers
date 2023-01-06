import {email} from '../../fixtures/fixture.json';

class DashboardPage {
  getUserSelect() {
    return cy.contains(email);
  }
  getProfileButton() {
    return cy.get('ul[role="presentation"] a[href="/profile/info"]');
  }
  getLogoutButton() {
    return cy.get('ul[role="presentation"] button');
  }
}
export default DashboardPage;
