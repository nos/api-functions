"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** @const {boolean} exists check whether nOS is defined */
var exists = !!window.NOS;
var _default = exists;
exports.default = _default;