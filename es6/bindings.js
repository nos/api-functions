import { useFallback, executor, exists, nos } from "./lib";

// Wallet Actions

/**
 * @function getAddress
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const getAddress = fallback => executor('getAddress', fallback);

/**
 * @function getBalance
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const getBalance = (config, fallback) => executor('getBalance', fallback, config);

/**
 * @function claimGas
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const claimGas = fallback => executor('claimGas', fallback);

/**
 * @function send
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const send = (config, fallback) => executor('send', fallback, config);

// Smart Contract Actions

/**
 * @function testInvoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const testInvoke = (config, fallback) => executor('testInvoke', fallback, config);

/**
 * @function invoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const invoke = (config, fallback) => executor('invoke', fallback, config);

/**
 * @function getStorage
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
export const getStorage = (config, fallback) => executor('getStorage', fallback, config);
