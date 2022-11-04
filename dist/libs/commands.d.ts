import { Decimal } from 'decimal.js';
import { Address, Coin, TransactionListItem, Txpow } from './../types/minima';
export declare namespace commands {
    /**
     * Show Help. [] are required. () are optional. Chain multiple commands with ;
     */
    export const help: () => never;
    type StatusArgsTypes = {
        clean?: boolean;
    };
    /**
     * Show general status for Minima and clean RAM
     *
     * @param clean
     */
    export const status: ({ clean }?: StatusArgsTypes) => Promise<unknown>;
    /**
     * (depth:) (cascade:true|false) - Print a tree representation of the blockchain. Depth default 32, Cascade false.
     */
    export const printtree: () => never;
    /**
     * View Burn metrics
     */
    export const burn: () => never;
    /**
     * [enable:true|false] (filter:) - Show the message stacks of the internal Minima Engine with optional filter string
     */
    export const trace: () => never;
    /**
     * (amount:) - Check the speed of hashing of this device. Defaults to 1 million hashes
     */
    export const hashtest: () => never;
    type TxPowArgsTypes = {
        txpowid: string;
        block: number;
        address: string;
    };
    /**
     * Search for a specific TxPoW
     *
     * @param txpowid
     * @param block
     * @param address
     */
    export const txpow: ({ txpowid, block, address }: TxPowArgsTypes) => Promise<Txpow>;
    type CoinsArgsTypes = {
        relevant?: boolean;
        sendable?: boolean;
        coinId?: string;
        amount?: number;
        address?: string;
        tokenId?: string;
    };
    /**
     * Search for coins
     *
     * @param relevant
     * @param sendable
     * @param coinid
     * @param amount
     * @param address
     * @param tokenid
     */
    export const coins: ({ relevant, sendable, coinId, amount, address, tokenId }?: CoinsArgsTypes) => Promise<Coin[]>;
    type TokensArgsTypes = {
        tokenId?: string;
        action?: 'export' | 'import';
        data?: string;
    };
    /**
     *
     * List, import or export tokens on the chain
     *
     * @param tokenid
     * @param action
     * @param data
     */
    export const tokens: ({ tokenId, action, data }?: TokensArgsTypes) => Promise<any>;
    type KeysArgsTypes = {
        action?: 'list' | 'new';
    };
    /**
     * Get a list of all your public keys or create a new key
     *
     * @param action
     */
    export const keys: ({ action }: KeysArgsTypes) => Promise<any>;
    /**
     * Get one of your default Minima addresses
     */
    export const getaddress: () => Promise<any>;
    /**
     * Create a new address that will not be not used for anything else (not a default change address)
     */
    export const newaddress: () => Promise<any>;
    type MultiArgsType = {
        address: string;
        amount: Decimal;
    };
    type SendArgsTypes = {
        address?: string;
        amount?: Decimal;
        multi?: MultiArgsType[];
        tokenid?: string;
        state?: Object;
        burn?: Decimal;
        split?: number;
        debug?: boolean;
        dryrun?: boolean;
    };
    /**
     * Send Minima or Tokens to an address
     * @param address - Mx..|0x..
     * @param amount
     * @param multi - ["address:amount",..]
     * @param tokenid
     * @param state - add state variables as a JSON object
     * @param burn
     * @param split
     * @param debug
     * @param dryrun
     */
    export const send: ({ address, amount, multi, tokenid, state, burn, split, debug, dryrun }: SendArgsTypes) => Promise<any>;
    type SendpollArgsTypes = {
        action: 'add' | 'list' | 'remove';
        uid: string;
        address?: string;
        amount?: Decimal;
        tokenid?: string;
        state?: Object;
        burn?: Decimal;
        split?: number;
        debug?: boolean;
        dryrun?: boolean;
    };
    /**
     * Send function that is added to a list and polls until complete
     * @param action - add|list|remove
     * @param uid
     * @param address - Mx..|0x..
     * @param amount
     * @param tokenid
     * @param state - add state variables as a JSON object
     * @param burn
     * @param split
     * @param debug
     * @param dryrun
     */
    export const sendpoll: ({ action, uid, address, amount, tokenid, state, burn, split, debug, dryrun }: SendpollArgsTypes) => Promise<any>;
    type BalanceArgsTypes = {
        address?: string;
        confirmations?: number;
    };
    /**
     * Show your total balance of Minima and tokens
     * @param address
     * @param confirmations
     */
    export const balance: ({ address, confirmations }?: BalanceArgsTypes) => Promise<any>;
    type TokenCreateArgsTypes = {
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
     * Create a custom token (coloured Minima Coins)
     *
     * @param name - can be a STRING or JSON Object
     * @param decimals - specify how many decimal places the token will have (default 8, max 16)
     * @param script - add a custom script that must return TRUE when spending the token
     * @param state - variables - JSON object
     * @param signtoken - provide a public key to sign the token with
     * @param webvalidate - provide a URL storing the tokenID for validation purposes
     * @param burn - amount to burn in the tokencreate txn
     */
    export const tokencreate: ({ name, amount, decimals, script, state, signtoken, webvalidate, burn }: TokenCreateArgsTypes) => Promise<any>;
    /**
     * [tokenid:] - validate the signature and web link in a token
     */
    export const tokenvalidate: () => never;
    /**
     * [tokenid:] (coinage:) - Consolidate coins by sending them back to yourself
     */
    export const consolidate: () => never;
    /**
     * [data:] (type:keccak|sha2|sha3)- Hash the data - default KECCAK
     */
    export const hash: () => never;
    /**
     * (size:) - Generate a random hash value, defaults to 32 bytes
     */
    export const random: () => never;
    /**
     * (address:) - Search scripts / addresses
     */
    interface ScriptsArgTypes {
        address?: string;
    }
    export const scripts: ({ address }: ScriptsArgTypes) => Promise<Address>;
    /**
     * [script:] (track:true|false) - Add a new custom script to track
     */
    export const newscript: () => never;
    /**
     * [script:] (clean:true|false) (state:{}) (prevstate:{}) (globals:{}) (signatures:[]) (extrascripts:{}) - Run a script with the defined parameters
     */
    export const runscript: () => never;
    /**
     * Show the complete Grammar for Minima KISSVM scripting
     */
    export const tutorial: () => never;
    /**
     * [nodes:[]] - Create an MMR Tree of data. Nodes can be STRING / HEX
     */
    export const mmrcreate: () => never;
    /**
     * [data:] [proof:] [root:] - Check an MMR proof
     */
    export const mmrproof: () => never;
    /**
     * [data:] (track:false) - Import a coin, and keep tracking it
     */
    export const coinimport: () => never;
    /**
     * [coinid:] - Export a coin
     */
    export const coinexport: () => never;
    /**
     * [enable:true|false] [coinid:] - Track or untrack a coin
     */
    export const cointrack: () => never;
    /**
     * [publickey:] [data:] - Sign the data with the publickey
     */
    export const sign: () => never;
    /**
     * [publickey:] [data:] [signature:] - Verify a signature
     */
    export const verify: () => never;
    /**
     * (id:) - List current custom transactions
     */
    type TxnListArgTypes = {
        id?: string;
    };
    export const txnlist: ({ id }: TxnListArgTypes) => Promise<TransactionListItem>;
    /**
     * [id:] - Create a transaction
     */
    type TxnCreateArgsTypes = {
        id: string;
    };
    export const txncreate: ({ id }: TxnCreateArgsTypes) => Promise<any>;
    /**
     * [id:] - Automatically set the MMR proofs and scripts for a txn
     */
    export const txnbasics: () => never;
    /**
     * [id:] - Delete this custom transaction
     */
    export const txndelete: () => never;
    type TxnCheckArgsTypes = {
        id: string;
    };
    /**
     * Show details about the transaction
     *
     * @param id
     */
    export const txncheck: ({ id }: TxnCheckArgsTypes) => Promise<any>;
    type TxnInputArgsTypes = {
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
     * Add a coin as an input to a transaction
     *
     * @param id
     * @param coinid
     * @param coindata
     * @param floating
     * @param address
     * @param amount
     * @param tokenid
     * @param scriptmmr
     *
     */
    export const txninput: ({ id, coinid, coindata, floating, address, amount, tokenid, scriptmmr }: TxnInputArgsTypes) => Promise<any>;
    type TxnOutputArgsTypes = {
        id: string;
        amount: Decimal;
        address: string;
        tokenId?: string;
        storeState?: string;
    };
    /**
     * Create a transaction output
     *
     * @param id
     * @param amount
     * @param address
     * @param tokenid
     * @param storestate
     *
     */
    export const txnoutput: ({ id, amount, address, tokenId, storeState }: TxnOutputArgsTypes) => Promise<any>;
    /**
     * [id:] [port:] [value:] - Add a state variable
     */
    export const txnstate: () => never;
    /**
     * [id:] [scripts:{}] - Add scripts to a txn
     */
    export const txnscript: () => never;
    type TxnSignArgsTypes = {
        id: string;
        publicKey: string | 'auto';
    };
    /**
     * Sign a transaction
     *
     * @param id
     * @param publickey
     */
    export const txnsign: ({ id, publicKey }: TxnSignArgsTypes) => Promise<any>;
    /**
     * [id:] - Clear ALL the Witness data
     */
    export const txnclear: () => never;
    type TxnPostArgs = {
        id: string;
        auto?: boolean;
        burn?: string;
    };
    /**
     * Post a transaction. Automatically set the Scripts and MMR
     *
     * @param id
     * @param auto
     * @param burn
     */
    export const txnpost: ({ id, auto, burn }: TxnPostArgs) => Promise<any>;
    type TxnImportArgsTypes = {
        id?: string;
        file?: string;
        data?: string;
    };
    /**
     * Import a transaction as a file or HEX data. Optionally specify the ID
     *
     * @param id
     * @param file
     * @param data
     */
    export const txnimport: ({ id, file, data }: TxnImportArgsTypes) => Promise<any>;
    type TxnExportArgsTypes = {
        id: string;
        file?: string;
    };
    /**
     * Export a transaction as HEX or to a file
     *
     * @param id
     * @param file
     */
    export const txnexport: ({ id, file }: TxnExportArgsTypes) => Promise<any>;
    /**
     * (action:list|restart) - Show network status or restart
     */
    export const network: () => never;
    type MaximaArgsTypes = {
        action?: 'info' | 'setname' | 'hosts' | 'send' | 'refresh';
        name?: string;
        id?: number;
        to?: string;
        publickey?: string;
        application?: string;
        data?: string;
        logs?: boolean;
    };
    /**
     * Check your Maxima details, send a message / data, enable logs
     *
     * @param action - info|setname|hosts|send|refresh
     * @param name
     * @param id
     * @param to
     * @param publickey
     * @param application
     * @param data
     * @param logs
     *
     */
    export const maxima: ({ action, name, id, to, publickey, application, data, logs }?: MaximaArgsTypes) => Promise<any>;
    type MaxcontactsArgsTypes = {
        action: 'list' | 'mls' | 'add' | 'remove' | 'search';
        contact?: string;
        id?: string;
        publickey?: string;
    };
    /**
     * [action:list|mls|add|remove|search] (contact:) (id:) (publickey:) - Manage your Maxima contacts
     */
    export const maxcontacts: ({ action, contact, id, publickey }: MaxcontactsArgsTypes) => Promise<unknown>;
    /**
     * (uid:uid) [data:message] - Send a message over the network to one of your direct peers
     */
    export const message: () => never;
    /**
     * [host:ip:port] - Connect to a network Minima instance
     */
    export const connect: () => never;
    /**
     * [uid:uid] - Disconnect from a connected or connecting host
     */
    export const disconnect: () => never;
    /**
     * [enable:true|false] - Enable and disable RPC on port 9002 (default is off)
     */
    export const rpc: () => never;
    /**
     * (action:list|add|remove|clear) (hook:url) - Add a web hook that is called with Minima events as they happen
     */
    export const webhooks: () => never;
    /**
     * MiniDAPP System management
     *
     * @param action list|install|uninstall
     * @param file
     * @param uid
     */
    type MdsArgsTypes = {
        action?: 'list' | 'install' | 'uninstall';
        file?: string;
        uid?: string;
    };
    export const mds: ({ action, file, uid }?: MdsArgsTypes) => Promise<any>;
    /**
     * (file:) (complete:false|true) - Backup the system. Uses a timestamped name by default
     */
    export const backup: () => never;
    /**
     * [file:] - Restore the entire system.
     */
    export const restore: () => never;
    /**
     * [action:seed|lock|unlock] (seed:) - BE CAREFUL. Wipe / Restore your private keys
     */
    export const vault: () => never;
    /**
     * (uid:) - Show your rewards or specify your UserID for the Incentive Cash program
     */
    export const incentivecash: () => never;
    /**
     * Shutdown Minima
     */
    export const quit: () => never;
    export {};
}
