"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nosPropTypes = exports.default = void 0;

var _bindings = _interopRequireDefault(require("./bindings"));

var _props = _interopRequireDefault(require("./props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @nos/api-functions
 * API bindings (with fallback) and types for nOS dApps
 * @author Jeroen Peeters <contact@nos.io>
 */
var _default = _bindings.default;
exports.default = _default;
var nosPropTypes = _props.default;
exports.nosPropTypes = nosPropTypes;