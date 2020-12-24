# @masonite/svg-icons

## Install

```shell
npm install --save @masonite/svg-icons
```

## Usage

If you are using a Create React App application

```js
import { ReactComponent as MBifold } from '@masonite/svg-icons/dist/svg/bifold.svg'
```

or you can import the SVG as a string and implement per your use case or preference.

```js
import { mBifold } from '@masonite/svg-icons'
```

## Development

To develop, clone the `Masonitedoors/MDL` repo with `git clone --recurse-submodules -j8` to get it. Make sure MIcons was cloned to `vendors` in its root. You cannot build without it.

## Deployment

1. Make sure you have done what is mentioned in development.
1. Update the `CHANGELOG.md` for the version you're releasing. If there is an `[Unreleased]` block, change that to the next version following semver.
1. Build the package `npm run build-package:svg-icons` from the monorepo root, followed by `lerna publish`.
