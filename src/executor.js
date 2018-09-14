import exists from "./exists";

/** @const {object} nos bind nOS api to variable */
const nos = exists ? window.NOS.V1 : undefined;

/**
 * @function useFallback
 * @param {function} fallback checks if fallback function exists, otherwise return nothing
 * @param {object} args potential arguments that are passed along
 */
const useFallback = (fallback, args) => fallback ? fallback(args) : undefined;

/** @function executor executes the nOS API function */
const executor = (func, fallback, config) => (
  exists ? nos[func](config) : useFallback(fallback, config)
);

export default executor;
