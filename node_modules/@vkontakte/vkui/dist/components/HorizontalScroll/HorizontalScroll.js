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

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var HorizontalScroll = function HorizontalScroll(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)('HorizontalScroll', className)
  }), _react.default.createElement("div", {
    className: "HorizontalScroll__in"
  }, children));
};

HorizontalScroll.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
var _default = HorizontalScroll;
exports.default = _default;
//# sourceMappingURL=HorizontalScroll.js.map