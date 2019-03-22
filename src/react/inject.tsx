import * as React from "react";

import { assets, nos } from "../index";
import ApiFunctions from "../nos";

export const injectNOS = (Component: any) => (props: any) => <Component {...props} nos={nos} />;

export const injectAssets = (Component: any) => (props: any) => (
  <Component {...props} assets={assets} />
);

export const NosFunctions: React.SFC<{}> = ({ children }: { children: any }) => children({ nos });

export const NosAssets: React.SFC<{}> = ({ children }: { children: any }) => children({ assets });
