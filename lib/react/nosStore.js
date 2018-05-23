"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectNOS = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

var _bindings = require("./../bindings");

var _lib = require("./../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var nos = {
  claimGas: _bindings.claimGas,
  exists: _lib.exists,
  getAddress: _bindings.getAddress,
  getBalance: _bindings.getBalance,
  getStorage: _bindings.getStorage,
  invoke: _bindings.invoke,
  send: _bindings.send,
  testInvoke: _bindings.testInvoke
};

var _React$createContext = _react.default.createContext(nos),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Consumer = Consumer;

var injectNOS = function injectNOS(Component) {
  return function (props) {
    return _react.default.createElement(Consumer, null, function (context) {
      return _react.default.createElement(Component, _extends({
        nos: context
      }, props));
    });
  };
};

exports.injectNOS = injectNOS;