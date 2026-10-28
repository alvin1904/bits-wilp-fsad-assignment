const fs = require("fs");
const path = require("path");

const wasmPath = path.join(
  __dirname,
  "target",
  "wasm32-unknown-unknown",
  "release",
  "wasm_math.wasm",
);
const wasmBuffer = fs.readFileSync(wasmPath);

WebAssembly.instantiate(wasmBuffer)
  .then((wasmModule) => {
    const { add, multiply } = wasmModule.instance.exports;

    const a = 10;
    const b = 5;

    console.log(`add(${a}, ${b}) = ${add(a, b)}`);
    console.log(`multiply(${a}, ${b}) = ${multiply(a, b)}`);
  })
  .catch((err) => {
    console.error("Failed to load Wasm module:", err);
  });
