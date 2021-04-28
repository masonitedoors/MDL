import React, { useEffect, useState } from 'react'
import { addons, types } from '@storybook/addons'
import { Story } from '@storybook/api'
import { AddonPanel } from '@storybook/components'
import * as styles from './styles'
import 'style-loader!../../../packages/tailwindcss/tailwind.css'

const ADDON_ID = 'HTML'
const PANEL_ID = `${ADDON_ID}/panel`

const getPreviewDocument = () =>
  (document.querySelector('#storybook-preview-iframe') as HTMLIFrameElement)
    ?.contentWindow!.document

const getHtml = (styleObject) =>
  Object.entries(styleObject?.locals).reduce(
    (html: string, [className, moduleClassName]: [string, any]) =>
      html.replaceAll(moduleClassName, className),
    `${getPreviewDocument()?.querySelector('#root')?.innerHTML || ''}`
  )

const getCss = (styleObject) => {
  const [[path, css]] = styleObject

  return Object.entries(styleObject?.locals)
    .reduce(
      (acc: string, [className, hash]: [string, string]) =>
        acc.replaceAll(hash, className),
      css
    )
    .replaceAll(/(\/\* .+ \*\/)/g, '')
    .replaceAll(/\s*\./g, '.')
    .replaceAll(/(\s{4,})(\w)/g, '\r\n  $2')
    .replaceAll(/}/g, '\r\n}\r\n\r\n')
    .trim()
}

const MarkupPanel = ({ componentName, styleObject }) => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')

  useEffect(() => {
    if (styleObject) {
      setTimeout(() => setHtml(getHtml(styleObject)), 250)
      setCss(() => getCss(styleObject))
    }
  }, [componentName])

  return (
    <div className="flex h-full">
      <pre className="w-1/2 overflow-scroll">
        <code>{html}</code>
      </pre>
      <pre className="w-1/2 overflow-scroll">
        <code>{css}</code>
      </pre>
    </div>
  )
}

addons.register(ADDON_ID, async (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'HTML/CSS',
    render: ({ active = false, key = '' }) => {
      const componentName = (api.getCurrentStoryData() as Story)?.kind
      const styleObject: { [name: string]: any } = styles[componentName]

      return (
        <AddonPanel active={active} key={key}>
          {styleObject && (
            <MarkupPanel
              componentName={componentName}
              styleObject={styleObject}
            />
          )}
        </AddonPanel>
      )
    },
  })
})
