"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserSymbol = _interopRequireDefault(require("svg-baker-runtime/browser-symbol"));

var _es6ObjectAssign = require("es6-object-assign");

var _sprite = _interopRequireDefault(require("../sprite"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 56 56';
var id = 'mail_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="mail_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M10.01 19.045l17.361 8.013a1.5 1.5 0 0 0 1.258 0l17.361-8.013c-.039-1.687-.202-2.361-.57-3.05a3.362 3.362 0 0 0-1.416-1.415c-.802-.429-1.586-.58-3.978-.58H15.974c-2.392 0-3.176.151-3.978.58a3.362 3.362 0 0 0-1.416 1.416c-.368.688-.531 1.362-.57 3.049zm-.01 3.3v13.681c0 2.392.151 3.176.58 3.978.33.618.798 1.085 1.416 1.416.802.429 1.586.58 3.978.58h24.052c2.392 0 3.176-.151 3.978-.58a3.362 3.362 0 0 0 1.416-1.416c.429-.802.58-1.586.58-3.978V22.344l-16.114 7.438a4.5 4.5 0 0 1-3.772 0L10 22.344zm39-2.379v16.06c0 3.12-.325 4.252-.935 5.393a6.36 6.36 0 0 1-2.646 2.646c-1.14.61-2.272.935-5.393.935H15.974c-3.12 0-4.252-.325-5.393-.935a6.36 6.36 0 0 1-2.646-2.646C7.325 40.279 7 39.147 7 36.026V20.032v-.066c0-3.115.325-4.245.935-5.385a6.36 6.36 0 0 1 2.646-2.646c1.14-.61 2.272-.935 5.393-.935h24.052c3.12 0 4.252.325 5.393.935a6.36 6.36 0 0 1 2.646 2.646c.61 1.14.934 2.27.935 5.385z" fill="currentColor" /></g></symbol>';

if (_sprite.default) {
  var browserSymbol = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;