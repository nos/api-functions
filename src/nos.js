import exists from "./exists";
import executor from "./executor";

// Wallet Actions

/**
 * @function getAddress
 * @param {function} fallback fallback function if outside of nOS browser
 */
const getAddress = fallback => executor("getAddress", fallback);

/**
 * @function getBalance
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const getBalance = (config, fallback) => executor("getBalance", fallback, config);

/**
 * @function getLastBlock
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const getLastBlock = fallback => executor("getLastBlock", fallback);

/**
 * @function claimGas
 * @param {function} fallback fallback function if outside of nOS browser
 */
const claimGas = fallback => executor("claimGas", fallback);

/**
 * @function send
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const send = (config, fallback) => executor("send", fallback, config);

// Smart Contract Actions

/**
 * @function testInvoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const testInvoke = (config, fallback) => executor("testInvoke", fallback, config);

/**
 * @function invoke
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const invoke = (config, fallback) => executor("invoke", fallback, config);

/**
 * @function getStorage
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const getStorage = (config, fallback) => executor("getStorage", fallback, config);

/**
 * @function getPublicKey
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const getPublicKey = (config, fallback) => executor("getPublicKey", fallback, config);

/**
 * @function encrypt
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const encrypt = (config, fallback) => executor("encrypt", fallback, config);

/**
 * @function decrypt
 * @param {object} config All possible arguments and flags are passed as childs of this object
 * @param {function} fallback fallback function if outside of nOS browser
 */
const decrypt = (config, fallback) => executor("decrypt", fallback, config);


const nos = {
  claimGas,
  exists,
  getAddress,
  getBalance,
  getLastBlock,
  getStorage,
  invoke,
  send,
  testInvoke,
  getPublicKey,
  encrypt,
  decrypt
};

export default nos;
