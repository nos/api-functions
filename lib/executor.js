"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** @const {boolean} exists check whether nOS is defined */
var exists = !!window.NOS && !!window.NOS.V1;
/** @const {object} nos bind nOS api to variable */

var nos = exists ? window.NOS.V1 : undefined;
/**
 * @function useFallback
 * @param {function} fallback checks if fallback function exists, otherwise return nothing
 * @param {object} args potential arguments that are passed along
 */

var useFallback = function useFallback(fallback, args) {
  return fallback ? fallback(args) : undefined;
};
/** @function executor executes the nOS API function */


var executor = function executor(func, fallback, config) {
  return exists ? nos[func](config) : useFallback(fallback, config);
};

var _default = executor;
exports.default = _default;