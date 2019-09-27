import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropType from 'prop-types';
import classNames from '../../lib/classNames';

var HorizontalScroll = function HorizontalScroll(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("div", _extends({}, restProps, {
    className: classNames('HorizontalScroll', className)
  }), React.createElement("div", {
    className: "HorizontalScroll__in"
  }, children));
};

HorizontalScroll.propTypes = {
  children: PropType.node,
  className: PropType.string,
  style: PropType.object
};
export default HorizontalScroll;
//# sourceMappingURL=HorizontalScroll.js.map