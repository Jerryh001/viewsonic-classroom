# Class Room

The assignment from ViewSonic

## Environment

- Node.js 22

## Scripts

### Setup

Only required if it has never been run before (Administrator permission required):

```bash
corepack enable
```

### Install

```bash
yarn
```

### Run

```bash
yarn dev
```

Check the console for the URL where the website will open (usually <http://localhost:5173/>).

## Explanation of Some Code

### The Backend

> See: `src/mockServer/*` and `src/main.tsx`

A mock server created with `msw` will be attached if it runs in Dev mode (`yarn dev`). It will only be available on the same page, and related logs will be displayed in the console and the network panel in DevTools.

### About Material-UI

The default styling engine for `Material-UI` is `emotion`, which I find more flexible than `styled-components`.

However, I replaced it with `styled-components` by overriding the resolution (see `package.json`), as per the project requirements.

One restriction I set for myself was to avoid using the `sx` prop and instead use `styled` to make the code feel more consistent with the `styled-components` format.
