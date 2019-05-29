import { create } from '@storybook/theming'
import React from 'react'

export default {
  options: {
    theme: {
      brandTitle: 'Masonite Design Language',
      brandUrl: 'https://github.com/masonitedoors/MDL',
    },
    showPanel: true,
  },
  readme: {
    codeTheme: 'github',
    StoryPreview: ({ children }) => <>{children}</>,
  }
}
