import React from "react";

import {
  claimGas,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
} from "./../bindings";
import { exists } from "./../lib";

const nos = {
  claimGas,
  exists,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
};

const { Provider, Consumer } = React.createContext(nos);

const injectNOS = Component => props => (
  <Consumer>{context => <Component nos={context} {...props} />}</Consumer>
);

export { Consumer, injectNOS };
