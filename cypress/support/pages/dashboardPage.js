
class DashboardPage {
  getUserSelect(email) {
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
