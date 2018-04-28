// General checks

/** @const {boolean} exists check whether nOS is defined */
export const exists = !!window.NOS && !!window.NOS.V1;

/** @const {object} nos bind nOS api to variable */
const nos = exists ? window.NOS.V1 : undefined;

// Wallet Actions

/**
 * @function getAddress
 * @param {object} options options object with fallback function
 */
export const getAddress = options => (exists ? nos.getAddress() : options.fallback());

/**
 * @function getAddress
 * @param {scriptHash} string target scriptHash
 * @param {object} options options object with fallback function
 */
export const getBalance = (scriptHash, options) =>
  exists ? nos.getBalance(scriptHash) : options.fallback(scriptHash);

/**
 * @function claimGas
 * @param {object} options options object with fallback function
 */
export const claimGas = options => (exists ? nos.claimGas() : options.fallback());

/**
 * @function send
 * @param {asset} string asset name
 * @param {number} amount amount of assets you're sending
 * @param {receiver} string scriptHash of receiver
 * @param {object} options options object with fallback function
 */
export const send = (asset, amount, receiver, options) =>
  exists ? nos.send(asset, amount, receiver) : options.fallback(asset, amount, receiver);

// Smart Contract Actions

/**
 * @function testInvoke
 * @param {string} scriptHash contract scriptHash
 * @param {string} operation invoke operation
 * @param {array} args invoke arguments
 * @param {object} options options object with fallback function
 */
export const testInvoke = (scriptHash, operation, args, options) =>
  exists
    ? nos.testInvoke(scriptHash, operation, ...args)
    : options.fallback(scriptHash, operation, ...args);

/**
 * @function invoke
 * @param {string} scriptHash contract scriptHash
 * @param {string} operation invoke operation
 * @param {array} args invoke arguments
 * @param {object} options options object with fallback function
 */
export const invoke = (scriptHash, operation, args, options) =>
  exists ? nos.invoke(scriptHash, operation, args) : options.fallback(scriptHash, operation, args);

/**
 * @function getStorage
 * @param {string} scriptHash contract scriptHash
 * @param {string} key storage key
 * @param {object} options options object with fallback function
 */
export const getStorage = (scriptHash, key, options = { encode: true, fallback: undefined }) =>
  exists ? nos.getStorage(scriptHash, key, options) : options.fallback(scriptHash, key, options);
