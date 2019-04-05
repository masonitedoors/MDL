import React from 'react'
import PropTypes from 'prop-types'

export const ModalFooter = ({ children }) => (
  <footer className="internal-modal__footer">{children}</footer>
)

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func]).isRequired,
}
