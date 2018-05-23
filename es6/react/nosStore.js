import React from "react";

const { Provider, Consumer } = React.createContext(nos);

const injectNOS = Component => props => (
  <Consumer>{context => <Component nos={context} {...props} />}</Consumer>
);

export { Consumer, injectNOS };
