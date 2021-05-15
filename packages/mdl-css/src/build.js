const fs = require('fs-extra')
const sass = require('sass')
const glob = require('glob')
const path = require('path')

const mdlPath = path.resolve(__dirname, '../../../')

const EXCLUDED_COMPONENTS = ['Flyout', 'Welcome', 'typography']

/** Main */
;(async () => {
  if (fs.existsSync('dist')) fs.remove('../dist')

  const typographyCss = glob.sync('styles/global.scss', { cwd: mdlPath })
  const componentCss = glob
    .sync('**/*.module.scss', { cwd: mdlPath })
    .filter((file) => !EXCLUDED_COMPONENTS.includes(file.split('/')[2]))

  await fs.copy('../../components', 'dist/components')
  await fs.copy('../../styles', 'dist/styles')
    
  glob.sync('dist/components/**/*.@(md|js|json|ts|tsx)').forEach(file => fs.removeSync(file))
  glob.sync('dist/styles/**/*.@(js|json)').forEach(file => fs.removeSync(file))
  
  await renderCssTo('dist', typographyCss, 'typography')
  await renderCssTo('dist/components', componentCss, (file) => file.split('/').splice(-2, 1))

  const allCss = glob.sync('**/*.css')

  const combinedFile = allCss.reduce((acc, file) => acc + fs.readFileSync(file).toString(), '')

  fs.ensureDir('dist').then(() => fs.writeFile('dist/mdl.css', combinedFile))
})()

/**
 * @param {string} dir Destination relative to the package root.
 * @param {string[]} files File paths.
 * @param {string|function} filenameFn String or callback that has the glob's file as the only arg.
 * @returns
 */
function renderCssTo(dir = '', files, filenameFn = 'style') {
  return Promise.all(
    files.map(
      async (file) =>
        new Promise((resolve) => {
          sass.render(
            { file: path.resolve(mdlPath, file), includePaths: [mdlPath] },
            (err, result) => {
              if (err) console.error(`Could not process ${err.file}: ${err.message}`)

              const css = result && result.css && result.css.toString()

              if (css) {
                const filename = typeof filenameFn === 'string' ? filenameFn : filenameFn(file)
                const filePath = `${dir}/${filename}.css`

                fs.ensureDir(dir).then(() =>
                  fs
                    .writeFile(filePath, css.replace(/(\/\* (.*) \*\/)/g, ''))
                    .then(() => {
                      console.log(`${filePath} was created.`)
                      resolve()
                    })
                    .catch((err) => console.error(err)))
              }
            },
          )
        }),
    ),
  )
}
