"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var nosProps = (0, _propTypes.shape)({
  getAddress: _propTypes.func.isRequired,
  getBalance: _propTypes.func.isRequired,
  claimGas: _propTypes.func.isRequired,
  send: _propTypes.func.isRequired,
  testInvoke: _propTypes.func.isRequired,
  invoke: _propTypes.func.isRequired,
  getStorage: _propTypes.func.isRequired
});
var _default = nosProps;
exports.default = _default;