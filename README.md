<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/36414779?s=200&v=4" width="150px" height="auto" />
</p>

<h1 align="center">@nosplatform/api-functions</h1>
<p align="center">
  <a href="https://circleci.com/gh/nos/api-functions">
    <img src="https://circleci.com/gh/nos/api-functions.svg?style=svg">
  </a>
  <a href="https://codecov.io/gh/nos/api-functions">
    <img src="https://codecov.io/gh/nos/api-functions/branch/master/graph/badge.svg" />
  </a>
</p>
<p align="center">
  <strong>nOS</strong> API bindings and types
</p>

---

## installation

```
npm i --save @nosplatform/api-functions
yarn add @nosplatform/api-functions
```

## Usage in react

### HoC

Wrap your component with the higher-order components to provide fallbacks when running outside the
context of the [nOS client](https://github.com/nos/client). Specify `propTypes` provided by this
package.

```js
import React from 'react';
import { compose } from 'recompose';
import { injectNOS, injectAssets, nosProps, assetProps } from "@nosplatform/api-functions/lib/react";

class ShowBalance extends React.Component {
  static propTypes = {
    nos: nosProps.isRequired,
    assets: assetProps.isRequired
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Show NEO Balance
      </button>
    );
  }

  async handleClick = () => {
    const { nos, assets } = this.props;
    const balance = await nos.getBalance({ asset: assets.NEO });
    console.log('NEO Balance:', balance);
  }
};

export default compose(
  injectNOS,
  injectAssets
)(ShowBalance);
```

### Render Props

```js
import React from 'react';
import { NosAssets, NosFunctions } from "@nosplatform/api-functions/lib/react";

const ShowBalance = () => {
  render() {
    const handleClick = async (nos, assets) => {
      const balance = await nos.getBalance({ asset: assets.NEO });
      console.log('NEO Balance:', balance);
    }

    return (
      <NosFunctions>
        {({ nos }) => (
          <NosAssets>
            {({ assets }) => (
              <button type="button" onClick={() => handleClick(nos, assets)}>
                Show NEO Balance
              </button>
            )}
          </NosAssets>
        )}
      </NosFunctions>
    );
  }
};

export default ShowBalance;
```

### Hooks

```js
import React from 'react';
import { compose } from 'recompose';
import { useNOS, useAssets } from "@nosplatform/api-functions/lib/react";

const ShowBalance = () => {
  render() {
    const nos = useNOS();
    const assets = useAssets();

    const handleClick = async () => {
      const balance = await nos.getBalance({ asset: assets.NEO });
      console.log('NEO Balance:', balance);
    }

    return (
      <button type="button" onClick={handleClick}>
        Show NEO Balance
      </button>
    );
  }
};

export default ShowBalance;
```

In addition to automatically providing the NOS API function as a prop to your React component, the
api-functions package also provides the opportunity to specify a fallback implementation. This is
especially useful for building in the context of another browser if not wanting to use the nOS
client for any reason.

```js
const previousBalance = "23"; // Calculated previous balance
const balance = await nos.getBalance({ asset: assets.NEO }, () => Promise.resolve(previousBalance));
console.log("NEO Balance:", balance); // NEO Balance: 23
```
