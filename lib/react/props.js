"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nosProps = _propTypes.default.shape({
  exists: _propTypes.default.bool.isRequired,
  getAddress: _propTypes.default.func.isRequired,
  getBalance: _propTypes.default.func.isRequired,
  claimGas: _propTypes.default.func.isRequired,
  send: _propTypes.default.func.isRequired,
  testInvoke: _propTypes.default.func.isRequired,
  invoke: _propTypes.default.func.isRequired,
  getStorage: _propTypes.default.func.isRequired
});

var _default = nosProps;
exports.default = _default;