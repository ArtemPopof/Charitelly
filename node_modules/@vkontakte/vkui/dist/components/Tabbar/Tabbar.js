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

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _utils = require("../../lib/utils");

var baseClassName = (0, _getClassName.default)('Tabbar');

var Tabbar = function Tabbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      shadow = _ref.shadow,
      itemsLayout = _ref.itemsLayout,
      insets = _ref.insets;

  var getItemsLayout = function getItemsLayout() {
    switch (itemsLayout) {
      case 'horizontal':
      case 'vertical':
        return itemsLayout;

      default:
        return _react.default.Children.count(children) > 2 ? 'vertical' : 'horizontal';
    }
  };

  return _react.default.createElement("div", {
    className: (0, _classNames.default)(baseClassName, className, "Tabbar--l-".concat(getItemsLayout()), {
      'Tabbar--shadow': shadow
    }),
    style: {
      paddingBottom: (0, _utils.isNumeric)(insets.bottom) ? insets.bottom : null
    }
  }, children);
};

Tabbar.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow: _propTypes.default.bool,
  itemsLayout: _propTypes.default.oneOf(['vertical', 'horizontal', 'auto']),

  /**
   * @ignore
   */
  insets: _propTypes.default.object
};
Tabbar.defaultProps = {
  shadow: true
};

var _default = (0, _withInsets.default)(Tabbar);

exports.default = _default;
//# sourceMappingURL=Tabbar.js.map