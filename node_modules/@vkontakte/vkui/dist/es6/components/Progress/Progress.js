import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';
var baseClassName = getClassName('Progress');

var Progress = function Progress(_ref) {
  var value = _ref.value,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["value", "className", "getRootRef"]);

  return React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassName, className)
  }), React.createElement("div", {
    className: "Progress__bg"
  }), React.createElement("div", {
    className: "Progress__in",
    style: {
      width: "".concat(value, "%")
    }
  }));
};

Progress.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.number,
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
Progress.defaultProps = {
  value: 0
};
export default Progress;
//# sourceMappingURL=Progress.js.map