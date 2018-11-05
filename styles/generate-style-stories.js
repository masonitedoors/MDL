const fs = require("fs");
const path = require("path");

function createCssClassesFromColors() {
  const colors = getCssColors();
  const newFile = colors
    .map(({ name, value }) => {
      return `.${name} { background-color: ${value}; }`;
    })
    .join("");
  fs.writeFileSync("./styles/colors.json", JSON.stringify(colors));
  console.log(colors);
  console.log("Wrote $colors colors.json");
  fs.writeFileSync("./styles/colors.css", newFile);
  console.log(newFile);
  console.log("Wrote to colors.css");
  return false;
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

module.exports.getCssColors = getCssColors;
module.exports.createCssClassesFromColors = createCssClassesFromColors;
