"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withInsets;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _vkConnect = _interopRequireDefault(require("@vkontakte/vk-connect"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  bottom: null,
  top: null,
  left: null,
  right: null
};

function resolveInsets(e) {
  var _e$detail = e.detail,
      type = _e$detail.type,
      data = _e$detail.data;

  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets':
      // Устаревшее событие vk-connect
      var insets = data.insets;

      if (insets) {
        return _objectSpread({}, insets, {
          bottom: insets.bottom > 100 ? 0 : insets.bottom // если больше 100 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить

        });
      }

  }
}

_vkConnect.default.subscribe(function (e) {
  var insets = resolveInsets(e);

  if (insets) {
    initialState = insets;
  }
});

function withInsets(Component) {
  var WithInsets =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(WithInsets, _React$Component);

    function WithInsets() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, WithInsets);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithInsets)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", initialState);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "connectListener", function (e) {
        var insets = resolveInsets(e);

        if (insets) {
          _this.setState(insets);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(WithInsets, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        _vkConnect.default.subscribe(this.connectListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _vkConnect.default.unsubscribe(this.connectListener);
      }
    }, {
      key: "render",
      value: function render() {
        return (// @ts-ignore
          _react.default.createElement(Component, (0, _extends2.default)({}, this.props, {
            insets: this.state
          }))
        );
      }
    }]);
    return WithInsets;
  }(_react.default.Component);

  return WithInsets;
}
//# sourceMappingURL=withInsets.js.map