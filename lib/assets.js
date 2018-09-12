"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** @const {boolean} exists check whether assets constant is defined */
var exists = !!window.NOS && !!window.NOS.ASSETS;
/** @const {object} assets bind assets constant to variable */

var assets = exists ? window.NOS.ASSETS : {
  NEO: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
  GAS: '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7'
};
var _default = assets;
exports.default = _default;