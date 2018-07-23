"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectNOS = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var injectNOS = function injectNOS(Component) {
  return function (props) {
    return _react.default.createElement(Component, _extends({
      nos: _.default
    }, props));
  };
};

exports.injectNOS = injectNOS;