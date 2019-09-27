import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
var baseClassName = getClassName('ModalPage');

var ModalPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalPage, _Component);

  function ModalPage() {
    _classCallCheck(this, ModalPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalPage).apply(this, arguments));
  }

  _createClass(ModalPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          header = _this$props.header,
          insets = _this$props.insets;
      return React.createElement("div", {
        className: classNames(baseClassName)
      }, React.createElement("div", {
        className: "ModalPage__in-wrap"
      }, React.createElement("div", {
        className: "ModalPage__in"
      }, React.createElement("div", {
        className: "ModalPage__header"
      }, header), React.createElement("div", {
        className: "ModalPage__content"
      }, React.createElement("div", {
        className: "ModalPage__content-in",
        style: isNumeric(insets.bottom) ? {
          paddingBottom: insets.bottom
        } : null
      }, children)))));
    }
  }]);

  return ModalPage;
}(Component);

_defineProperty(ModalPage, "propTypes", {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,

  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,

  /**
   * Процент, на который изначально будет открыта модальная страница
   */
  settlingHeight: PropTypes.number,

  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight: PropTypes.bool,

  /**
   * @ignore
   */
  insets: PropTypes.object
});

_defineProperty(ModalPage, "defaultProps", {
  settlingHeight: 75,
  insets: {}
});

export default withInsets(ModalPage);
//# sourceMappingURL=ModalPage.js.map