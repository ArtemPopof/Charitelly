import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import vkConnect from '@vkontakte/vk-connect';
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

vkConnect.subscribe(function (e) {
  var insets = resolveInsets(e);

  if (insets) {
    initialState = insets;
  }
});
export default function withInsets(Component) {
  var WithInsets =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithInsets, _React$Component);

    function WithInsets() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithInsets);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithInsets)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", initialState);

      _defineProperty(_assertThisInitialized(_this), "connectListener", function (e) {
        var insets = resolveInsets(e);

        if (insets) {
          _this.setState(insets);
        }
      });

      return _this;
    }

    _createClass(WithInsets, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        vkConnect.subscribe(this.connectListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        vkConnect.unsubscribe(this.connectListener);
      }
    }, {
      key: "render",
      value: function render() {
        return (// @ts-ignore
          React.createElement(Component, _extends({}, this.props, {
            insets: this.state
          }))
        );
      }
    }]);

    return WithInsets;
  }(React.Component);

  return WithInsets;
}
//# sourceMappingURL=withInsets.js.map