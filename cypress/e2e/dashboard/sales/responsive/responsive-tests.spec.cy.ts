/// <reference types="cypress" />

describe('Responsive tests', () => {
  const locator = '.apexcharts-canvas';
  beforeEach(() => {
    cy.goToSalesDashboardAndWaitUntilRendered();
  });

  it('should render correctly on iPhone sized screens', () => {
    cy.viewport('iphone-6');
    cy.waitUntilWindowResizes();
    cy.get(locator).then(($elements) => {
      const totalElements = $elements.length;
      for (let i = 0; i < totalElements; i++) {
        cy.get(locator).eq(i).scrollIntoView({ timeout: 75000, duration: 1000 });
        cy.get(locator).eq(i).expectToBeInViewport();
      }
    });
  });

  it('should render correctly on iPad sized screens', () => {
    cy.viewport('ipad-2');
    cy.waitUntilWindowResizes();
    cy.get(locator).then(($elements) => {
      const totalElements = $elements.length;
      for (let i = 0; i < totalElements; i++) {
        cy.get(locator).eq(i).scrollIntoView({ timeout: 75000, duration: 1000 });
        cy.get(locator).eq(i).expectToBeInViewport();
      }
    });
  });

  it('should render correctly on Desktop sized screens', () => {
    cy.viewport('macbook-15');
    cy.waitUntilWindowResizes();
    cy.get(locator).then(($elements) => {
      const totalElements = $elements.length;
      for (let i = 0; i < totalElements; i++) {
        cy.get(locator).eq(i).scrollIntoView({ timeout: 75000, duration: 1000 });
        cy.get(locator).eq(i).expectToBeInViewport();
      }
    });
  });
});
