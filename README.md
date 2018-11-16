# ui-components

## Monorepo for Masonite Design Language components. Produces UI kits for internal and external.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Usage

Since these are not published yet, you will have to use clone this repo and use `npm link` on one of the packages. Go to the project where you want to use these and do the following:

`npm link /<PathToThisRepo>/packages/<DesiredUiKit>`

Example:

```
cd ~/Code/rps-ui-v2-dev
npm link ~/Code/ui-components/packages/internal-ui-react
```

That simulates the installation of one of the UI kits, listed below.

```
npm i @masonite/internal-ui-react
npm i @masonite/external-ui-react
```

Import the desired available components and you're good to go. Full list isn't available at the moment.

```
import { Checkbox, Button, Heading } from "@masonite/internal-ui-react"
```

## Storybook

To view and interact with the available components, clone this repo locally and run one (or more) of the following.

```
npm run storybook:html
npm run storybook:react
npm run storybook:vue
```
