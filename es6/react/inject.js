import React from "react";

import nos from "../";

const injectNOS = Component => props => (
  <Component nos={nos} {...props} />
);

export { injectNOS };
