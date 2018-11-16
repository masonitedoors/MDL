# ui-components

## Monorepo for Masonite Design Language components. Produces UI kits for internal and external.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Usage

Install one of the UI kits.

```
npm i @masonite/internal-ui-react
npm i @masonite/external-ui-react
```

and then import the desired available components. Full list isn't available at the moment.

```
import { Checkbox, Button, Heading } from "@masonite/internal-ui-react"
```

Since these are not published yet, you will have to use `npm link`. Go to the project where you want to use these and do the following:

`npm link /<PathToThisRepo>/packages/<DesiredUiKit>`

Example:

```
cd ~/Code/rps-ui-v2-dev
npm link ~/Code/ui-components/packages/internal-ui-react
```

## Storybook

To view and interact with the available components, clone this repo locally and run one (or more) of the following.

```
npm run storybook:html
npm run storybook:react
npm run storybook:vue
```
