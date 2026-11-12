const fs = require("fs");
const path = require("path");

const outputFolder = path.join(__dirname, "dist");
fs.mkdirSync(outputFolder, { recursive: true });

const files = ["index.html", "style.css", "script.js"];

files.forEach((file) => {
  const source = path.join(__dirname, file);
  const destination = path.join(outputFolder, file);
  fs.copyFileSync(source, destination);
  console.log("Copied: " + file);
});

console.log("Build completed successfully!");
