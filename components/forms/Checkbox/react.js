import React, { PureComponent } from 'react'
import { mCheck } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import s from './style.module.scss'

const cx = classNames.bind(s)

class Checkbox extends PureComponent {
  constructor(props) {
    super(props)

    const checked = typeof props.checked !== 'undefined' ? props.checked : false

    this.state = { checked }
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props
    if (prevProps.checked !== checked) this.setState({ checked })
  }

  onChange = () => {
    const { stateful, onChange, checked } = this.props
    const isStateful = typeof stateful !== 'undefined' ? stateful : true
    if (isStateful) this.setState({ checked: !checked })
    if (typeof onChange === 'function') onChange()
  }

  render() {
    const { onChange } = this
    const { checked } = this.state

    return (
      <div className={s.Checkbox} onClick={onChange}>
        <input className={s.Checkbox__checkbox} type="checkbox" checked={checked} readOnly />
        <div className={s['Checkbox__svg-wrapper']}>
          <svg
            className={cx(['Checkbox__svg-icon'], ['Checkbox__svg-icon--checked'])}
            dangerouslySetInnerHTML={{ __html: mCheck }}
          />
        </div>
      </div>
    )
  }
}

export default Checkbox
