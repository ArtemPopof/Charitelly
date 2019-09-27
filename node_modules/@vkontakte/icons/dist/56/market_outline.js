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
var id = 'market_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="market_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M22 15h12a6 6 0 1 0-12 0zm15 0h.856c1.774 0 2.803.184 3.895.724a6.168 6.168 0 0 1 2.538 2.314c.639 1.038.917 2.045 1.08 3.812l1.613 17.412A8 8 0 0 1 39.016 48H16.984a8 8 0 0 1-7.966-8.738l1.613-17.412c.163-1.767.441-2.774 1.08-3.812a6.168 6.168 0 0 1 2.538-2.314c1.092-.54 2.12-.724 3.895-.724H19a9 9 0 0 1 18 0zm-18.856 3c-1.478 0-2.015.141-2.565.413-.55.272-.991.675-1.313 1.197-.321.523-.512 1.045-.648 2.517l-1.612 17.412A5 5 0 0 0 16.984 45h22.032a5 5 0 0 0 4.978-5.461l-1.612-17.412c-.136-1.472-.327-1.994-.648-2.517a3.169 3.169 0 0 0-1.313-1.197c-.55-.272-1.087-.413-2.565-.413H18.144z" fill="currentColor" /></g></symbol>';

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