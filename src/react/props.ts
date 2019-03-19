import { bool, func, objectOf, shape, string } from "prop-types";

export const nosProps = shape({
  claimGas: func.isRequired,
  decrypt: func.isRequired,
  encrypt: func.isRequired,
  exists: bool.isRequired,
  getAddress: func.isRequired,
  getBalance: func.isRequired,
  getLastBlock: func.isRequired,
  getPublicKey: func.isRequired,
  getStorage: func.isRequired,
  invoke: func.isRequired,
  send: func.isRequired,
  testInvoke: func.isRequired
});

export const assetProps = objectOf(string);
