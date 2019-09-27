"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var baseClassName = (0, _getClassName.default)('TabbarItem');

var TabbarItem = function TabbarItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      selected = _ref.selected,
      label = _ref.label,
      text = _ref.text,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "selected", "label", "text"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)(baseClassName, className, {
      'TabbarItem--selected': selected
    })
  }), _react.default.createElement("div", {
    className: "TabbarItem__in"
  }, _react.default.createElement("div", {
    className: "TabbarItem__icon"
  }, children, label && _react.default.createElement("span", {
    className: "TabbarItem__label"
  }, label)), text && _react.default.createElement("div", {
    className: "TabbarItem__text"
  }, text)));
};

TabbarItem.propTypes = {
  className: _propTypes.default.string,
  selected: _propTypes.default.bool,
  children: _propTypes.default.node,

  /**
   * Тест рядом с иконкой
   */
  text: _propTypes.default.node,

  /**
   * Счетчик рядом с иконкой
   */
  label: _propTypes.default.node
};
var _default = TabbarItem;
exports.default = _default;
//# sourceMappingURL=TabbarItem.js.map