import React, { Component } from 'react'
import { React as Icon } from 'components/Icon'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import { mMoreHorizontal } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

export class OverflowMenu extends Component {
  state = {
    displayOverflowMenuActions: false,
  }

  toggleOverflowMenu = () => {
    const { displayOverflowMenuActions } = this.state

    this.setState({
      displayOverflowMenuActions: !displayOverflowMenuActions,
    })
  }

  checkToCloseOverflowMenu = e => {
    if (e.target.matches('button')) {
      this.toggleOverflowMenu()
    }
  }

  handleClickOutside = () => {
    const { displayOverflowMenuActions } = this.state
    if (displayOverflowMenuActions) {
      this.toggleOverflowMenu()
    }
  }

  render() {
    const { displayOverflowMenuActions } = this.state
    const { children, variant } = this.props
    return (
      <div
        className={cx('overflow-menu', {
          'overflow-menu--dark': ['secondary', 'dark'].includes(variant),
        })}
      >
        <button
          type="button"
          className={cx('overflow-menu__button')}
          onClick={this.toggleOverflowMenu}
        >
          <Icon
            className={
              displayOverflowMenuActions
                ? cx('overflow-menu__svg--opened')
                : cx('overflow-menu__svg')
            }
            svg={mMoreHorizontal}
            title="Overflow Menu icon"
            size={16}
          />
        </button>

        {displayOverflowMenuActions && (
          <div
            role="presentation"
            className={cx('overflow-menu__actions')}
            onClick={e => this.checkToCloseOverflowMenu(e)}
            onKeyPress={e => this.checkToCloseOverflowMenu(e)}
          >
            {children}
          </div>
        )}
      </div>
    )
  }
}

OverflowMenu.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
}

OverflowMenu.defaultProps = {
  variant: 'light',
}

export default onClickOutside(OverflowMenu)
