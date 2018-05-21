/**
 * @nos/api-functions
 * API bindings (with fallback) and types for nOS dApps
 * @author Jeroen Peeters <contact@nos.io>
 */

import * as nos from "./bindings";
import { exists } from "./lib";
import nosProps from "./props";

export default { exists, ...nos };
export const react = { nosProps };
