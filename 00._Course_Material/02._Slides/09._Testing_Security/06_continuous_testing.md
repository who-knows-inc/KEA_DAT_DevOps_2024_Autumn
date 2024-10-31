
<div class="title-card">
    <h1>Continuous Testing</h1>
</div>

---

# What type of tests fit into CI/CD?

*Can you think of tests to run during*:

- Continuous Integration (CI)

- Continuous Delivery (CD) (During the staging phase)

- Continuous Deployment (CD) (Production)

---

# Test View

**Continuous Integration (CI):**
- Unit-level tests
- Linting

**Continuous Delivery (CD) (Staging phase):**
- System-level tests
- Integration tests
- Smoke tests

**Continuous Development (CD):**
- Production tests
- Monitoring

Result is: **Continuous Testing**

---

# Let me start with a sincere apology

We should've started with tests in week 2 or 3. 

At that time there were so many topics and tasks and I had to neglect testing. 

This often happens in companies too. 

Today we try remedy this and moving forward we strive for test-driven development (TDD). 

You are not expected to write all the types of tests mentioned in the previous slide because there isn't enough time. This mirrors the real world. 

---

# Shift left vs. Shift right

<img src="./assets_testing/shift_left_vs._shift_right.png" alt="shift left vs. shift right">

[Source](https://www.dynatrace.com/news/blog/what-is-shift-left-and-what-is-shift-right/)

I **highly** recommend reading the source article.

---

# History - Manual testing

**Developer testing**:

The Developer themselves print out and verify that it works to the best of their ability. 

**UI testing**: 

Sending it to a sales or QA team to click around, type things and verify that everything still works. Sometimes this was done during their 

**Exploratory testing**: 

No predefined test cases. The tester learns about the system as they go along. 

---

# Testing and DevOps

**DevOps goal**: get immediate and reliable feedback. 

Solution: **automated testing**. 

**DevOps goal**: Catch errors early. 

Solution: **run automated tests in parallel**.

> If all the tests were run sequentially, Sussman states that “the 7,000 trunk tests would take about half an hour to execute. So we split these tests up into subsets, and distribute those onto the 10 machines in our Jenkins [CI] cluster... Spliting up our test suite and running many tests in parallel, gives us the desired 11 minute runtime.

\- Noah Sussman, Test architect at Etsy

---

# Quality gate

It is not enough to test. 

Tests must act like a **quality gate**. If they do not pass, then stop delivery and deployment. 

Worst case scenario (happens too often): 

1. someone checks in code that breaks the test and it isn't rolledback or fixed immediately

2. more people check in code

3. tests are broken, never fixed and then just ignored

---

# Great quote regarding fixing things at Google

> **We prioritize the team goals over individual goals — whenever we help someone move their work forward, we help the entire team. This applies whether we’re helping someone fix the build or an automated test, or even performing a code review for them**. And of course, we know that they’ll do the same for us, when we need help. This system worked without a lot of formality or policy—everyone knew that **our job was not just “write code,” but it  was to “run a service.”**  This is why we prioritized all quality issues, especially those related to reliability and scaling, at the highest level, treating them as Priority 0 “show-stopper” problems. From a systems perspective, these practices keep us from slipping backwards.

\- Randy Shoup, former engineering director for Google App Engine

---

# Test big and small

> The simplest test is defined by:

> * A single behavior you are testing, usually a method or API that you are calling

> * A specific input, some value that you pass to the API

> * An observable output or behavior

> * A controlled environment such as a single isolated process

\- [T. Winters et al. Software Engineering at Google](https://research.google/pubs/software-engineering-at-google/)

---

# How to test

Positive / Negative tests

Boundary tests: Upper bound, lower bound, edge cases

Special characters: especially in Denmark where we have letters like æ, ø, å.

---

# Happy paths vs sad paths

https://en.wikipedia.org/wiki/Happy_path

Remember to test for both.

Security testing, for example, is often about testing the sad paths.

---

<div class="title-card">
    <h1>Types of testing</h1>
</div>

---

# The Test Pyramid

<img src="./assets_testing/test_pyramid.png" alt="test pyramid" style="height: 50vh;">

[Source: Twillio](https://www.twilio.com/en-us/blog/unit-integration-end-to-end-testing-difference)

---

# Unit testing

*Have you written unit tests for any of your classes?*

*What frameworks have you used?*

---

# Unit testing example: Whoknows Variations

https://github.com/who-knows-inc/whoknows_variations/blob/main/src/backend/app_tests.py

---

# Integration tests

<img src="https://twilio-cms-prod.s3.amazonaws.com/images/MyR86UeunZJcErQJmlEoEwWpAt56uIH2k2mHFqfsA95S2R.width-500_NbXJ1BV.png" style="height: 30vh;">

> In contrast to unit tests, integration tests:
>
> * Use the actual components that the app uses in production.
> * Require more code and data processing.
> * Takes longer to run.


[Source: Aspnet Core](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-6.0)

---

# End-to-end testing

We will do it hands-on with Playwright in a bit. 

For now know that there are multiple tools for end-to-end testing such as: 

* Sellenium

* Cypresss

* Capybara 

* Pupeteer

* Playwright


---

# Test coverage

[Istanbul](https://istanbul.js.org/), Jest, etc.

---

# Performance testing / Load testing

[JMeter](https://jmeter.apache.org/)

[Gatling](https://gatling.io/)

---

# A/B testing

First example of a *shift-right* test so far. 

How to approach A/B testing (based on a real-life case from to The DevOps Handbook):

* **We believe** increasing the size of hotel images on the booking page

* **Will result** in improved customer engagement and conversion

* **We will have confidence to proceed when** we see a 5% increase in customers who review hotel images who then proceed to book in forty-eight hours.​


---


<div class="title-card">
    <h1>Hands-on with Playwright</h1>
</div>

---

# Hands-on with Playwright

Let's follow the tutorial. 

https://playwright.dev/docs/intro

Install:

```bash
$ npm init playwright@latest
```

Run tests:

```bash
$ npx playwright test
```

---

# Make it work for your project

In `playwright.config.js`:

```javascript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:8080',
  },
});
```

---

# Recording tests

```bash
$ npx playwright codegen
```

---

# Example of a search test

```javascript
const { test, expect } = require('@playwright/test');

test('can search', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    
    await page.getByPlaceholder('Search...').fill('this is a search test');
    await page.getByRole('button', { name: 'Search' }).click();
    
    expect(page.url()).toBe('http://localhost:8080/?q=this+is+a+search+test');
});
```

---

# Headed mode = browser visible

Play the text in headed mode:

```bash
$ npx playwright test --headed --project=chromium
```

Play the test in `inspector` mode:

```bash
$ PWDEBUG=1 npx playwright test --project=chromium
```

---

<div class="title-card">
    <h1>Continuous Integration for Node.js</h1>
</div>

---

# A simple Node project

Let's create a new repository for creating out first GitHub Action. 

Create a Node.js project. 

```bash 
$ npm init -y
```

Define these scripts in package.json:

```json
"scripts": { 
    "build": "echo Building...", 
    "test": "echo Running tests..." 
}
```

Test it out! 

---

# GitHub Actions for Node.js - Part I

```yaml

This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node

```yaml
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
```

---

# GitHub Actions for Node.js - Part II

```yaml
jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```



