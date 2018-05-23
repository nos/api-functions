"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.react = exports.default = void 0;

var _bindings = require("./bindings");

var _lib = require("./lib");

var reactNamespace = _interopRequireWildcard(require("./react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * @nos/api-functions
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
var react = reactNamespace;
exports.react = react;