"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _exists = _interopRequireDefault(require("./exists"));

var _executor = _interopRequireDefault(require("./executor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Wallet Actions

/**
 * @function getAddress
 * @param {function} fallback fallback function if outside of nOS browser
 */
var getAddress = function getAddress(fallback) {
  return (0, _executor.default)("getAddress", fallback);
};
/**
 * @function getBalance
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


var getBalance = function getBalance(config, fallback) {
  return (0, _executor.default)("getBalance", fallback, config);
};
/**
 * @function getLastBlock
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


var getLastBlock = function getLastBlock(config, fallback) {
  return (0, _executor.default)("getLastBlock", fallback, config);
};
/**
 * @function claimGas
 * @param {function} fallback fallback function if outside of nOS browser
 */


var claimGas = function claimGas(fallback) {
  return (0, _executor.default)("claimGas", fallback);
};
/**
 * @function send
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


var send = function send(config, fallback) {
  return (0, _executor.default)("send", fallback, config);
}; // Smart Contract Actions

/**
 * @function testInvoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


var testInvoke = function testInvoke(config, fallback) {
  return (0, _executor.default)("testInvoke", fallback, config);
};
/**
 * @function invoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


var invoke = function invoke(config, fallback) {
  return (0, _executor.default)("invoke", fallback, config);
};
/**
 * @function getStorage
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


var getStorage = function getStorage(config, fallback) {
  return (0, _executor.default)("getStorage", fallback, config);
};

var nos = {
  claimGas: claimGas,
  exists: _exists.default,
  getAddress: getAddress,
  getBalance: getBalance,
  getLastBlock: getLastBlock,
  getStorage: getStorage,
  invoke: invoke,
  send: send,
  testInvoke: testInvoke
};
var _default = nos;
exports.default = _default;