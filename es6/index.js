/**
 * @nosplatform/api-functions
 * API bindings (with fallback) and types for nOS dApps
 * @author Jeroen Peeters <contact@nos.io>
 */

import {
  claimGas,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
} from "./bindings";
import { exists } from "./lib";

export default {
  claimGas,
  exists,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
};
