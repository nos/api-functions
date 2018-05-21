"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFallback = exports.executor = exports.nos = exports.exists = void 0;

/** @const {boolean} exists check whether nOS is defined */
var exists = !!window.NOS && !!window.NOS.V1;
/** @const {object} nos bind nOS api to variable */

exports.exists = exists;
var nos = exists ? window.NOS.V1 : undefined;
/** @function executor executes the nOS API function */

exports.nos = nos;

var executor = function executor(func, fallback, config) {
  return exists ? nos[func](config) : useFallback(fallback, config);
};
/**
 * @function useFallback 
 * @param {function} fallback checks if fallback function exists, otherwise return nothing
 * @param {object} args potential arguments that are passed along
 */


exports.executor = executor;

var useFallback = function useFallback(fallback, args) {
  return fallback ? fallback(args) : undefined;
};

exports.useFallback = useFallback;