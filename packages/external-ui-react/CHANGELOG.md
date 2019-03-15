# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- `variant` prop options for `<Button />` updated to reflect changes in MDL. 'Secondary' (replaces 'dark'), 'default' (light), and added 'primary'. Old variant names still supported.
- Spacing in `<TextField />`

### Fixed

- `<TextField />` onBlur console error

## [1.9.2] - 2019-03-13

### Added

- `<OverflowMenu />` component.
- `disabled` and `fullWidth` prop to `<Button />` component.
- `variant` prop to `<FilterableSearch />` component (for its child `<TextField />`)

### Changed

- default value for `variant` prop on `<TextField />` to "dark" since most examples and apps are on a white background.

## [1.8.0] - 2019-03-08

### Added

- `helper` prop and `onBlur` event to `TextField` component.

## [1.7.0] - 2019-03-01

### Added

- New label and placeholder functionality and design to `TextField`.

### Changed

- Rename `Input` to `TextField`. `Input` still works.
- `TextField` error state icon from an X to an alert triangle.

## [1.6.0] - 2019-02-22

### Changed

- Checkbox is fully controlled now. It no longer has `stateful` prop or state.

## [1.5.7] - 2019-02-19

### Added

- Dropdown icon choices for FilterableSearch

## [1.5.6] - 2019-02-19

### Added

- Add `buttonLabel` prop

### Changed

- FilterableSearch method names: `onSearch` is now `onSubmit`
- FilterableSearch's button only appears when there is an `onSubmit` method provided

## [1.5.5] - 2019-02-19

### Fixed

- Build issue

## [1.5.4] - 2019-02-19

### Fixed

- Old build published

## [1.5.3] - 2019-02-18

### Changed

- forms/FilterableSearch to be a PureComponent
- forms/Input to be a function component

## [1.5.0] - 2019-02-15

### Added

- FilterableSearch component
- `margin: 0` to Tabs to prevent global `li` margins applying
- `flex-shrink: 0` added to Checkbox to prevent warpping of size in flex layouts
- Helper mixin file with `square` mixin

### Changed

- Button small variant text size
- Color variables

### Fixed

- `typography.scss` no longer includes font import as it is variables only.

## [1.4.0] - 2018-12-31

### Remove

- SCSS exports. No one was using these probably, so keeping it as a minor update.

### Fixed

- `span`, `label` and `a` having a `margin-bottom` in `element-tag-typography` mixin.

## [1.3.1] - 2018-12-31

### Added

- Paragraph styling for `span`, `li`, `blockquote`, and `a` to `element-tag-typography` mixin.

## [1.3.0] - 2018-12-31

### Added

- Size prop to Button with 'small' option
- Pointer cursor on Tabs

## [1.2.0] - 2018-12-28

### Added

- Mixin to scope element tags (h1, h2, p) styles in a class
- `<li>` styling in global.scss
- Pointer cursor for Checkbox

## [1.1.1] - 2018-12-28

### Fixed

- Published last update without building

## [1.1.0] - 2018-12-28

### Added

- README and CHANGELOG!
- Prop to Button for uppercase styling.

### Changed

- Buttons are no longer uppercase by default.
- Light variant of Button's background color.
- Checkbox has stateful option.
