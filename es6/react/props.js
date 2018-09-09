import { func, shape } from "prop-types";

const nosProps = shape({
  getAddress: func.isRequired,
  getBalance: func.isRequired,
  claimGas: func.isRequired,
  send: func.isRequired,
  testInvoke: func.isRequired,
  invoke: func.isRequired,
  getStorage: func.isRequired
});

export default nosProps;
