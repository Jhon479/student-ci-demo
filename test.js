const fs = require("fs");
const path = require("path");
const assert = require("assert");

const distFolder = path.join(__dirname, "dist");
const requiredFiles = ["index.html", "style.css", "script.js"];

requiredFiles.forEach((file) => {
  const filePath = path.join(distFolder, file);
  assert.ok(fs.existsSync(filePath), "Missing required file: " + file);
  console.log("PASS: " + file + " exists");
});

const html = fs.readFileSync(path.join(distFolder, "index.html"), "utf8");
assert.ok(html.includes("Welcome to GitHub Actions"), "Required heading not found");

console.log("PASS: Required heading found");
console.log("All verification tests passed!");
