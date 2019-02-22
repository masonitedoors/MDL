import React, { PureComponent } from 'react'
import { mCheck } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
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
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        className={s.Checkbox}
        onClick={onChange}
        onKeyPress={onChange}
      >
        <input className={s['checkbox-input']} type="checkbox" checked={checked} readOnly />
        <div className={s['checkbox-svg-wrapper']}>
          <svg
            className={cx(['checkbox-svg-icon'], ['checkbox-svg-icon--checked'])}
            dangerouslySetInnerHTML={{ __html: mCheck }}
          />
        </div>
      </div>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  stateful: PropTypes.bool,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: null,
  stateful: null,
  onChange: null,
}

export default Checkbox
