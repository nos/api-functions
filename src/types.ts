// Singular types
export type InferredFunction<T, U> = T extends (config?: U) => infer R ? R : any;

export interface IGenericKeyValue {
  [key: string]: any;
}

export interface IEncryptData {
  iv: string;
  mac: string;
  data: string | Buffer;
}

// nOS specific types
export type Address = string;
export type ScriptHash = string;
export type TxId = string;

// Configs
export interface IGetBalanceConfig {
  asset: string;
  address?: Address;
}

export interface ITestInvokeConfig {
  scriptHash: ScriptHash;
  operation: string;
  args: string[];
  encodeArgs?: boolean;
}

export interface IInvokeConfig {
  scriptHash: ScriptHash;
  operation: string;
  args: string[];
  encodeArgs?: boolean;
  assets?: IGenericKeyValue;
}

export interface IGetStorageConfig {
  scriptHash: ScriptHash;
  key: string;
  encodeInput?: boolean;
  decodeOutput?: boolean;
}

export interface IGetStorageConfig {
  scriptHash: ScriptHash;
  key: string;
  encodeInput?: boolean;
  decodeOutput?: boolean;
}

export interface ISendConfig {
  asset: string;
  amount: string;
  receiver: Address;
  remark?: string | string[];
}

export interface IEncryptConfig {
  recipientPublicKey: string;
  data: string | Buffer;
}

export interface IDecryptConfig extends IEncryptData {
  senderPublicKey: string;
}

// Functions
export type claimGas = () => Promise<TxId>;
export type decrypt = (config: IDecryptConfig) => Promise<Buffer>;
export type encrypt = (config: IEncryptConfig) => Promise<IEncryptData>;
export type getAddress = () => Promise<Address>;
export type getBalance = (config: IGetBalanceConfig) => Promise<string>;
export type getLastBlock = () => Promise<IGenericKeyValue>;
export type getPublicKey = () => Promise<string>;
export type getStorage = (config: IGetStorageConfig) => Promise<any>;
export type invoke = (config: IInvokeConfig) => Promise<TxId>;
export type send = (config: ISendConfig) => Promise<TxId>;
export type testInvoke = (config: ITestInvokeConfig) => Promise<IGenericKeyValue>;

export interface INosNamespace {
  V1: {
    claimGas: claimGas;
    decrypt: decrypt;
    encrypt: encrypt;
    getAddress: getAddress;
    getBalance: getBalance;
    getLastBlock: getLastBlock;
    getPublicKey: getPublicKey;
    getStorage: getStorage;
    invoke: invoke;
    send: send;
    testInvoke: testInvoke;
  };

  ASSETS: {
    GAS: string;
    NEO: string;
  };
}
