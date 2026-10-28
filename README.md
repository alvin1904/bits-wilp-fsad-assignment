# FSAD SEZG503 Assignment BITS-WILP Division

### Question 1: React ToDo App with Local Storage

It is a React-based ToDo application that persists user tasks using the browser's localStorage API, ensuring data isn't lost when the page is refreshed.

How to Run

- Install dependencies: `npm install`

- Start the development server: `npm run dev`

- ⚠️ Troubleshooting: NPM Install Error (Vite Bug)

    If you are setting this project up from scratch using the Vite React-TS template, you might run into a peer dependency conflict when running npm install.

    You might see an error that looks like this:

    ```
    npm warn ERESOLVE overriding peer dependency
    npm warn While resolving: @typescript-eslint/eslint-plugin@8.72.1
    npm warn Found: typescript@7.0.2
    npm warn node_modules/typescript
    npm warn   dev typescript@"~7.0.2" from the root project
    npm warn   1 more (ts-api-utils)
    npm warn
    npm warn Could not resolve dependency:
    npm warn peer typescript@">=4.8.4 <6.1.0" from @typescript-eslint/eslint-plugin@8.72.1
    npm warn node_modules/@typescript-eslint/eslint-plugin
    npm warn   @typescript-eslint/eslint-plugin@"8.72.1" from typescript-eslint@8.72.1
    npm warn   node_modules/typescript-eslint
    ```

    The Fix

    This is a known bug with the Vite template shipping with mismatched ESLint and TypeScript versions.

    To fix this, append --legacy-peer-deps to your install command. Please use the following command instead of the standard install:

    ```
    npm install --legacy-peer-deps
    ```

---

### Question 2: React Color Palette App

# Question 2: Color Palette Manager

It is a React application that allows users to dynamically add, remove, and select colors. The application state and logic are cleanly organized using a custom `useColorPalette` hook and shared across components using the React Context API.

## How to Run

1. Open your terminal and navigate to this project directory.

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided in the terminal usually `http://localhost:5173` to view the application.

---

### Question 3: Microfrontends using Webpack module federation