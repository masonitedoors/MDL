import React from 'react'
import { storiesOf } from '@storybook/react'
import classNames from 'classnames/bind'
import Table from './react'
import Readme from './react.README.md'
import style from './style.module.scss'

const cx = classNames.bind(style)

storiesOf('Table', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('React', () => <Table />)
  .add('HTML', () => (
    <table className={cx('table')}>
      <tr>
        <th className={cx(['table__cell', 'table__cell--heading'])}>Heading</th>
        <th className={cx(['table__cell', 'table__cell--heading'])}>Another Heading</th>
        <th className={cx(['table__cell', 'table__cell--heading'])}>And Another</th>
      </tr>
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
    </table>
  ))
