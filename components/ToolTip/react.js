import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { mInfo } from '@masonite/svg-icons'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const cx = classNames.bind(s)

export class ToolTip extends Component {
    state = {
      displayTooltip: false,
    }

    changeTooltipDisplay = () => {
      this.setState(prevState => {
        return {
          displayTooltip: !prevState.displayTooltip,
        }
      })
    }

    render() {
      const { displayTooltip } = this.state
      const { message } = this.props

      return (
        <div
          className={cx(['tooltip--tooltip-wrapper'], {
            'tooltip--display-tooltip': displayTooltip === true })
          }
          onClick={() => this.changeTooltipDisplay()}
          role="button"
          tabIndex="0"
          onKeyDown={() => this.changeTooltipDisplay()}
        >
          <span
            className={cx('tooltip--info-icon')}
            dangerouslySetInnerHTML={{ __html: mInfo }}
          />

          <div className={cx(['tooltip--tooltip-message-wrapper', 'toolltip--positioned-right'])}>
            <p>{message}</p>
          </div>
        </div>
      )
    }
}

export default ToolTip

ToolTip.propTypes = {
  message: PropTypes.string,
}

ToolTip.defaultProps = {
  message: '',
}
