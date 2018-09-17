"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetProps = exports.nosProps = void 0;

var _propTypes = require("prop-types");

var nosProps = (0, _propTypes.shape)({
  exists: _propTypes.bool.isRequired,
  getAddress: _propTypes.func.isRequired,
  getBalance: _propTypes.func.isRequired,
  getLastBlock: _propTypes.func.isRequired,
  claimGas: _propTypes.func.isRequired,
  send: _propTypes.func.isRequired,
  testInvoke: _propTypes.func.isRequired,
  invoke: _propTypes.func.isRequired,
  getStorage: _propTypes.func.isRequired
});
exports.nosProps = nosProps;
var assetProps = (0, _propTypes.objectOf)(_propTypes.string);
exports.assetProps = assetProps;