"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tappable = _interopRequireWildcard(require("../Tappable/Tappable"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var baseClassName = (0, _getClassName.default)('Radio');

var Radio = function Radio(_ref) {
  var children = _ref.children,
      description = _ref.description,
      style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "description", "style", "className", "getRef", "getRootRef"]);
  return _react.default.createElement(_Tappable.default, {
    component: "label",
    style: style,
    className: (0, _classNames.default)(baseClassName, className),
    activeEffectDelay: _platform.IS_PLATFORM_IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
    disabled: restProps.disabled,
    getRootRef: getRootRef
  }, _react.default.createElement("input", (0, _extends2.default)({}, restProps, {
    type: "radio",
    className: "Radio__input",
    ref: getRef
  })), _react.default.createElement("div", {
    className: "Radio__container"
  }, _react.default.createElement("div", {
    className: "Radio__icon"
  }), _react.default.createElement("div", {
    className: "Radio__content"
  }, children, _react.default.createElement("div", {
    className: "Radio__description"
  }, description))));
};

Radio.propTypes = {
  children: _propTypes.default.node,
  description: _propTypes.default.node,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })]),
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
};
var _default = Radio;
exports.default = _default;
//# sourceMappingURL=Radio.js.map