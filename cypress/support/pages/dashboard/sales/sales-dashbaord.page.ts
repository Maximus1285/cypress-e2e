/// <reference types="cypress" />

export default class SalesDashboard {
  private static readonly tiles = '.panel';
  public static readonly chartTooltip = '.apexcharts-tooltip';

  public static visit(): void {
    cy.goToSalesDashboardAndWaitUntilRendered();
  }

  public static getRevenueChart(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Revenue")').first();
  }

  public static getSalesByCategoryChart(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Sales By Category")').first();
  }

  public static getDailySalesChart(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Daily Sales")').first();
  }

  public static getSumaryTile(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Summary")').first();
  }

  public static getTotalOrdersTile(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Total Orders")').first();
  }

  public static getRecentActivitiesTiel(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Recent Activities")').first();
  }

  public static getTransactionsTile(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Transactions")').first();
  }

  public static getRecentOrdersTitle(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Recent Orders")').first();
  }

  public static getTopSellingProductTile(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Top Selling Product")').first();
  }

  public static getAlanGreenCard(): Cypress.Chainable {
    return cy.get(this.tiles).filter(':contains("Alan Green")').first();
  }
}
