# @masonite/tailwindcss

This package is a tailwindcss implementation of the Masonite Design Language. [Tailwind](https://tailwindcss.com/) is a utility-first CSS framework that can be used to build for the web without writing CSS. Combine it with another MDL package and avoid coming up with names for for arbitrary markup!

## Usage

All of the design tokens, such as _color_ and _spacing_ are available through CSS classes, along with many classes to represent the box-model, such as `flex` and `mx-auto` for `display: flex; margin-left: auto; margin-right: auto;`. However, **there are no base styles**. You will most likely want to combine it with existing base styles. Everything in Tailwind is zero'd out.

`text-limerick` and `bg-limerick` will produce the Masonite green for the color and background property respectively. All Masonite colors are simply prefixed by `text-` or `bg-`. This pattern applies to border colors and whereever else applicable. Check out the Tailwind [docs](https://tailwindcss.com/docs/) for more.

```html
// Example in plain HTML (used with the global stylesheet)
<header class="text-center py-xl bg-gray">
  <h1>
    <span class="inline-block text-lg text-white bg-limerick py-xs px-sm mb-sm uppercase">
      Introducing...
    </span>
    <span class="block text-night">@masonite/tailwindcss</span>
  </h1>
  <h2 class="flex items-center justify-center">
    <span class="text-3xl mr-xs">🚪</span>
    <span>No CSS behind these doors</span>
  </h2>
</header>
```

## Install

```shell
npm i @masonite/tailwindcss
```

### Tailwind CSS


#### Node, webpack, etc

For classic Tailwind action, import the one of the CSS files (unminified should be used for Node/webpack). `tailwind.css` ideally comes before your other CSS, but this isn't prescriptive.

```js
//Import one of these near the root of your application
import '@masonite/tailwindcss/tailwind.css'
import '@masonite/tailwindcss/tailwind.min.css' // Pre-minified version

// Combine with whatever you currently use to get MDL styles/components
import '@masonite/external-ui-react/dist/styles/global.scss' 
```

### Accessing MDL Design Tokens in JavaScript

If you wish to reference colors, space increments, and other design tokens, you can import the config. Read more on [Referencing in JavaScript](https://tailwindcss.com/docs/configuration#referencing-in-java-script]) on the Tailwindcss website.

```js
import { resolvedConifg } from "@masonite/tailwindcss";
```

### Using the Config

You can get the unresolved `tailwindConfig` and do the build within your project.

```js
// tailwind.config.js (in your project)
import { tailwindConfig } from "@masonite/tailwindcss";

export default {
  ...tailwindConfig,
  // Change options
};
```
---

## Tips

Tailwind is best used with a strong component-driven system or one-offs. You can also use it just for the flexbox, padding and margin helpers.

### CSS Conflicts

Tailwind by nature is all CSS utility classes, so in an environment like WordPress, or anywhere with CSS that is out of your control, there is a chance you may run into conflicts.

#### Prefix Classes

[Adding a prefix](https://tailwindcss.com/docs/configuration#prefix) to your classes can prevent collisions with simple and short generic class names, like `.container`.

```js
// tailwind.config.js
module.exports = {
  prefix: "mdl-",
};
```

#### Using Important

This isn't very chill, but it is available as an option, which may be necessary in an environment with very competitive CSS specificity.

```js
// tailwind.config.js
module.exports = {
  important: true,
};
```

#### Don't Concatenate Strings to Form Tailwind Classes

When you want to change CSS properties, for example, toggling between styles or changing CSS classes based on a prop, avoid concatenating strings to form Tailwind classes, such as `'px' + size` to make `'px-4'`. This prevents optimization that can be done to remove unused classes.

### ...Lots More

This list is by no means definitive. While Tailwind isn't always the best solution, there are various libraries, patterns, and strategies to overcome them.
