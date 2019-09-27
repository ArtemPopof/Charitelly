"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var baseClassName = (0, _getClassName.default)('ModalPageHeader');

function ModalPageHeader(props) {
  var className = props.className,
      left = props.left,
      right = props.right,
      children = props.children,
      noShadow = props.noShadow,
      getRef = props.getRef;
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return _react.default.createElement("div", {
    className: (0, _classNames.default)(baseClassName, className),
    ref: getRef
  }, _react.default.createElement("div", {
    className: "ModalPageHeader__in"
  }, _react.default.createElement("div", {
    className: "ModalPageHeader__left"
  }, left), _react.default.createElement("div", {
    className: "ModalPageHeader__content"
  }, _react.default.createElement("div", {
    className: "ModalPageHeader__content-in"
  }, isPrimitive ? _react.default.createElement("span", null, children) : children)), _react.default.createElement("div", {
    className: "ModalPageHeader__right"
  }, right)), !noShadow && _react.default.createElement("div", {
    className: "ModalPageHeader__shadow"
  }));
}

ModalPageHeader.propTypes = {
  className: _propTypes.default.string,

  /**
   * Иконки, отображаемые слева
   */
  left: _propTypes.default.node,

  /**
   * Иконки, отображаемые справа
   */
  right: _propTypes.default.node,
  children: _propTypes.default.node,
  noShadow: _propTypes.default.bool,
  getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
};
ModalPageHeader.defaultProps = {
  noShadow: false
};
var _default = ModalPageHeader;
exports.default = _default;
//# sourceMappingURL=ModalPageHeader.js.map