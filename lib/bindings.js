"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStorage = exports.invoke = exports.testInvoke = exports.send = exports.claimGas = exports.getBalance = exports.getAddress = exports.exists = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// General checks

/** @const {boolean} exists check whether nOS is defined */
var exists = !!window.NOS && !!window.NOS.V1;
/** @const {object} nos bind nOS api to variable */

exports.exists = exists;
var nos = exists ? window.NOS.V1 : undefined; // Wallet Actions

/**
 * @function getAddress
 * @param {object} options options object with fallback function
 */

var getAddress = function getAddress(options) {
  return exists ? nos.getAddress() : options.fallback();
};
/**
 * @function getAddress
 * @param {scriptHash} string target scriptHash
 * @param {object} options options object with fallback function
 */


exports.getAddress = getAddress;

var getBalance = function getBalance(scriptHash, options) {
  return exists ? nos.getBalance(scriptHash) : options.fallback(scriptHash);
};
/**
 * @function claimGas
 * @param {object} options options object with fallback function
 */


exports.getBalance = getBalance;

var claimGas = function claimGas(options) {
  return exists ? nos.claimGas() : options.fallback();
};
/**
 * @function send
 * @param {asset} string asset name
 * @param {number} amount amount of assets you're sending
 * @param {receiver} string scriptHash of receiver
 * @param {object} options options object with fallback function
 */


exports.claimGas = claimGas;

var send = function send(asset, amount, receiver, options) {
  return exists ? nos.send(asset, amount, receiver) : options.fallback(asset, amount, receiver);
}; // Smart Contract Actions

/**
 * @function testInvoke
 * @param {string} scriptHash contract scriptHash
 * @param {string} operation invoke operation
 * @param {array} args invoke arguments
 * @param {object} options options object with fallback function
 */


exports.send = send;

var testInvoke = function testInvoke(scriptHash, operation, args, options) {
  return exists ? nos.testInvoke.apply(nos, [scriptHash, operation].concat(_toConsumableArray(args))) : options.fallback.apply(options, [scriptHash, operation].concat(_toConsumableArray(args)));
};
/**
 * @function invoke
 * @param {string} scriptHash contract scriptHash
 * @param {string} operation invoke operation
 * @param {array} args invoke arguments
 * @param {object} options options object with fallback function
 */


exports.testInvoke = testInvoke;

var invoke = function invoke(scriptHash, operation, args, options) {
  return exists ? nos.invoke.apply(nos, [scriptHash, operation].concat(_toConsumableArray(args))) : options.fallback.apply(options, [scriptHash, operation].concat(_toConsumableArray(args)));
};
/**
 * @function getStorage
 * @param {string} scriptHash contract scriptHash
 * @param {string} key storage key
 * @param {object} options options object with fallback function
 */


exports.invoke = invoke;

var getStorage = function getStorage(scriptHash, key) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    encode: true,
    fallback: undefined
  };
  return exists ? nos.getStorage(scriptHash, key, options) : options.fallback(scriptHash, key, options);
};

exports.getStorage = getStorage;