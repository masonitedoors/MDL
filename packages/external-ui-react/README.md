# @masonite/external-ui-react

MDL styles and React components for development. See them in action in [Storybook](https://masonitedoors.github.io/MDL).

## Install

```shell
npm i @masonite/external-ui-react
```

## Usage

### CSS

Add MDL CSS using SCSS found in the `/styles` directory. There are 2 main files to choose from: **index.scss** and **global.scss**. Index provides variables and mixins only. You can safely use this any CSS file. Global adds styling to `h1`-`h6`, `p`, and other element tags, as well as the variables.

#### Customize

Alternatively, you can modify the SCSS by defining the variables found in [\_config-variables.scss](https://github.com/masonitedoors/MDL/blob/master/styles/_config-variables.scss) before importing **index.scss**.

### Import Examples

#### ES6

```js
import '@masonite/external-ui-react/dist/styles/index.scss'
```

#### SCSS file

```css
// This is using webpack. How you access node_modules may differ.
@import '~@masonite/external-ui-react/dist/styles/index.scss';
```

### React components

Import a component as shown below and you're good to go. See the list of available components on [Storybook](https://masonitedoors.github.io/MDL) or check the [components](https://github.com/masonitedoors/MDL/tree/master/components) source folder.

```js
import { Button } from '@masonite/external-ui-react'
```

## Development

Clone down `Masonitedoors/MDL`, install dependencies, and run `npm run storybook:react`.

### Deployment

1. Update the `CHANGELOG.md` for the version you're releasing. If there is an `[Unreleased]` block, change that to the next version following semver.
1. Build the package with `npm run build-package:external-ui-react` from the monorepo root, followed by `lerna publish`.
