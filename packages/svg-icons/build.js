const fs = require('fs')

const svgFiles = fs
  .readdirSync('./../../vendor/micons/svg/SVG')
  .filter(file => file.match(/\.svg$/))

try {
  fs.mkdirSync('./src/svg')
} catch (e) {
  // ...
}

const exportStatements = svgFiles
  .map(iconFilename => {
    const hyphenatedName = iconFilename.slice(0, -4)
    const camelcaseName = hyphenatedName.replace(/-([a-z0-9])/g, g => (g.match(/[a-z]/) ? g[1].toUpperCase() : g[1]))
    const exportName = `${camelcaseName[0].toUpperCase()}${camelcaseName.slice(1)}`

    const inlineSvgExport = `export { default as m${exportName} } from './../../../vendor/micons/svg/SVG/${hyphenatedName}.svg'`
    const craExport = `export { default as M${exportName} } from './../../../vendor/micons/svg/SVG/${hyphenatedName}.svg'`

    return [inlineSvgExport, craExport].join('\n')
  })
  .join('\n')

fs.writeFileSync('src/index.js', exportStatements)
