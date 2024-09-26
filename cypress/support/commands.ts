/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add('goToSalesDashboardAndWaitUntilRendered', () => {
  cy.intercept('GET', '/_next/static/development/_devMiddlewareManifest.json').as('devMiddleware');
  cy.intercept('GET', '/locales/en.json').as('locale');
  const chartRenderEvents: string[] = [];
  cy.visit('/').then(() => {
    cy.wait(['@devMiddleware', '@locale']);
    cy.window().then((win) => {
      const originalLog = win.console.log;
      // Override console.log to capture the chart rendered events
      cy.stub(win.console, 'log').callsFake(function (message: string) {
        originalLog.apply(win.console, arguments); // Retain original log behavior
        if (message.includes('Chart mounted event triggered')) chartRenderEvents.push(message);
      });
    });
  });
  cy.waitUntil(() => chartRenderEvents.length === 8, {
    timeout: 10000,
    interval: 500,
  });
  cy.get('.apexcharts-canvas svg g')
    .should('exist')
    .and('be.visible')
    .find('.apexcharts-series-markers-wrap')
    .should('exist')
    .and('be.visible');
  cy.get('html, body').invoke('attr', 'style', 'height: auto; scroll-behavior: auto;');
});

Cypress.Commands.add('waitUntilWindowResizes', () => {
  cy.window().then((win) => {
    return new Cypress.Promise((resolve) => {
      const onResize = () => {
        win.removeEventListener('resize', onResize); // Remove the listener after the resize is done
        resolve();
      };
      win.addEventListener('resize', onResize);
    });
  });
});

Cypress.Commands.add('expectToBeInViewport', { prevSubject: 'element' }, (subject: JQuery<HTMLElement>) => {
  const rect = subject[0].getBoundingClientRect();
  const viewportHeight = Cypress.config('viewportHeight');
  const viewportWidth = Cypress.config('viewportWidth');
  expect(rect.top).to.be.at.least(0);
  expect(rect.left).to.be.at.least(0);
  expect(rect.bottom).to.be.lessThan(viewportHeight);
  expect(rect.right).to.be.lessThan(viewportWidth);
  return cy.wrap(subject);
});

declare global {
  namespace Cypress {
    interface Chainable {
      goToSalesDashboardAndWaitUntilRendered(): Chainable<Element>;
      waitUntilWindowResizes(): Chainable<Element>;
      expectToBeInViewport(): Chainable<JQuery<HTMLElement>>;
      // login(email: string, password: string): Chainable<void>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}
