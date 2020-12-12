# @masonite/tailwindcss

Tailwind is my favorite CSS framework and I am proud

## Install

```shell
npm i @masonite/tailwindcss
```

## Usage

### Tailwind CSS


#### Node, webpack, etc

For class Tailwind action, you can import the built CSS file from the package.

```js
import '@masonite/tailwindcss/tailwind.css'
```

#### Manual

The 

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
  // Change options.
};
```

## Tips

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
