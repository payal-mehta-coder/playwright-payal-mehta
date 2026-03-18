## Overview
This project demonstrates best practices that can be used for Playwright test suites.

## Project Structure

```
playwright-payal-mehta
│
├─ pages
│   ├─ BasePage.ts
│   └─ LoginPage.ts
│
├─ tests
│   └─ login.spec.ts
│
├─ playwright.config.ts
├─ .env
├─ package.json
└─ README.md
```

## Setup Instructions

### Install dependencies
```
npm install
```

### Install Playwright browsers
```
npx playwright install
```

### Environment Variables

Create a `.env` file in the project root:

```env
BASE_URL=https://the-internet.herokuapp.com
USERNAME=tomsmith
PASSWORD=SuperSecretPassword!
```

### Run tests in headless mode
```
npx playwright test
```

### Run tests in headed mode
```
npx playwright test --headed
```

### Open the test report
```
npx playwright show-report
```
