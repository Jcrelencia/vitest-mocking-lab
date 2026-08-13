## Setup

https://nodejs.org/en/download 

# 1. install Vitest (reads package.json, downloads into node_modules)
```bash
npm install
```

# 2. run the test once
```bash
npm test
```

# 3. (optional) re-run automatically as you edit
```bash
npm run test:watch
```

## Layout

```
src/     project files (the code under test)
tests/   the tests
```

`@` is an alias for `src/` (set in vitest.config.js), so tests import
with `@/api.js` instead of a long relative path — the same convention a
Vue project uses.

## Examples

- `tests/api.test.js` — mock the global `fetch` so the code never hits a real API.
- `tests/price.test.js` — mock `getTaxRate` from another file (`src/rate.js`) with `vi.mock`, so `priceWithTax` can be tested on its own.

## Your turn

- `tests/greeting.test.js` — a skipped exercise. `greet()` (in `src/greeting.js`)
  calls `getName()` from `src/user.js`, which hits a real API. Remove `.skip`,
  mock `@/user.js`, and assert the greeting. The two examples above show you how.
