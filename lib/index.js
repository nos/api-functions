"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bindings = require("./bindings");

var _lib = require("./lib");

/**
 * @nosplatform/api-functions
 * API bindings (with fallback) and types for nOS dApps
 * @author Jeroen Peeters <contact@nos.io>
 */
var _default = {
  claimGas: _bindings.claimGas,
  exists: _lib.exists,
  getAddress: _bindings.getAddress,
  getBalance: _bindings.getBalance,
  getStorage: _bindings.getStorage,
  invoke: _bindings.invoke,
  send: _bindings.send,
  testInvoke: _bindings.testInvoke
};
exports.default = _default;