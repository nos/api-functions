<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/36414779?s=200&v=4" width="150px" height="auto" />
</p>

<h1 align="center">@nosplatform/api-functions</h1>
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
Wrap your component with the higher-order components to provide fallbacks when running outside the
context of the [nOS client](https://github.com/nos/client).  Specify `propTypes` provided by this
package.

```js
import React from 'react';
import { compose } from 'recompose';
import { injectNOS, injectAssets, nosProps } from "@nosplatform/api-functions/lib/react";

class ShowBalance extends React.Component {
  static propTypes = {
    nos: nosProps.isRequired
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

In addition to automatically providing the NOS API function as a prop to your React component, the
api-functions package also provides the opportunity to specify a fallback implementation.  This is
especially useful for building in the context of another browser if not wanting to use the nOS
client for any reason.

```js
const balance = await nos.getBalance({ asset: assets.NEO }, () => '23');
console.log('NEO Balance:', balance);  // NEO Balance: 23
```
