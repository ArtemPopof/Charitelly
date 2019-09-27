import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS } from '../../lib/platform';
var baseClassName = getClassName('Radio');

var Radio = function Radio(_ref) {
  var children = _ref.children,
      description = _ref.description,
      style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["children", "description", "style", "className", "getRef", "getRootRef"]);

  return React.createElement(Tappable, {
    component: "label",
    style: style,
    className: classNames(baseClassName, className),
    activeEffectDelay: IS_PLATFORM_IOS ? 100 : ACTIVE_EFFECT_DELAY,
    disabled: restProps.disabled,
    getRootRef: getRootRef
  }, React.createElement("input", _extends({}, restProps, {
    type: "radio",
    className: "Radio__input",
    ref: getRef
  })), React.createElement("div", {
    className: "Radio__container"
  }, React.createElement("div", {
    className: "Radio__icon"
  }), React.createElement("div", {
    className: "Radio__content"
  }, children, React.createElement("div", {
    className: "Radio__description"
  }, description))));
};

Radio.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
export default Radio;
//# sourceMappingURL=Radio.js.map