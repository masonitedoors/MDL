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

### BlogCard

| Prop    | Default    | Accepted Values |
| ------- | ---------- | --------------- |
| onClick | `() => {}` | function        |
| title   | ''         | string          |
| content | null       | string          |

### TrendCard

| Prop    | Default    | Accepted Values |
| ------- | ---------- | --------------- |
| onClick | `() => {}` | function        |
| title   | ''         | string          |
| content | null       | string          |

### Button

| Prop      | Default    | Accepted Values       |
| --------- | ---------- | --------------------- |
| onClick   | `() => {}` | function              |
| uppercase | boolean    | false                 |
| size      | null       | null, 'small'         |
| variant   | null       | null, 'light', 'dark' |

### forms/Checkbox

| Prop     | Default   | Accepted Values | Description                                                                                       |
| -------- | --------- | --------------- | ------------------------------------------------------------------------------------------------- |
| onChange | undefined | function        |                                                                                                   |
| checked  | false     | boolean         |                                                                                                   |
| stateful | true      | boolean         | The checkbox maintains state. It can still receive props for updates or setting an initial value. |

### forms/FilterableSearch

| Prop             | Default   | Accepted Values                                      | Description                                |
| ---------------- | --------- | ---------------------------------------------------- | ------------------------------------------ |
| filterChoices    | ---       | { label: string, value: string, checked: boolean }[] |                                            |
| onFilterChange\* | ---       | function                                             |                                            |
| onInputChange    | undefined | function                                             |                                            |
| onSubmit         | undefined | function                                             | Called when button is pressed or Enter key |
| placeholder      | string    | string                                               |                                            |
| value\*          | ---       | string                                               |                                            |

### forms/Input

| Prop       | Default | Accepted Values | Description         |
| ---------- | ------- | --------------- | ------------------- |
| error      | ---     | boolean         | Error state         |
| onChange\* | ---     | function        | Returns input value |
| value\*    | ---     | string          |                     |
| variant\*  | ---     | 'dark', null    |                     |

### Tabs

Documentation incomplete.

| Prop         | Default   | Accepted Values                           | Description                                     |
| ------------ | --------- | ----------------------------------------- | ----------------------------------------------- |
| activeTab\*  | undefined | number, string                            | Unique identifier                               |
| onTabClick\* | undefined | function                                  | On tab click callback                           |
| tabs         | Object[]  | `[{ id: number\|string, children: jsx }]` | Tabs use `{children}` for ultimate flexibility. |
