import { default as NosRoot } from "../nos";

type NOS = typeof NosRoot;

const MockedNos = {
  claimGas: jest.fn(),
  decrypt: jest.fn(),
  encrypt: jest.fn(),
  getAddress: jest.fn(),
  getBalance: jest.fn(),
  getLastBlock: jest.fn(),
  getPublicKey: jest.fn(),
  getStorage: jest.fn(),
  invoke: jest.fn(),
  off: jest.fn(),
  on: jest.fn(),
  once: jest.fn(),
  send: jest.fn(),
  testInvoke: jest.fn()
};

const genericConfig: any = {};

describe("assets", () => {
  function reqDeps() {
    const { default: nos } = require("../nos");
    return nos;
  }

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();

    (global as any).NOS = undefined;
  });

  it("should still return even when nos does not exist in window", () => {
    const nos = reqDeps();
    expect(typeof nos).toBe(typeof NosRoot);
    expect(nos.exists).toBeFalsy();
  });

  it("should use mocked functions", () => {
    (global as any).NOS = { V1: MockedNos };
    const nos: NOS = reqDeps();

    nos.claimGas();
    nos.decrypt(genericConfig);
    nos.encrypt(genericConfig);
    nos.getAddress();
    nos.getBalance(genericConfig);
    nos.getLastBlock();
    nos.getPublicKey();
    nos.getStorage(genericConfig);
    nos.invoke(genericConfig);
    nos.send(genericConfig);
    nos.testInvoke(genericConfig);

    expect(MockedNos.claimGas).toBeCalled();
    expect(MockedNos.decrypt).toBeCalled();
    expect(MockedNos.encrypt).toBeCalled();
    expect(MockedNos.getAddress).toBeCalled();
    expect(MockedNos.getBalance).toBeCalled();
    expect(MockedNos.getLastBlock).toBeCalled();
    expect(MockedNos.getPublicKey).toBeCalled();
    expect(MockedNos.getStorage).toBeCalled();
    expect(MockedNos.invoke).toBeCalled();
    expect(MockedNos.send).toBeCalled();
    expect(MockedNos.testInvoke).toBeCalled();

    expect(nos.off).not.toBeUndefined();
    expect(nos.on).not.toBeUndefined();
    expect(nos.once).not.toBeUndefined();
  });

  it("should use fallback function", () => {
    const nos: NOS = reqDeps();

    const mockFunc = jest.fn();

    nos.claimGas(mockFunc);
    nos.decrypt(genericConfig, mockFunc);
    nos.encrypt(genericConfig, mockFunc);
    nos.getAddress(mockFunc);
    nos.getBalance(genericConfig, mockFunc);
    nos.getLastBlock(mockFunc);
    nos.getPublicKey(mockFunc);
    nos.getStorage(genericConfig, mockFunc);
    nos.invoke(genericConfig, mockFunc);
    nos.send(genericConfig, mockFunc);
    nos.testInvoke(genericConfig, mockFunc);

    expect(mockFunc).toBeCalled();
    expect(nos.off).toBeUndefined();
    expect(nos.on).toBeUndefined();
    expect(nos.once).toBeUndefined();
  });
});
