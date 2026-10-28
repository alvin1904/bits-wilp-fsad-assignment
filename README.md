# FSAD SEZG503 Assignment BITS-WILP Division

| Tool / Environment | Recommended Version | Release Context |
|---|---|---|
| **Rust (`rustc`)** | **1.99.1** | The latest stable release as of mid-October 2026. |
| **Cargo** | **1.99.1** | Bundled automatically with Rust 1.99.1. |
| **Node.js** | **v26.x** or **v24.22.x** | Node 26 transitions to Active LTS on October 28, 2026. Node 24.22.0 remains a highly stable, Active LTS option. |
| **npm** | **12.2.1** or newer | Bundled automatically with the latest Node.js 24.22 LTS releases. |
| **WebAssembly Target** | `wasm32-unknown-unknown` | This is a target architecture rather than a standalone tool, so its capabilities strictly align with your installed Rust version. |

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

## Question 3: Microfrontends using Webpack module federation

It demonstrates a Microfrontend architecture built with Webpack 5 Module Federation. The project is split into three independent applications:

- **Shell**: The host container running on port 3000.
- **FSAD**: A remote microapp running on port 4001.
- **ApiProducts**: A remote microapp running on port 4000.

## How to Run

Because this architecture relies on independent micro-applications, you need to start the development server for all three projects.

1. **Start the FSAD Remote**
   Open a terminal, navigate to the `FSAD` folder:

   ```bash
   npm install
   npm run dev
   ```

2. **Start the ApiProducts Remote**
   Open a second terminal, navigate to the `ApiProducts` folder:

   ```bash
   npm install
   npm run dev
   ```

3. **Start the Shell (Host)**
   Open a third terminal, navigate to the `Shell` folder:
   ```bash
   npm install
   npm run dev
   ```

Once all three servers are running, open your browser and navigate to **http://localhost:3000**. The Shell application will dynamically fetch and render the components from the remote servers.

## Question 4: WebAssembly (WASM) with Rust and Node.js

It demonstrates how to write basic math functions in Rust, compile them to WebAssembly (WASM), and execute them in a Node.js environment.

## Prerequisites

If you do not have Rust installed on your system, you will need to install it first. Run the following command in your terminal:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

_(Note: Follow the on-screen prompts to complete the installation, and restart your terminal if necessary)._

## How to Build and Run

1. **Add the WASM Target**
   First, you need to tell the Rust compiler how to build for WebAssembly. Run:

   ```bash
   rustup target add wasm32-unknown-unknown
   ```

2. **Compile the Rust Code**
   Build the Rust project in release mode, targeting the WASM architecture:

   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```

   _This will generate the `wasm_math_assignment.wasm` file inside the `target/wasm32-unknown-unknown/release/` directory._

3. **Run the Node.js Script**
   Execute the JavaScript file that loads and runs the compiled WebAssembly module:
   ```bash
   npm start
   ```
   _(This runs `node run.js` under the hood)._

## Expected Output

When you run the Node script, it will load the `.wasm` file, instantiate it, and call the Rust `add` and `multiply` functions with the values 10 and 5. You should see the following output in your terminal:

```
add(10, 5) = 15
multiply(10, 5) = 50
```
