"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStorage = exports.invoke = exports.testInvoke = exports.send = exports.claimGas = exports.getBalance = exports.getAddress = void 0;

var _lib = require("./lib");

// Wallet Actions

/**
 * @function getAddress
 * @param {function} fallback fallback function if outside of nOS browser
 */
var getAddress = function getAddress(fallback) {
  return (0, _lib.executor)('getAddress', fallback);
};
/**
 * @function getBalance
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


exports.getAddress = getAddress;

var getBalance = function getBalance(config, fallback) {
  return (0, _lib.executor)('getBalance', fallback, config);
};
/**
 * @function claimGas
 * @param {function} fallback fallback function if outside of nOS browser
 */


exports.getBalance = getBalance;

var claimGas = function claimGas(fallback) {
  return (0, _lib.executor)('claimGas', fallback);
};
/**
 * @function send
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


exports.claimGas = claimGas;

var send = function send(config, fallback) {
  return (0, _lib.executor)('send', fallback, config);
}; // Smart Contract Actions

/**
 * @function testInvoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


exports.send = send;

var testInvoke = function testInvoke(config, fallback) {
  return (0, _lib.executor)('testInvoke', fallback, config);
};
/**
 * @function invoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


exports.testInvoke = testInvoke;

var invoke = function invoke(config, fallback) {
  return (0, _lib.executor)('invoke', fallback, config);
};
/**
 * @function getStorage
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */


exports.invoke = invoke;

var getStorage = function getStorage(config, fallback) {
  return (0, _lib.executor)('getStorage', fallback, config);
};

exports.getStorage = getStorage;