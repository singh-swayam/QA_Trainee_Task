# QA Trainee Task 

Structured QA training repository.

---

## Trainee Info

| Field | Details |
|---|---|
| **Name** | Swayam Singh |
| **Role** | QA |
| **Tool** | Playwright + TypeScript |
| **App Under Test** | [SauceDemo](https://www.saucedemo.com/) |

---

## Repository Structure

```
QA_Trainee_Task/
├── Day-1/
│   ├── test-results/
│   ├── output screenshots/
│   ├── test-data/
│   │   └── users.ts
│   ├── tests/
│   │   └── login.spec.ts
│   │   └── example.spec.ts
│   ├── Manual Test cases for SauceDemo.xlsx
│   ├── playwright.config.ts
│   └── package.json
│   ├── package-lock.json
└── README.md
```

---

## Day 1 — Manual Testing + Playwright Setup + Login Automation

### Tasks Completed

- Manual test scenario identification for SauceDemo
- Playwright project setup with TypeScript
- Automated 4 login test cases

---

### Manual Test Scenarios

Documented in `Day-1/Manual Test cases for SauceDemo.xlsx`.

Covers the following modules:
- Login (positive, negative, edge cases)
- Product listing & sorting
- Cart management
- Checkout flow
- Session & navigation

---

### Setup — Day 1

**Prerequisites**
- Node.js v18 or above
- npm

**Install dependencies**
```bash
cd Day 1
npm init playwright@latest
```

---

### Running Tests — Day 1

**Run all tests**
```bash
npx playwright test
```

**Run only login tests**
```bash
npx playwright test tests/login.spec.ts
```

**Run tests in headed mode (see browser)**
```bash
npx playwright test --headed
```

**View HTML report**
```bash
npx playwright show-report
```

---

### Test Cases Automated — Day 1

| TC ID | Test Name | Type | Status |
|---|---|---|---|
| TC_001 | Login page should load | Smoke | Pass |
| TC_002 | Valid user should be able to login | Smoke | Pass |
| TC_003 | Invalid password should show error | Negative | Pass |
| TC_004 | Locked user should not be able to login | Negative | Pass |

---

### Test Data

All credentials are managed in `Day-1/test-data/users.ts`.

| Username | Type | Notes |
|---|---|---|
| `standard_user` | standard | Default user, full access |
| `locked_out_user` | locked | Cannot login |
| `problem_user` | problem | Broken UI elements |
| `performance_glitch_user` | performance_glitch | Simulates slow network |
| `error_user` | error | Triggers errors on interactions |
| `visual_user` | visual | Used for visual regression |

> Password for all users: `secret_sauce`

---

## Day 2 — Coming Soon

---

## Day 3 — Coming Soon

---

## 🔗 Links

- **App Under Test:** https://www.saucedemo.com/
- **Repository:** https://github.com/singh-swayam/QA_Trainee_Task
