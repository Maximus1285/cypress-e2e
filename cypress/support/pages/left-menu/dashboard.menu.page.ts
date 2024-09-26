/// <reference types="cypress" />

import { NAV_ITEM, NAV_LINK } from '../../constants';

export default class DashboardLeftMenuPage {
  private static readonly leftMenu = NAV_LINK;
  private static readonly leftMenuItems = NAV_ITEM;

  public static clickOnMenu(): void {
    cy.get(this.leftMenu)
      .contains('Dashboard')
      .then((el) => {
        // If element doesn't contain a class 'active', it means the dashboard menu is collapsed
        if (!el.hasClass('active')) cy.wrap(el).click();
      });
  }

  public static clickOnSalesMenu(): void {
    this.clickOnMenu();
    cy.get(this.leftMenuItems).contains('Sales').first().click();
  }

  public static clickOnFinanceMenu(): void {
    this.clickOnMenu();
    cy.get(this.leftMenuItems).contains('Finance').first().click();
  }

  public static clickOnAnalyticsMenu(): void {
    this.clickOnMenu();
    cy.get(this.leftMenuItems).contains('Analytics').first().click();
  }

  public static clickOnCryptoMenu(): void {
    this.clickOnMenu();
    cy.get(this.leftMenuItems).contains('Crypto').first().click();
  }
}
