"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _utils = require("../../lib/utils");

var baseClassName = (0, _getClassName.default)('ModalPage');

var ModalPage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ModalPage, _Component);

  function ModalPage() {
    (0, _classCallCheck2.default)(this, ModalPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModalPage).apply(this, arguments));
  }

  (0, _createClass2.default)(ModalPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          header = _this$props.header,
          insets = _this$props.insets;
      return _react.default.createElement("div", {
        className: (0, _classNames.default)(baseClassName)
      }, _react.default.createElement("div", {
        className: "ModalPage__in-wrap"
      }, _react.default.createElement("div", {
        className: "ModalPage__in"
      }, _react.default.createElement("div", {
        className: "ModalPage__header"
      }, header), _react.default.createElement("div", {
        className: "ModalPage__content"
      }, _react.default.createElement("div", {
        className: "ModalPage__content-in",
        style: (0, _utils.isNumeric)(insets.bottom) ? {
          paddingBottom: insets.bottom
        } : null
      }, children)))));
    }
  }]);
  return ModalPage;
}(_react.Component);

(0, _defineProperty2.default)(ModalPage, "propTypes", {
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,

  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header: _propTypes.default.node.isRequired,
  onClose: _propTypes.default.func.isRequired,

  /**
   * Процент, на который изначально будет открыта модальная страница
   */
  settlingHeight: _propTypes.default.number,

  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight: _propTypes.default.bool,

  /**
   * @ignore
   */
  insets: _propTypes.default.object
});
(0, _defineProperty2.default)(ModalPage, "defaultProps", {
  settlingHeight: 75,
  insets: {}
});

var _default = (0, _withInsets.default)(ModalPage);

exports.default = _default;
//# sourceMappingURL=ModalPage.js.map