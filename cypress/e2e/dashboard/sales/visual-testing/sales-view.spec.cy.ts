/// <reference types="cypress" />

import SalesDashboard from '../../../../support/pages/dashboard/sales/sales-dashbaord.page';

describe('Sales View - Visual Testing', () => {
  beforeEach(() => {
    Cypress.Screenshot.defaults({
      capture: 'fullPage',
      scale: true,
    });
  });

  it('should render according to design', () => {
    SalesDashboard.visit();
    cy.compareSnapshot({
      name: 'dashboard-sales',
      testThreshold: 0.06,
      retryOptions: {
        limit: 5,
        delay: 500,
      },
    });
  });
});
