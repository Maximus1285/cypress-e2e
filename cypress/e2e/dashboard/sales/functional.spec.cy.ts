/// <reference types="cypress" />

import SalesDashboard from '../../../support/pages/dashboard/sales/sales-dashbaord.page';

describe('Dashboard Sales - Functional test on desktop and mobile screens', () => {
  const locator = '.apexcharts-canvas';
  beforeEach(() => {
    SalesDashboard.visit();
  });

  it('should display tooltip on mouse-hover for Revenue chart', () => {
    cy.wait(1000);
    SalesDashboard.getRevenueChart()
      .find(locator)
      .then((element) => {
        cy.wrap(element).realHover();
        cy.wrap(element).get(SalesDashboard.chartTooltip).should('be.visible');
      });
  });

  it('should display tooltip on mouse-hover for Sales By Category chart', () => {
    cy.wait(1000);
    SalesDashboard.getSalesByCategoryChart()
      .find(locator)
      .first()
      .then((element) => {
        cy.wrap(element).realHover();
        cy.wrap(element).get(SalesDashboard.chartTooltip).should('be.visible');
      });
  });

  it('should display tooltip on mouse-hover for Daily Sales chart', () => {
    cy.wait(1000);
    SalesDashboard.getDailySalesChart()
      .get(locator)
      .first()
      .then((element) => {
        cy.wrap(element).realHover();
        cy.wrap(element).get(SalesDashboard.chartTooltip).should('be.visible');
      });
  });
});
