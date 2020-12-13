import 'styles/storybook.scss'
import '../../packages/tailwindcss/tailwind.css'
import tailwindConfig from '../../packages/tailwindcss/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const {
  theme: { colors },
} = resolveConfig(tailwindConfig)

export const parameters = {
  backgrounds: {
    values: Object.keys(colors).map((name) => ({ name, value: colors[name] })),
  },
}
