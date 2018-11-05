const fs = require("fs");
const path = require("path");

function createCssClassesFromColors() {
  const colors = getCssColors();
  fs.writeFileSync("./styles/colors.json", JSON.stringify(colors));
  console.log("Wrote colors.json");
  return true;
}

function getCssColors() {
  const file = fs.readFileSync(
    path.resolve(__dirname, "./colors.scss"),
    "utf-8"
  );
  return getArrayOfVariableObjects(file);
}

function getArrayOfVariableObjects(str) {
  const lines = str.split("\n");
  return lines
    .map(line => {
      const [name, value] = line.split(":");
      return (
        typeof value !== "undefined" && {
          name: name.slice(1),
          value: value.trim().slice(0, -1)
        }
      );
    })
    .filter(v => v);
}

module.exports.createCssClassesFromColors = createCssClassesFromColors;
