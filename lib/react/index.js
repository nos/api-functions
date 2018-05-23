"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _props = _interopRequireDefault(require("./props"));

var _nosStore = require("./nosStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Consumer: _nosStore.Consumer,
  injectNOS: _nosStore.injectNOS,
  nosProps: _props.default
};
exports.default = _default;