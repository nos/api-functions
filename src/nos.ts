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
  InferredFunction,
  invoke,
  ISendConfig,
  ITestInvokeConfig,
  send,
  testInvoke
} from "./types";
import { NosWindow } from "./window";

declare const window: NosWindow;
const nos = exists ? window.NOS.V1 : undefined;

function withFallback<T, U>(fallback?: (config?: U) => InferredFunction<T, U>, config?: U) {
  return fallback(config);
}

const ApiFunctions = {
  claimGas: (fallback?: claimGas) =>
    exists ? nos.claimGas() : withFallback<claimGas, undefined>(fallback),

  decrypt: (config: IDecryptConfig, fallback?: decrypt) =>
    exists ? nos.decrypt(config) : withFallback<decrypt, IDecryptConfig>(fallback, config),

  encrypt: (config: IEncryptConfig, fallback?: encrypt) =>
    exists ? nos.encrypt(config) : withFallback<encrypt, IEncryptConfig>(fallback, config),

  exists,

  getAddress: (fallback?: getAddress) =>
    exists ? nos.getAddress() : withFallback<getAddress, undefined>(fallback),

  getBalance: (config: IGetBalanceConfig, fallback?: getBalance) =>
    exists ? nos.getBalance(config) : withFallback<getBalance, IGetBalanceConfig>(fallback, config),

  getLastBlock: (fallback?: getLastBlock) =>
    exists ? nos.getLastBlock() : withFallback<getLastBlock, undefined>(fallback),

  getPublicKey: (fallback?: getPublicKey) =>
    exists ? nos.getPublicKey() : withFallback<getPublicKey, undefined>(fallback),

  getStorage: (config: IGetStorageConfig, fallback?: getStorage) =>
    exists ? nos.getStorage(config) : withFallback<getStorage, IGetStorageConfig>(fallback, config),

  invoke: (config: IInvokeConfig, fallback?: invoke) =>
    exists ? nos.invoke(config) : withFallback<invoke, IInvokeConfig>(fallback, config),

  off: exists ? nos.off : undefined,

  on: exists ? nos.on : undefined,

  once: exists ? nos.once : undefined,

  send: (config: ISendConfig, fallback?: send) =>
    exists ? nos.send(config) : withFallback<send, ISendConfig>(fallback, config),

  testInvoke: (config: ITestInvokeConfig, fallback?: testInvoke) =>
    exists ? nos.testInvoke(config) : withFallback<testInvoke, ITestInvokeConfig>(fallback, config)
};

export default ApiFunctions;
