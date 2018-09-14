import React from "react";

import { nos, assets } from "../";

export const injectNOS = Component => props => (
  <Component {...props} nos={nos} />
);

export const injectAssets = Component => props => (
  <Component {...props} assets={assets} />
);
