/// <reference types="cypress" />

import DashboardLeftMenuPage from '../../../support/pages/left-menu/dashboard.menu.page';

describe('Dashboard - Left Menu - Functional tests', () => {
  beforeEach(() => cy.goToSalesDashboardAndWaitUntilRendered());

  it('should navigate to Crypto URL', () => {
    DashboardLeftMenuPage.clickOnCryptoMenu();
    cy.url().should('include', '/crypto');
    cy.get('.main-content').should('contain.text', 'Dashboard').and('contain.text', 'Crypto');
  });

  it('should navigate to Finance URL', () => {
    DashboardLeftMenuPage.clickOnFinanceMenu();
    cy.url().should('include', '/finance');
    cy.get('.main-content').should('contain.text', 'Dashboard').and('contain.text', 'Finance');
  });

  it('should navigate to Analytics URL', () => {
    DashboardLeftMenuPage.clickOnAnalyticsMenu();
    cy.url().should('include', '/analytics');
    cy.get('.main-content').should('contain.text', 'Dashboard').and('contain.text', 'Analytics');
  });

  it('should navigate to Sales URL', () => {
    DashboardLeftMenuPage.clickOnSalesMenu();
    cy.url().should('include', '/');
    cy.get('.main-content').should('contain.text', 'Dashboard').and('contain.text', 'Sales');
  });
});
