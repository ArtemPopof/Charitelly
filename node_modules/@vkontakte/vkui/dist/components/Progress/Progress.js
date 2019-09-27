"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var baseClassName = (0, _getClassName.default)('Progress');

var Progress = function Progress(_ref) {
  var value = _ref.value,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["value", "className", "getRootRef"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)(baseClassName, className)
  }), _react.default.createElement("div", {
    className: "Progress__bg"
  }), _react.default.createElement("div", {
    className: "Progress__in",
    style: {
      width: "".concat(value, "%")
    }
  }));
};

Progress.propTypes = {
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  value: _propTypes.default.number,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
};
Progress.defaultProps = {
  value: 0
};
var _default = Progress;
exports.default = _default;
//# sourceMappingURL=Progress.js.map