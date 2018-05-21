/** @const {boolean} exists check whether nOS is defined */
export const exists = !!window.NOS && !!window.NOS.V1;

/** @const {object} nos bind nOS api to variable */
export const nos = exists ? window.NOS.V1 : undefined;

/** @function executor executes the nOS API function */
export const executor = (func, fallback, config) =>
  exists ? nos[func](config) : useFallback(fallback, config);

/**
 * @function useFallback 
 * @param {function} fallback checks if fallback function exists, otherwise return nothing
 * @param {object} args potential arguments that are passed along
 */
export const useFallback = (fallback, args) => fallback ? fallback(args) : undefined;
