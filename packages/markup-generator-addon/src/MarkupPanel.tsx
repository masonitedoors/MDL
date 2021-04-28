import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export const MarkupPanel = ({ componentName, styleObject }) => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')

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

  useEffect(() => {
    if (styleObject) {
      setTimeout(() => setHtml(getHtml(styleObject)), 250)
      setCss(() => getCss(styleObject))
    }
  }, [componentName])

  return (
    <div className="flex h-full">
      <div className="w-1/2">
        <CodeView
          title="HTML"
          code={Prism.highlight(html, Prism.languages.css, 'markup')}
        />
      </div>
      <div className="w-1/2">
        <CodeView
          title="CSS"
          code={Prism.highlight(css, Prism.languages.css, 'css')}
        />
      </div>
    </div>
  )
}

const CodeView = ({ code, title }) => (
  <div className="p-md">
    <h2 className="text-limerick text-2xl font-bold mb-md">{title}</h2>
    <div className="overflow-scroll" style={{ height: '420px' }}>
      <pre
        className="bg-blackolive my-0"
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></pre>
    </div>
  </div>
)

export default MarkupPanel
