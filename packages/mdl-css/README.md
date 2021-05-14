# @masonite/mdl-css

MDL base styles and component CSS.

## Install

```shell
npm i @masonite/mdl-css
```

## Manual Installation

If you aren't using build tools and simply want the `mdl.css`, you can do so with `npm pack @masonite/mdl-css` and npm will download the package as a zip. The CSS file will be in the `dist` folder.

## Usage

The `mdl.css` file with all of the styles is the default export of the package. This means you will need something to handle imports of a .css file, such as webpack with the css-loader and style-loader.

Also, present is the `styles` directory, featuring all the Sass mixins and variables for MDL.

### JavaScript

```js
// Imports mdl.css, which requires special handling.
import '@masonite/mdl-css'
```

### CSS

```css
/* The inclusion of the ~ may vary depending on your build tools. */
@import "~@masonite/mdl-css/dist/mdl.css";
```

### Deployment

1. Update the `CHANGELOG.md` for the version you're releasing. If there is an `[Unreleased]` block, change that to the next version following semver.
1. Build the package with `npm run build`.
1. Publish with `lerna publish`.
