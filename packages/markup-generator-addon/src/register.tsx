import React from 'react'
import { addons, types } from '@storybook/addons'
import { Story } from '@storybook/api'
import { AddonPanel } from '@storybook/components'
import styles from './css'
import Counter from '../../../components/Counter/react'

const ADDON_ID = 'HTML'
const PANEL_ID = `${ADDON_ID}/panel`

const getPreviewDocument = () =>
  (document.querySelector('#storybook-preview-iframe') as HTMLIFrameElement)
    ?.contentWindow!.document

const getHtml = (styleObject = {}) => {
  console.log(
    styleObject.locals,
    getPreviewDocument()?.querySelector('#root')?.innerHTML || ''
  )

  return Object.entries(styleObject.locals).reduce(
    (html: string, [className, moduleClassName]: [string, any]) =>
      html.replaceAll(moduleClassName, className),
    `${getPreviewDocument()?.querySelector('#root')?.innerHTML || ''}`
  )
}

const getCss = (styleObject = {}) => {
  const [[path, css]] = styleObject

  return Object.entries(styleObject.locals).reduce(
    (acc: string, [className, hash]: [string, string]) =>
      acc.replaceAll(hash, className),
    css
  )
}

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'HTML/CSS',
    render: ({ active = false, key }) => {
      const componentName = (api.getCurrentStoryData() as Story)?.kind
      const styleObject: { [name: string]: any } = styles.default[componentName]

      if (!styleObject) return false

      const html = getHtml(styleObject)
      const css = getCss(styleObject)

      return (
        <AddonPanel active={active} key={key}>
          <div className="flex">
            <pre className="w-1/2">
              <Counter value={4} />
              <code>{html}</code>
            </pre>
            <pre className="w-1/2">
              <code>{css}</code>
            </pre>
          </div>
        </AddonPanel>
      )
    },
  })
})
