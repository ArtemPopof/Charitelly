import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
var baseClassName = getClassName('TabbarItem');

var TabbarItem = function TabbarItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      selected = _ref.selected,
      label = _ref.label,
      text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["className", "children", "selected", "label", "text"]);

  return React.createElement("div", _extends({}, restProps, {
    className: classNames(baseClassName, className, {
      'TabbarItem--selected': selected
    })
  }), React.createElement("div", {
    className: "TabbarItem__in"
  }, React.createElement("div", {
    className: "TabbarItem__icon"
  }, children, label && React.createElement("span", {
    className: "TabbarItem__label"
  }, label)), text && React.createElement("div", {
    className: "TabbarItem__text"
  }, text)));
};

TabbarItem.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node,

  /**
   * Тест рядом с иконкой
   */
  text: PropTypes.node,

  /**
   * Счетчик рядом с иконкой
   */
  label: PropTypes.node
};
export default TabbarItem;
//# sourceMappingURL=TabbarItem.js.map