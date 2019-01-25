import { bool, func, string, shape, objectOf } from "prop-types";

export const nosProps = shape({
  exists: bool.isRequired,
  getAddress: func.isRequired,
  getBalance: func.isRequired,
  getLastBlock: func.isRequired,
  claimGas: func.isRequired,
  send: func.isRequired,
  testInvoke: func.isRequired,
  invoke: func.isRequired,
  getStorage: func.isRequired,
  getPublicKey: func.isRequired,
  encrypt: func.isRequired,
  decrypt: func.isRequired
});

export const assetProps = objectOf(string);
