## Overview
This project was developed as part of the Origami QA take-home assessment and demonstrates a Playwright-based test suite for validating login functionality.

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