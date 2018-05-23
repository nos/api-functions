import PropTypes from "prop-types";

const nosProps = PropTypes.shape({
  exists: PropTypes.bool.isRequired,
  getAddress: PropTypes.func.isRequired,
  getBalance: PropTypes.func.isRequired,
  claimGas: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  testInvoke: PropTypes.func.isRequired,
  invoke: PropTypes.func.isRequired,
  getStorage: PropTypes.func.isRequired
});

export default nosProps;
