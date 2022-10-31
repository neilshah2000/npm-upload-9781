"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var mds_1 = require("../mds");
var commands;
(function (commands) {
    /**
     * Show Help. [] are required. () are optional. Chain multiple commands with ;
     */
    commands.help = function () {
        throw 'Not yet implemented';
    };
    /**
     * Show general status for Minima and clean RAM
     *
     * @param clean
     */
    commands.status = function (_a) {
        var _b = _a === void 0 ? {} : _a, clean = _b.clean;
        var command = "status " + "".concat(buildArg('clean', clean));
        console.log('status command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * (depth:) (cascade:true|false) - Print a tree representation of the blockchain. Depth default 32, Cascade false.
     */
    commands.printtree = function () {
        throw 'Not yet implemented';
    };
    /**
     * View Burn metrics
     */
    commands.burn = function () {
        throw 'Not yet implemented';
    };
    /**
     * [enable:true|false] (filter:) - Show the message stacks of the internal Minima Engine with optional filter string
     */
    commands.trace = function () {
        throw 'Not yet implemented';
    };
    /**
     * (amount:) - Check the speed of hashing of this device. Defaults to 1 million hashes
     */
    commands.hashtest = function () {
        throw 'Not yet implemented';
    };
    /**
     * Search for a specific TxPoW
     *
     * @param txpowid
     * @param block
     * @param address
     */
    commands.txpow = function (_a) {
        var txpowid = _a.txpowid, block = _a.block, address = _a.address;
        var command = "txpow " + "".concat(buildArg('txpowid', txpowid), " ") + "".concat(buildArg('block', block), " ") + "".concat(buildArg('address', address));
        console.log('txpow command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
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
    commands.coins = function (_a) {
        var _b = _a === void 0 ? {} : _a, relevant = _b.relevant, sendable = _b.sendable, coinId = _b.coinId, amount = _b.amount, address = _b.address, tokenId = _b.tokenId;
        var command = "coins " +
            "".concat(buildArg('relevant', relevant), " ") +
            "".concat(buildArg('sendable', sendable), " ") +
            "".concat(buildArg('coinId', coinId), " ") +
            "".concat(buildArg('amount', amount), " ") +
            "".concat(buildArg('address', address), " ") +
            "".concat(buildArg('tokenId', tokenId));
        console.log('coins command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     *
     * List, import or export tokens on the chain
     *
     * @param tokenid
     * @param action
     * @param data
     */
    commands.tokens = function (_a) {
        var _b = _a === void 0 ? {} : _a, tokenId = _b.tokenId, action = _b.action, data = _b.data;
        var command = "tokens " + "".concat(buildArg('tokenId', tokenId), " ") + "".concat(buildArg('action', action), " ") + "".concat(buildArg('data', data));
        console.log('tokens command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * Get a list of all your public keys or create a new key
     *
     * @param action
     */
    commands.keys = function (_a) {
        var action = _a.action;
        var command = "keys " + "".concat(buildArg('action', action));
        console.log('keys command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * Get one of your default Minima addresses
     */
    commands.getaddress = function () {
        var command = "getaddress";
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * Create a new address that will not be not used for anything else (not a default change address)
     */
    commands.newaddress = function () {
        var command = "newaddress";
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
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
    commands.send = function (_a) {
        var address = _a.address, amount = _a.amount, multi = _a.multi, tokenid = _a.tokenid, state = _a.state, burn = _a.burn, split = _a.split, debug = _a.debug, dryrun = _a.dryrun;
        var multiCmdStr = undefined;
        if (multi !== undefined) {
            var multiString = multi.map(function (singleSend) {
                return "\"".concat(singleSend.address, ":").concat(singleSend.amount, "\"");
            });
            multiCmdStr = "[".concat(multiString.join(','), "]");
        }
        var command = "send " +
            "".concat(buildArg('address', address), " ") +
            "".concat(buildArg('amount', amount), " ") +
            "".concat(buildArg('multi', multiCmdStr), " ") +
            "".concat(buildArg('tokenid', tokenid), " ") +
            "".concat(buildArg('state', state), " ") +
            "".concat(buildArg('burn', burn), " ") +
            "".concat(buildArg('split', split), " ") +
            "".concat(buildArg('debug', debug), " ") +
            "".concat(buildArg('dryrun', dryrun));
        console.log('send command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
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
    commands.sendpoll = function (_a) {
        var action = _a.action, uid = _a.uid, address = _a.address, amount = _a.amount, tokenid = _a.tokenid, state = _a.state, burn = _a.burn, split = _a.split, debug = _a.debug, dryrun = _a.dryrun;
        var command = "sendpoll " +
            "".concat(buildArg('action', action), " ") +
            "".concat(buildArg('uid', uid), " ") +
            "".concat(buildArg('address', address), " ") +
            "".concat(buildArg('amount', amount), " ") +
            "".concat(buildArg('tokenid', tokenid), " ") +
            "".concat(buildArg('state', state), " ") +
            "".concat(buildArg('burn', burn), " ") +
            "".concat(buildArg('split', split), " ") +
            "".concat(buildArg('debug', debug), " ") +
            "".concat(buildArg('dryrun', dryrun));
        console.log('sendpoll command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * Show your total balance of Minima and tokens
     * @param address
     * @param confirmations
     */
    commands.balance = function (_a) {
        var _b = _a === void 0 ? {} : _a, address = _b.address, confirmations = _b.confirmations;
        var command = "balance " + "".concat(buildArg('address', address), " ") + "".concat(buildArg('confirmations', confirmations));
        console.log('balance command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
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
    commands.tokencreate = function (_a) {
        var name = _a.name, amount = _a.amount, decimals = _a.decimals, script = _a.script, state = _a.state, signtoken = _a.signtoken, webvalidate = _a.webvalidate, burn = _a.burn;
        var command = "tokencreate " +
            "".concat(buildArg('name', name), " ") +
            "".concat(buildArg('amount', amount), " ") +
            "".concat(buildArg('decimals', decimals), " ") +
            "".concat(buildArg('script', script), " ") +
            "".concat(buildArg('state', state), " ") +
            "".concat(buildArg('signtoken', signtoken), " ") +
            "".concat(buildArg('webvalidate', webvalidate), " ") +
            "".concat(buildArg('burn', burn));
        console.log('tokencreate command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * [tokenid:] - validate the signature and web link in a token
     */
    commands.tokenvalidate = function () {
        throw 'Not yet implemented';
    };
    /**
     * [tokenid:] (coinage:) - Consolidate coins by sending them back to yourself
     */
    commands.consolidate = function () {
        throw 'Not yet implemented';
    };
    /**
     * [data:] (type:keccak|sha2|sha3)- Hash the data - default KECCAK
     */
    commands.hash = function () {
        throw 'Not yet implemented';
    };
    /**
     * (size:) - Generate a random hash value, defaults to 32 bytes
     */
    commands.random = function () {
        throw 'Not yet implemented';
    };
    commands.scripts = function (_a) {
        var address = _a.address;
        var command = "scripts " + "".concat(buildArg('address', address));
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * [script:] (track:true|false) - Add a new custom script to track
     */
    commands.newscript = function () {
        throw 'Not yet implemented';
    };
    /**
     * [script:] (clean:true|false) (state:{}) (prevstate:{}) (globals:{}) (signatures:[]) (extrascripts:{}) - Run a script with the defined parameters
     */
    commands.runscript = function () {
        throw 'Not yet implemented';
    };
    /**
     * Show the complete Grammar for Minima KISSVM scripting
     */
    commands.tutorial = function () {
        throw 'Not yet implemented';
    };
    /**
     * [nodes:[]] - Create an MMR Tree of data. Nodes can be STRING / HEX
     */
    commands.mmrcreate = function () {
        throw 'Not yet implemented';
    };
    /**
     * [data:] [proof:] [root:] - Check an MMR proof
     */
    commands.mmrproof = function () {
        throw 'Not yet implemented';
    };
    /**
     * [data:] (track:false) - Import a coin, and keep tracking it
     */
    commands.coinimport = function () {
        throw 'Not yet implemented';
    };
    /**
     * [coinid:] - Export a coin
     */
    commands.coinexport = function () {
        throw 'Not yet implemented';
    };
    /**
     * [enable:true|false] [coinid:] - Track or untrack a coin
     */
    commands.cointrack = function () {
        throw 'Not yet implemented';
    };
    /**
     * [publickey:] [data:] - Sign the data with the publickey
     */
    commands.sign = function () {
        throw 'Not yet implemented';
    };
    /**
     * [publickey:] [data:] [signature:] - Verify a signature
     */
    commands.verify = function () {
        throw 'Not yet implemented';
    };
    commands.txnlist = function (_a) {
        var id = _a.id;
        var command = "txnlist " + "".concat(buildArg('id', id));
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    commands.txncreate = function (_a) {
        var id = _a.id;
        var command = "txncreate " + "".concat(buildArg('id', id));
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * [id:] - Automatically set the MMR proofs and scripts for a txn
     */
    commands.txnbasics = function () {
        throw 'Not yet implemented';
    };
    /**
     * [id:] - Delete this custom transaction
     */
    commands.txndelete = function () {
        throw 'Not yet implemented';
    };
    /**
     * Show details about the transaction
     *
     * @param id
     */
    commands.txncheck = function (_a) {
        var id = _a.id;
        var command = "txncheck " + "".concat(buildArg('id', id));
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status && checkResponseValidity(res.response)) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
        function checkResponseValidity(responseObject) {
            return (responseObject.validamounts &&
                responseObject.valid.basic &&
                responseObject.valid.mmrproofs &&
                responseObject.valid.scripts &&
                responseObject.valid.signatures);
        }
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
    commands.txninput = function (_a) {
        var id = _a.id, coinid = _a.coinid, coindata = _a.coindata, floating = _a.floating, address = _a.address, amount = _a.amount, tokenid = _a.tokenid, scriptmmr = _a.scriptmmr;
        var command = "txninput " +
            "".concat(buildArg('id', id), " ") +
            "".concat(buildArg('coinid', coinid), " ") +
            "".concat(buildArg('coindata', coindata), " ") +
            "".concat(buildArg('floating', floating), " ") +
            "".concat(buildArg('address', address), " ") +
            "".concat(buildArg('amount', amount), " ") +
            "".concat(buildArg('tokenid', tokenid), " ") +
            "".concat(buildArg('scriptmmr', scriptmmr));
        console.log('txninput command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
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
    commands.txnoutput = function (_a) {
        var id = _a.id, amount = _a.amount, address = _a.address, tokenId = _a.tokenId, storeState = _a.storeState;
        var command = "txnoutput " +
            "".concat(buildArg('id', id), " ") +
            "".concat(buildArg('amount', amount), " ") +
            "".concat(buildArg('address', address), " ") +
            "".concat(buildArg('tokenId', tokenId), " ") +
            "".concat(buildArg('storeState', storeState));
        console.log('txnoutput command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * [id:] [port:] [value:] - Add a state variable
     */
    commands.txnstate = function () {
        throw 'Not yet implemented';
    };
    /**
     * [id:] [scripts:{}] - Add scripts to a txn
     */
    commands.txnscript = function () {
        throw 'Not yet implemented';
    };
    /**
     * Sign a transaction
     *
     * @param id
     * @param publickey
     */
    commands.txnsign = function (_a) {
        var id = _a.id, publicKey = _a.publicKey;
        var command = "txnsign " + "".concat(buildArg('id', id), " ") + "".concat(buildArg('publicKey', publicKey));
        console.log('txnsign command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * [id:] - Clear ALL the Witness data
     */
    commands.txnclear = function () {
        throw 'Not yet implemented';
    };
    /**
     * Post a transaction. Automatically set the Scripts and MMR
     *
     * @param id
     * @param auto
     * @param burn
     */
    commands.txnpost = function (_a) {
        var id = _a.id, auto = _a.auto, burn = _a.burn;
        var command = "txnpost " + "".concat(buildArg('id', id), " ") + "".concat(buildArg('auto', auto), " ") + "".concat(buildArg('burn', burn));
        console.log('txnpost command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * Import a transaction as a file or HEX data. Optionally specify the ID
     *
     * @param id
     * @param file
     * @param data
     */
    commands.txnimport = function (_a) {
        var id = _a.id, file = _a.file, data = _a.data;
        var command = "txnimport " + "".concat(buildArg('id', id), " ") + "".concat(buildArg('file', file), " ") + "".concat(buildArg('data', data));
        console.log('txnimport command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * Export a transaction as HEX or to a file
     *
     * @param id
     * @param file
     */
    commands.txnexport = function (_a) {
        var id = _a.id, file = _a.file;
        var command = "txnexport " + "".concat(buildArg('id', id), " ") + "".concat(buildArg('file', file));
        console.log('txnexport command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * (action:list|restart) - Show network status or restart
     */
    commands.network = function () {
        throw 'Not yet implemented';
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
    commands.maxima = function (_a) {
        var _b = _a === void 0 ? {} : _a, action = _b.action, name = _b.name, id = _b.id, to = _b.to, publickey = _b.publickey, application = _b.application, data = _b.data, logs = _b.logs;
        var command = "maxima " +
            "".concat(buildArg('action', action), " ") +
            "".concat(buildArg('name', name), " ") +
            "".concat(buildArg('id', id), " ") +
            "".concat(buildArg('to', to), " ") +
            "".concat(buildArg('publickey', publickey), " ") +
            "".concat(buildArg('application', application), " ") +
            "".concat(buildArg('data', data), " ") +
            "".concat(buildArg('logs', logs));
        console.log('maxima command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res.response);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * [action:list|mls|add|remove|search] (contact:) (id:) (publickey:) - Manage your Maxima contacts
     */
    commands.maxcontacts = function () {
        throw 'Not yet implemented';
    };
    /**
     * (uid:uid) [data:message] - Send a message over the network to one of your direct peers
     */
    commands.message = function () {
        throw 'Not yet implemented';
    };
    /**
     * [host:ip:port] - Connect to a network Minima instance
     */
    commands.connect = function () {
        throw 'Not yet implemented';
    };
    /**
     * [uid:uid] - Disconnect from a connected or connecting host
     */
    commands.disconnect = function () {
        throw 'Not yet implemented';
    };
    /**
     * [enable:true|false] - Enable and disable RPC on port 9002 (default is off)
     */
    commands.rpc = function () {
        throw 'Not yet implemented';
    };
    /**
     * (action:list|add|remove|clear) (hook:url) - Add a web hook that is called with Minima events as they happen
     */
    commands.webhooks = function () {
        throw 'Not yet implemented';
    };
    commands.mds = function (_a) {
        var _b = _a === void 0 ? {} : _a, action = _b.action, file = _b.file, uid = _b.uid;
        var command = "mds " + "".concat(buildArg('action', action), " ") + "".concat(buildArg('file', file), " ") + "".concat(buildArg('uid', uid), " ");
        console.log('mds command: ', command);
        return new Promise(function (resolve, reject) {
            mds_1.MDS.cmd(command, function (res) {
                if (res.status) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    /**
     * (file:) (complete:false|true) - Backup the system. Uses a timestamped name by default
     */
    commands.backup = function () {
        throw 'Not yet implemented';
    };
    /**
     * [file:] - Restore the entire system.
     */
    commands.restore = function () {
        throw 'Not yet implemented';
    };
    /**
     * [action:seed|lock|unlock] (seed:) - BE CAREFUL. Wipe / Restore your private keys
     */
    commands.vault = function () {
        throw 'Not yet implemented';
    };
    /**
     * (uid:) - Show your rewards or specify your UserID for the Incentive Cash program
     */
    commands.incentivecash = function () {
        throw 'Not yet implemented';
    };
    /**
     * Shutdown Minima
     */
    commands.quit = function () {
        throw 'Not yet implemented';
    };
    ////////////// helpers ////////////////////////
    // if prop value is undefined returns an empy string ''
    // otherwise returns the name, value pair as a string
    // eg 'tokenid:0xA39FCDC0593B9FAB6E194D758B2ADC67DA7416EB01224F873C519C5A90C24AFF'
    // or 'amount:10'
    function buildArg(propName, propValue) {
        if (propValue === undefined) {
            return '';
        }
        else {
            return "".concat(propName.toLowerCase(), ":").concat(propValue.toString());
        }
    }
})(commands = exports.commands || (exports.commands = {}));
