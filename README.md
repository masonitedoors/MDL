# MDL - Masonite Design Language

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Build Status](https://travis-ci.org/masonitedoors/MDL.svg?branch=master)](https://travis-ci.org/masonitedoors/MDL)

A monorepo for Masonite Design Language.

## Usage

For usage information, please refer to each individual package's docs:

- [@masonite/external-ui-react](packages/external-ui-react/README.md)
- [@masonite/svg-icons](packages/svg-icons/README.md)

## Deploying to npm

Lerna handles the package.json version, the tags, and releases. However, each package may have their own additional steps. Follow the steps below for each package, then run `lerna publish`.

### @masonite/external-ui-react

- Update the `CHANGELOG.md` in `packages/external-ui-react`. If there is an `[Unreleased]` block, change that to the next version following semver.
- Build the package `npm run build-package:external-ui-react`

### @masonite/svg-icons

- Have the MIcons repo cloned in vendors. Clone the `Masonitedoors/MDL` repo with `git clone --recurse-submodules -j8` to get it.
- Update the `CHANGELOG.md` in `packages/svg-icons`. If there is an `[Unreleased]` block, change that to the next version following semver.
- Build the package `npm run build-package:svg-icons`

## Contributing

Please see our [contributing guidelines](CONTRIBUTING.md) for this project.
