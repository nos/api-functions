import { mount } from "enzyme";
import * as React from "react";

import { injectAssets, injectNOS, NosAssets, NosFunctions } from "../inject";

describe("inject", () => {
  it("should add nos to the wrapped component's props", () => {
    const MyComponent = () => <div />;
    MyComponent.displayName = "MyComponent";

    const MyWrappedComponent = injectNOS(MyComponent);

    const wrapper = mount(<MyWrappedComponent />);
    expect(wrapper).toMatchSnapshot();
    expect(Object.keys(wrapper.find("MyComponent").props())).toEqual(["nos"]);
  });

  it("should add assets to the wrapped component's props", () => {
    const MyComponent = () => <div />;
    MyComponent.displayName = "MyComponent";

    const MyWrappedComponent = injectAssets(MyComponent);

    const wrapper = mount(<MyWrappedComponent />);
    expect(wrapper).toMatchSnapshot();
    expect(Object.keys(wrapper.find("MyComponent").props())).toEqual(["assets"]);
  });
});

describe("NosX", () => {
  it("should add nos via render props", () => {
    const MyComponent = () => <div />;
    MyComponent.displayName = "MyComponent";

    const MyWrappedComponent = () => (
      <NosFunctions>{(props: any) => <MyComponent {...props} />}</NosFunctions>
    );

    const wrapper = mount(<MyWrappedComponent />);
    expect(wrapper).toMatchSnapshot();
    expect(Object.keys(wrapper.find("MyComponent").props())).toEqual(["nos"]);
  });

  it("should add assets to the wrapped component's props", () => {
    const MyComponent = () => <div />;
    MyComponent.displayName = "MyComponent";

    const MyWrappedComponent = () => (
      <NosAssets>{(props: any) => <MyComponent {...props} />}</NosAssets>
    );

    const wrapper = mount(<MyWrappedComponent />);
    expect(wrapper).toMatchSnapshot();
    expect(Object.keys(wrapper.find("MyComponent").props())).toEqual(["assets"]);
  });
});
