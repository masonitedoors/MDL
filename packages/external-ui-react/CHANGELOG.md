# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `<TextField />` crashing when value is `null`

## [2.10.1] - 2019-10-02

### Fixed

- TextField component's trailing icon overlapping the input value
- Anchor tags didn't inherit their font size
- Duplicate CSS box-sizing rule being outputted

## [2.10.0] - 2019-08-14

### Added

- `<SidebarNav />` component.

### Fixed

- `<FilterableSearch />` button text vertical alignment.
- `<TextField />` icon pointer-event preventing focusing of text input.

## [2.9.0] - 2019-08-13

### Added

- Bootstrap 4 grid utility classes and CSS mixins added.

## [2.8.0] - 2019-07-16

### Added

- `<Tile />` component.

### Fixed

- Checkbox background color

## [2.7.0] - 2019-06-19s

### Added

- `<LoadingModal />` component.

## [2.6.0] - 2019-05-23

### Added

- `align` prop for `<TextField />`.

### Fixed

- `<WizardModal />` missing.

## [2.5.0] - 2019-05-22

### Added

- `<BulkEditTablePopover />` component.

### Fixed

- `<WizardModal />` default prop triggering propTypes error for `onOutsideClick`

## [2.4.2] - 2019-04-09

### Fixed

- `<WizardModal />` box-sizing

## [2.4.1] - 2019-04-09

### Fixed

- `<SmallTitle />` was not exported.

## [2.4.0] - 2019-04-09

### Added

- Export of `<TextField />` with preset props for `WizardModal.Body` available as `WizardModal.TextField`

### Changed

- `<SmallTitle />` has built-in margins based on its usage, and can receive `props.style`, for removal if necessary by another component using it. Also, first-child margin removed.
- `<SmallTitle />` text color updated.

## [2.3.0] - 2019-04-09

### Added

- `<WizardModal.Footer />` has props for `activePage` and `totalPages` and will auto-include pagination dots.

## [2.2.3] - 2019-04-08

### Fixed

- `<ModalBackdrop />` z-index fixed.

## [2.2.0] - 2019-04-08

### Added

- `<SmallTitle />` component
- `<WizardModal />` component
- `<ModalBackdrop />` component

## [2.1.0] - 2019-04-01

### Added

- `<PaginationDots />` component.
- `onChange`, `onBlur` callback for `<TextField />` returns the expected `event` as the second parameter.

### Fixed

- Spacing between Radio buttons in `<RadioGroup />`.

## [2.0.0] - 2019-03-28

### Changed

- Builds are no longer minified. The display names of components changed which made them unselectable in tests.

## [1.11.0] - 2019-03-26

### Added

- `<RadioGroup />` component.

## [1.10.0] - 2019-03-26

### Added

- `<Toggle />` component.

### Changed

- `variant` prop options for `<Button />` updated to reflect changes in MDL. 'Secondary' (replaces 'dark'), 'default' (light), and added 'primary'. Old variant names still supported.
- Spacing in `<TextField />`
- `variant` is no longer an option for `<FilterableSearch />`
- `<FilterableSearch />` colors updated

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
