// Singular types
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
export type getAddress = () => Address;
export type getBalance = (config: IGetBalanceConfig) => string;
export type getBlock = () => IGenericKeyValue;
export type claimGas = () => TxId;
export type testInvoke = (config: ITestInvokeConfig) => IGenericKeyValue;
export type invoke = (config: IInvokeConfig) => TxId;
export type getStorage = (config: IGetStorageConfig) => any;
export type send = (config: ISendConfig) => TxId;
export type getPublicKey = () => string;
export type encrypt = () => IEncryptData;
export type decrypt = (config: IDecryptConfig) => Buffer;

export interface INosNamespace {
  V1: {
    getAddress: getAddress;
    getBalance: getBalance;
    getBlock: getBlock;
    claimGas: claimGas;
    testInvoke: testInvoke;
    invoke: invoke;
    getStorage: getStorage;
    send: send;
    getPublicKey: getPublicKey;
    encrypt: encrypt;
    decrypt: decrypt;
  };

  ASSETS: {
    NEO: string;
    GAS: string;
  };
}
