import * as React from "react";

import { assets, nos } from "../index";

export const injectNOS = (Component: any) => (props: any) => <Component {...props} nos={nos} />;

export const injectAssets = (Component: any) => (props: any) => (
  <Component {...props} assets={assets} />
);
