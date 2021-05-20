import React from 'react'
import { addons, types } from '@storybook/addons'
import { Story } from '@storybook/api'
import { AddonPanel } from '@storybook/components'
import * as styles from './styles'
import MarkupPanel from './MarkupPanel'
import '@masonite/tailwindcss/tailwind.css'

const ADDON_ID = 'HTML'
const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, (api) => {
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
              storyData={api.getCurrentStoryData()}
            />
          )}
        </AddonPanel>
      )
    },
  })
})
