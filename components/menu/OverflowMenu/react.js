import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import { mMoreHorizontal } from '@masonite/svg-icons'
import classNames from 'classnames/bind'
import style from './style.module.scss'

const cx = classNames.bind(style)

class OverflowMenu extends Component {
  state = {
    displayOverflowMenuActions: false,
  }

  toggleOverflowMenu = () => {
    const { displayOverflowMenuActions } = this.state

    this.setState({
      displayOverflowMenuActions: !displayOverflowMenuActions,
    })
  }

  handleClickOutside = () => {
    const { displayOverflowMenuActions } = this.state
    if (displayOverflowMenuActions) {
      this.toggleOverflowMenu()
    }
  };

  render() {
    const { displayOverflowMenuActions } = this.state
    const { children } = this.props
    return (
      <div className={cx('overflow-menu')}>
        <button type="button" className={cx('overflow-menu__button')} onClick={this.toggleOverflowMenu}>
          <svg className={cx('overflow-menu__svg')} dangerouslySetInnerHTML={{ __html: mMoreHorizontal }} />
        </button>

        {displayOverflowMenuActions
          && (
          <div className={cx('overflow-menu__actions')}>
            {children}
          </div>
          )
        }
      </div>
    )
  }
}

OverflowMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default onClickOutside(OverflowMenu)
