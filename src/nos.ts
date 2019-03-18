import exists from "./exists";
import {
  claimGas,
  decrypt,
  encrypt,
  getAddress,
  getBalance,
  getLastBlock,
  getPublicKey,
  getStorage,
  IDecryptConfig,
  IEncryptConfig,
  IGetBalanceConfig,
  IGetStorageConfig,
  IInvokeConfig,
  invoke,
  ISendConfig,
  ITestInvokeConfig,
  send,
  testInvoke
} from "./types";
import { NosWindow } from "./window";

declare const window: NosWindow;
const nos = window.NOS.V1;

function withFallback<T, U>(fallback?: (config?: U) => T, config?: U) {
  return fallback(config);
}

const ApiFunctions = {
  claimGas: (fallback?: claimGas) =>
    exists ? nos.claimGas() : withFallback<ReturnType<claimGas>, undefined>(fallback),

  decrypt: (config: IDecryptConfig, fallback?: decrypt) =>
    exists
      ? nos.decrypt(config)
      : withFallback<ReturnType<decrypt>, IDecryptConfig>(fallback, config),

  encrypt: (config: IEncryptConfig, fallback?: encrypt) =>
    exists
      ? nos.encrypt(config)
      : withFallback<ReturnType<encrypt>, IEncryptConfig>(fallback, config),

  exists,

  getAddress: (fallback?: getAddress) =>
    exists ? nos.getAddress() : withFallback<ReturnType<getAddress>, undefined>(fallback),

  getBalance: (config: IGetBalanceConfig, fallback?: getBalance) =>
    exists
      ? nos.getBalance(config)
      : withFallback<ReturnType<getBalance>, IGetBalanceConfig>(fallback, config),

  getLastBlock: (fallback?: getLastBlock) =>
    exists ? nos.getBlock() : withFallback<ReturnType<getLastBlock>, undefined>(fallback),

  getPublicKey: (fallback?: getPublicKey) =>
    exists ? nos.getPublicKey() : withFallback<ReturnType<getPublicKey>, undefined>(fallback),

  getStorage: (config: IGetStorageConfig, fallback?: getStorage) =>
    exists
      ? nos.getStorage(config)
      : withFallback<ReturnType<getStorage>, IGetStorageConfig>(fallback, config),

  invoke: (config: IInvokeConfig, fallback?: invoke) =>
    exists ? nos.invoke(config) : withFallback<ReturnType<invoke>, IInvokeConfig>(fallback, config),

  send: (config: ISendConfig, fallback?: send) =>
    exists ? nos.send(config) : withFallback<ReturnType<send>, ISendConfig>(fallback, config),

  testInvoke: (config: ITestInvokeConfig, fallback?: testInvoke) =>
    exists
      ? nos.testInvoke(config)
      : withFallback<ReturnType<testInvoke>, ITestInvokeConfig>(fallback, config)
};

export default ApiFunctions;
