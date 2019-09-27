import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
var baseClassName = getClassName('ModalPageHeader');

function ModalPageHeader(props) {
  var className = props.className,
      left = props.left,
      right = props.right,
      children = props.children,
      noShadow = props.noShadow,
      getRef = props.getRef;
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return React.createElement("div", {
    className: classNames(baseClassName, className),
    ref: getRef
  }, React.createElement("div", {
    className: "ModalPageHeader__in"
  }, React.createElement("div", {
    className: "ModalPageHeader__left"
  }, left), React.createElement("div", {
    className: "ModalPageHeader__content"
  }, React.createElement("div", {
    className: "ModalPageHeader__content-in"
  }, isPrimitive ? React.createElement("span", null, children) : children)), React.createElement("div", {
    className: "ModalPageHeader__right"
  }, right)), !noShadow && React.createElement("div", {
    className: "ModalPageHeader__shadow"
  }));
}

ModalPageHeader.propTypes = {
  className: PropTypes.string,

  /**
   * Иконки, отображаемые слева
   */
  left: PropTypes.node,

  /**
   * Иконки, отображаемые справа
   */
  right: PropTypes.node,
  children: PropTypes.node,
  noShadow: PropTypes.bool,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
ModalPageHeader.defaultProps = {
  noShadow: false
};
export default ModalPageHeader;
//# sourceMappingURL=ModalPageHeader.js.map