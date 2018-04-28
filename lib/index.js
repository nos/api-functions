"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nosPropTypes = exports.default = void 0;

var nos = _interopRequireWildcard(require("./bindings"));

var _props = _interopRequireDefault(require("./props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * @nos/api-functions
 * API bindings (with fallback) and types for nOS dApps
 * @author Jeroen Peeters <contact@nos.io>
 */
var _default = nos;
exports.default = _default;
var nosPropTypes = _props.default;
exports.nosPropTypes = nosPropTypes;