import React from 'react'
import { storiesOf } from '@storybook/react'
import classNames from 'classnames/bind'
import { Table } from './react'
import Readme from './react.README.md'
import style from './style.module.scss'
import { BodyTextField } from '../WizardModal/react'

const cx = classNames.bind(style)

storiesOf('Table', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('React', () => (
    <Table stickyHeader fullWidth height={480}>
      <thead>
        <tr>
          <th>Heading</th>
          <th>Another Heading</th>
          <th>And Another</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem data</td>
          <td>Extra extra long lorem data to show sizing</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('HTML (classless)', () => (
    <table className={cx('table')}>
      <thead>
        <tr>
          <th>Heading</th>
          <th>Another Heading</th>
          <th>And Another</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
      </tbody>
    </table>
  ))
  .add('HTML', () => (
    <>
      <h2>Standard Table</h2>
      <p>
        Using the CSS classes will produce the same results, but with higher specificity and
        modifiers to change the style.
      </p>
      <table className={cx('table')}>
        <thead>
          <tr>
            <th className={cx(['table__cell', 'table__cell--heading'])}>Heading</th>
            <th className={cx(['table__cell', 'table__cell--heading'])}>Another Heading</th>
            <th className={cx(['table__cell', 'table__cell--heading'])}>And Another</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
          </tr>
          <tr>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
          </tr>
        </tbody>
      </table>
      <h2>Striped Row Table</h2>
      <p>The striped-row modifier is used for striped rows.</p>
      <table className={cx('table', 'table--striped-rows')}>
        <thead>
          <tr>
            <th className={cx(['table__cell', 'table__cell--heading'])}>Heading</th>
            <th className={cx(['table__cell', 'table__cell--heading'])}>Another Heading</th>
            <th className={cx(['table__cell', 'table__cell--heading'])}>And Another</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
          </tr>
          <tr>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
            <td className={cx('table__cell')}>Lorem data</td>
          </tr>
        </tbody>
      </table>
    </>
  ))
  .add('Test', () => (
    <table className={cx('table')}>
      <tbody className={cx('table-body__headless')}>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
        <tr>
          <td>Lorem data</td>
          <td>Lorem data</td>
          <td>Lorem data</td>
        </tr>
      </tbody>
    </table>
  ))
