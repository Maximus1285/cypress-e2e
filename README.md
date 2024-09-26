# cypress-e2e

Set up a Cypress E2E testing.

## 1. Install Cypress

Make sure you have yarn 4.0.0 or later installed.
Clone the repository and install dependencies:

```bash
yarn install
```

## 2. Run Cypress
Set environment `BASE_URL` to the URL of the application you want to test. e.g: `http://localhost:3000`

## 3. Run Cypress tests

```bash
yarn cy:run
```

## 4. Generate Allure Report

```bash
yarn cy:allure:generate
```

## 5. Open Allure Report

```bash
yarn cy:allure:open
```

## 6. Generate Visual Test Report

```bash
yarn cy:visual:report:generate
```

## 7. Open Visual Test Report

```bash
yarn cy:visual:report:open
```

## 8. In case you want to update the baseline screenshots for visual tests

```bash
yarn cy:visual:update-baseline
```

## Test Plan

Scope of the Test Plan: This test plan is focused on the Dashboard Sales page of the application. Which means we will be testing the following scenarios:

- Verify the Dashboard Sales page is displayed correctly.
- Verify the Dashboard Menu options navigate correctly
    - Sales
    - Analytics
    - Finance
    - Crypto
- Verify the Dashboard Sales page is responsive
    - On Desktop
    - On Tablet (iPad)
    - On Mobile (iPhone)
- Verify the Dashboard Sales Charts are displayed correctly
    - Verify the chart tooltip is displayed correctly on mouse hover
- Verify the Dashboard Sales Tiles are displayed correctly
    - Recent Orders
    - Top Selling Products
    - Recent Activities
    - Transactions
    - Balance Wallet
        - Verify the user can view details
        - Verify the user can make a payment