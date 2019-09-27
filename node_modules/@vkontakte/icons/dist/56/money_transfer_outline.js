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
var id = 'money_transfer_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="money_transfer_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M44.879 39l-5.44-5.44a1.5 1.5 0 0 1 2.122-2.12l8 8a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.122-2.12L44.88 42H13.692c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 0 1-2.268-2.268C6.278 37.953 6 36.983 6 34.308V15.692c0-2.675.278-3.645.801-4.623A5.452 5.452 0 0 1 9.07 8.801C10.047 8.278 11.017 8 13.692 8h28.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623V32.5a1.5 1.5 0 0 1-3 0V21H9v14.154c0 1.337.14 1.822.4 2.311.262.49.646.873 1.135 1.134.489.262.974.401 2.31.401H44.88zM47 18v-3.154c0-1.337-.14-1.822-.4-2.311a2.726 2.726 0 0 0-1.135-1.134c-.489-.262-.974-.401-2.31-.401h-30.31c-1.336 0-1.821.14-2.31.4A2.726 2.726 0 0 0 9.4 12.536c-.262.489-.401.974-.401 2.31V18h38z" fill="currentColor" /></g></symbol>';

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