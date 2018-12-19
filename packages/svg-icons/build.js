const fs = require("fs");

const svgFiles = fs
  .readdirSync("./../../vendor/micons/svg/SVG")
  .filter(file => file.match(/\.svg$/));

const exportStatements = svgFiles
  .map(icon => {
    const camelcaseName = icon
      .slice(0, -4)
      .replace(/-([a-z0-9])/g, g =>
        g.match(/[a-z]/) ? g[1].toUpperCase() : g[1]
      );
    const exportName = `m${camelcaseName[0].toUpperCase()}${camelcaseName.slice(
      1
    )}`;
    return `export { default as ${exportName} } from "./../../../vendor/micons/svg/SVG/${icon}"`;
  })
  .join("\n");

fs.writeFileSync("src/index.js", exportStatements);
