import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
var baseClassName = getClassName('Tabbar');

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
        return React.Children.count(children) > 2 ? 'vertical' : 'horizontal';
    }
  };

  return React.createElement("div", {
    className: classNames(baseClassName, className, "Tabbar--l-".concat(getItemsLayout()), {
      'Tabbar--shadow': shadow
    }),
    style: {
      paddingBottom: isNumeric(insets.bottom) ? insets.bottom : null
    }
  }, children);
};

Tabbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow: PropTypes.bool,
  itemsLayout: PropTypes.oneOf(['vertical', 'horizontal', 'auto']),

  /**
   * @ignore
   */
  insets: PropTypes.object
};
Tabbar.defaultProps = {
  shadow: true
};
export default withInsets(Tabbar);
//# sourceMappingURL=Tabbar.js.map