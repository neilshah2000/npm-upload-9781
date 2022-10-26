import { Decimal } from "decimal.js";
import { Address, Coin, TransactionListItem } from "./../types/minima";
/**
 * (clean:true) - Show general status for Minima and clean RAM
 */
declare type StatusArgsTypes = {
    clean?: boolean;
};
/**
 * (relevant:true) (sendable:true) (coinid:) (amount:) (address:) (tokenid:) - Search for coins
 */
declare type CoinsArgsTypes = {
    relevant?: boolean;
    sendable?: boolean;
    coinId?: string;
    amount?: number;
    address?: string;
    tokenId?: string;
};
/**
 * (tokenid:) (action:import|export) (data:) - List, import or export tokens on the chain
 */
declare type TokensArgsTypes = {
    tokenId?: string;
    action?: "export" | "import";
    data?: string;
};
/**
 * (address:) (confirmations:) - Show your total balance of Minima and tokens
 */
declare type BalanceArgsTypes = {
    address?: string;
    confirmations?: number;
};
/**
 * [name:] [amount:] (decimals:) (script:) (state:{}) (signtoken:) (webvalidate:) (burn:) - Create a token. 'name' can be a JSON Object
 *
 * Create a custom token (coloured Minima Coins)
 * name - can be a STRING or JSON Object
 * decimals - specify how many decimal places the token will have (default 8, max 16)
 * script - add a custom script that must return TRUE when spending the token,
 * state variables - JSON object
 * signtoken - provide a public key to sign the token with,
 * webvalidate - provide a URL storing the tokenID for validation purposes
 * burn - amount to burn in the tokencreate txn
 *
 */
declare type TokenCreateArgsTypes = {
    name: string | object;
    amount: number;
    decimals?: number;
    script?: string;
    state?: object;
    signtoken?: string;
    webvalidate?: string;
    burn?: number;
};
/**
 * (address:) - Search scripts / addresses
 */
interface ScriptsArgTypes {
    address?: string;
}
/**
 * (id:) - List current custom transactions
 */
declare type TxnListArgTypes = {
    id?: string;
};
/**
 * [id:] - Create a transaction
 */
declare type TxnCreateArgsTypes = {
    id: string;
};
/**
 * [id:] - Show details about the transaction
 */
declare type TxnCheckArgsTypes = {
    id: string;
};
/**
 * [id:] (coinid:) (coindata:) (floating:) (address:) (amount:) (tokenid:) (sciptmmr:true)- Add a coin as an input to a transaction
 */
declare type TxnInputArgsTypes = {
    id: string;
    coinid?: string;
    coindata?: string;
    floating?: string;
    address?: string;
    amount?: Decimal;
    tokenid?: string;
    scriptmmr?: true;
};
/**
 * [id:] [amount:] [address:] (tokenid:) (storestate:) - Create a transaction output
 */
declare type TxnOutputArgsTypes = {
    id: string;
    amount: Decimal;
    address: string;
    tokenId?: string;
    storeState?: string;
};
/**
 * [id:] [publickey:0x..|auto] - Sign a transaction
 */
declare type TxnSignArgsTypes = {
    id: string;
    publicKey: string | "auto";
};
/**
 * [id:] (auto:true) (burn:) - Post a transaction. Automatically set the Scripts and MMR
 */
declare type TxnPostArgs = {
    id: string;
    auto?: boolean;
    burn?: string;
};
/**
 * (id:) (file:) (data:) - Import a transaction as a file or HEX data. Optionally specify the ID
 */
declare type TxnImportArgsTypes = {
    id?: string;
    file?: string;
    data?: string;
};
/**
 * [id:] (file:) - Export a transaction as HEX or to a file
 */
declare type TxnExportArgsTypes = {
    id: string;
    file?: string;
};
/**
 * [action:info|setname|hosts|send|refresh] (name:) (id:)|(to:)|(publickey:) (application:) (data:) (logs:true|false) - Check your Maxima details, send a message / data, enable logs
 */
declare type MaximaArgsTypes = {
    action?: "info" | "setname" | "hosts" | "send" | "refresh";
    name?: string;
    id?: number;
    to?: string;
    publickey?: string;
    application?: string;
    data?: string;
    logs?: boolean;
};
/**
 * (action:list|install|uninstall) (file:) (uid:) - MiniDAPP System management
 */
declare type MdsArgsTypes = {
    action?: "list" | "install" | "uninstall";
    file?: string;
    uid?: string;
};
export declare const commands: {
    help: () => never;
    status: ({ clean }?: StatusArgsTypes) => Promise<unknown>;
    printtree: () => never;
    burn: () => never;
    trace: () => never;
    hashtest: () => never;
    txpow: () => never;
    coins: ({ relevant, sendable, coinId, amount, address, tokenId }?: CoinsArgsTypes) => Promise<Coin[]>;
    tokens: ({ tokenId, action, data }?: TokensArgsTypes) => Promise<any>;
    keys: () => never;
    getaddress: () => never;
    newaddress: () => Promise<any>;
    send: () => never;
    balance: ({ address, confirmations }?: BalanceArgsTypes) => Promise<any>;
    tokencreate: ({ name, amount, decimals, script, state, signtoken, webvalidate, burn }: TokenCreateArgsTypes) => Promise<any>;
    tokenvalidate: () => never;
    consolidate: () => never;
    hash: () => never;
    random: () => never;
    scripts: ({ address }: ScriptsArgTypes) => Promise<Address>;
    newscript: () => never;
    runscript: () => never;
    tutorial: () => never;
    mmrcreate: () => never;
    mmrproof: () => never;
    coinimport: () => never;
    coinexport: () => never;
    cointrack: () => never;
    sign: () => never;
    verify: () => never;
    txnlist: ({ id }: TxnListArgTypes) => Promise<TransactionListItem>;
    txncreate: ({ id }: TxnCreateArgsTypes) => Promise<any>;
    txnbasics: () => never;
    txndelete: () => never;
    txncheck: ({ id }: TxnCheckArgsTypes) => Promise<any>;
    txninput: ({ id, coinid, coindata, floating, address, amount, tokenid, scriptmmr }: TxnInputArgsTypes) => Promise<any>;
    txnoutput: ({ id, amount, address, tokenId, storeState }: TxnOutputArgsTypes) => Promise<any>;
    txnstate: () => never;
    txnscript: () => never;
    txnsign: ({ id, publicKey }: TxnSignArgsTypes) => Promise<any>;
    txnclear: () => never;
    txnpost: ({ id, auto, burn }: TxnPostArgs) => Promise<any>;
    txnimport: ({ id, file, data }: TxnImportArgsTypes) => Promise<any>;
    txnexport: ({ id, file }: TxnExportArgsTypes) => Promise<any>;
    network: () => never;
    maxima: ({ action, name, id, to, publickey, application, data, logs }?: MaximaArgsTypes) => Promise<any>;
    maxcontacts: () => never;
    message: () => never;
    connect: () => never;
    disconnect: () => never;
    rpc: () => never;
    webhooks: () => never;
    mds: ({ action, file, uid }?: MdsArgsTypes) => Promise<any>;
    backup: () => never;
    restore: () => never;
    vault: () => never;
    incentivecash: () => never;
    quit: () => never;
};
export {};
