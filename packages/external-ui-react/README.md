# @masonite/external-ui-react

## Install

```shell
npm install --save @masonite/external-ui-react
```

## Usage

Import a component as shown below and you're good to go.

```js
import { Button } from "@masonite/external-ui-react";
```

## Components

Props noted with an asterisk are required. Not always by necessity, but by lack of defaults or fallback options. These components can be improved.

### cards/BlogCard

| Prop    | Default    | Accepted Values |
| ------- | ---------- | --------------- |
| onClick | `() => {}` | function        |
| title   | ''         | string          |
| content | null       | string          |

### cards/TrendCard

| Prop    | Default    | Accepted Values |
| ------- | ---------- | --------------- |
| onClick | `() => {}` | function        |
| title   | ''         | string          |
| content | null       | string          |

### forms/Button

| Prop      | Default    | Accepted Values       |
| --------- | ---------- | --------------------- |
| disabled  | false      | boolean               |
| fullWidth | false      | boolean               |
| onClick   | `() => {}` | function              |
| uppercase | boolean    | false                 |
| size      | null       | null, 'small'         |
| variant   | null       | null, 'light', 'dark' |

### forms/Checkbox

| Prop     | Default   | Accepted Values | Description |
| -------- | --------- | --------------- | ----------- |
| onChange | undefined | function        |             |
| checked  | false     | boolean         |             |

### forms/FilterableSearch

| Prop             | Default   | Accepted Values                                      | Description                                |
| ---------------- | --------- | ---------------------------------------------------- | ------------------------------------------ |
| buttonLabel      | 'Search'  | string                                               |                                            |
| dropdownIcon     | 'chevron' | 'chevron', 'filter'                                  |                                            |
| filterChoices    | ---       | { label: string, value: string, checked: boolean }[] |                                            |
| onFilterChange\* | ---       | function                                             |                                            |
| onInputChange    | undefined | function                                             |                                            |
| onSubmit         | undefined | function                                             | Called when button is pressed or Enter key |
| placeholder      | 'Search'  | string                                               |                                            |
| value\*          | ---       | string                                               |                                            |

### forms/TextField

| Prop        | Default | Accepted Values | Description                   |
| ----------- | ------- | --------------- | ----------------------------- |
| error       | ---     | boolean         | Error state                   |
| helper      | --      | string          | Text that appears below input |
| label       | ---     | string          |                               |
| onBlur      | --      | function        |                               |
| onChange\*  | ---     | function        | Returns input value           |
| placeholder | ---     | string          |                               |
| value\*     | ---     | string          |                               |
| variant\*   | ---     | 'dark', null    |                               |

### forms/Toggle

| Prop     | Default | Accepted Values | Description |
| -------- | ------- | --------------- | ----------- |
| checked  | false   | boolean         |             |
| disabled | false   | boolean         |             |
| onChange | null    | function        |             |

### forms/RadioGroup

| Prop          | Default | Accepted Values                       | Description |
| ------------- | ------- | ------------------------------------- | ----------- |
| choices\*     |         | `[{ label: String, value: String },]` |             |
| checkedChoice | false   | string                                |             |
| onChange\*    |         | function                              |             |
| row           | false   | boolean                               |             |

### menu/OverflowMenu

| Prop     | Default | Accepted Values  | Description |
| -------- | ------- | ---------------- | ----------- |
| children | --      | function, string |             |

### nav/Tabs

Documentation incomplete.

| Prop         | Default   | Accepted Values                           | Description                                     |
| ------------ | --------- | ----------------------------------------- | ----------------------------------------------- |
| activeTab\*  | undefined | number, string                            | Unique identifier                               |
| onTabClick\* | undefined | function                                  | On tab click callback                           |
| tabs         | Object[]  | `[{ id: number\|string, children: jsx }]` | Tabs use `{children}` for ultimate flexibility. |
