"use strict";
exports.__esModule = true;
exports.commands = void 0;
var mds_1 = require("../mds");
/**
 * Show Help. [] are required. () are optional. Chain multiple commands with ;
 */
var help = function () {
    throw 'Not yet implemented';
};
var status = function (_a) {
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
var printtree = function () {
    throw 'Not yet implemented';
};
/**
 * View Burn metrics
 */
var burn = function () {
    throw 'Not yet implemented';
};
/**
 * [enable:true|false] (filter:) - Show the message stacks of the internal Minima Engine with optional filter string
 */
var trace = function () {
    throw 'Not yet implemented';
};
/**
 * (amount:) - Check the speed of hashing of this device. Defaults to 1 million hashes
 */
var hashtest = function () {
    throw 'Not yet implemented';
};
/**
 * (txpowid:txpowid) (block:) (address:) - Search for a specific TxPoW
 */
var txpow = function () {
    throw 'Not yet implemented';
};
var coins = function (_a) {
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
var tokens = function (_a) {
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
 * (action:list|new) - Get a list of all your public keys or create a new key
 */
var keys = function () {
    throw 'Not yet implemented';
};
/**
 * Get one of your default Minima addresses
 */
var getaddress = function () {
    throw 'Not yet implemented';
};
/**
 * Create a new address that will not be not used for anything else (not a default change address)
 */
var newaddress = function () {
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
 * [address:Mx..|0x..] [amount:] (tokenid:) (state:{}) (burn:) (split:) - Send Minima or Tokens to an address
 */
var send = function () {
    throw 'Not yet implemented';
};
var balance = function (_a) {
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
var tokencreate = function (_a) {
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
var tokenvalidate = function () {
    throw 'Not yet implemented';
};
/**
 * [tokenid:] (coinage:) - Consolidate coins by sending them back to yourself
 */
var consolidate = function () {
    throw 'Not yet implemented';
};
/**
 * [data:] (type:keccak|sha2|sha3)- Hash the data - default KECCAK
 */
var hash = function () {
    throw 'Not yet implemented';
};
/**
 * (size:) - Generate a random hash value, defaults to 32 bytes
 */
var random = function () {
    throw 'Not yet implemented';
};
var scripts = function (_a) {
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
var newscript = function () {
    throw 'Not yet implemented';
};
/**
 * [script:] (clean:true|false) (state:{}) (prevstate:{}) (globals:{}) (signatures:[]) (extrascripts:{}) - Run a script with the defined parameters
 */
var runscript = function () {
    throw 'Not yet implemented';
};
/**
 * Show the complete Grammar for Minima KISSVM scripting
 */
var tutorial = function () {
    throw 'Not yet implemented';
};
/**
 * [nodes:[]] - Create an MMR Tree of data. Nodes can be STRING / HEX
 */
var mmrcreate = function () {
    throw 'Not yet implemented';
};
/**
 * [data:] [proof:] [root:] - Check an MMR proof
 */
var mmrproof = function () {
    throw 'Not yet implemented';
};
/**
 * [data:] (track:false) - Import a coin, and keep tracking it
 */
var coinimport = function () {
    throw 'Not yet implemented';
};
/**
 * [coinid:] - Export a coin
 */
var coinexport = function () {
    throw 'Not yet implemented';
};
/**
 * [enable:true|false] [coinid:] - Track or untrack a coin
 */
var cointrack = function () {
    throw 'Not yet implemented';
};
/**
 * [publickey:] [data:] - Sign the data with the publickey
 */
var sign = function () {
    throw 'Not yet implemented';
};
/**
 * [publickey:] [data:] [signature:] - Verify a signature
 */
var verify = function () {
    throw 'Not yet implemented';
};
var txnlist = function (_a) {
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
var txncreate = function (_a) {
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
var txnbasics = function () {
    throw 'Not yet implemented';
};
/**
 * [id:] - Delete this custom transaction
 */
var txndelete = function () {
    throw 'Not yet implemented';
};
var txncheck = function (_a) {
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
var txninput = function (_a) {
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
var txnoutput = function (_a) {
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
var txnstate = function () {
    throw 'Not yet implemented';
};
/**
 * [id:] [scripts:{}] - Add scripts to a txn
 */
var txnscript = function () {
    throw 'Not yet implemented';
};
var txnsign = function (_a) {
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
var txnclear = function () {
    throw 'Not yet implemented';
};
var txnpost = function (_a) {
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
var txnimport = function (_a) {
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
var txnexport = function (_a) {
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
var network = function () {
    throw 'Not yet implemented';
};
var maxima = function (_a) {
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
var maxcontacts = function () {
    throw 'Not yet implemented';
};
/**
 * (uid:uid) [data:message] - Send a message over the network to one of your direct peers
 */
var message = function () {
    throw 'Not yet implemented';
};
/**
 * [host:ip:port] - Connect to a network Minima instance
 */
var connect = function () {
    throw 'Not yet implemented';
};
/**
 * [uid:uid] - Disconnect from a connected or connecting host
 */
var disconnect = function () {
    throw 'Not yet implemented';
};
/**
 * [enable:true|false] - Enable and disable RPC on port 9002 (default is off)
 */
var rpc = function () {
    throw 'Not yet implemented';
};
/**
 * (action:list|add|remove|clear) (hook:url) - Add a web hook that is called with Minima events as they happen
 */
var webhooks = function () {
    throw 'Not yet implemented';
};
var mds = function (_a) {
    var _b = _a === void 0 ? {} : _a, action = _b.action, file = _b.file, uid = _b.uid;
    var command = "mds " +
        "".concat(buildArg('action', action), " ") +
        "".concat(buildArg('file', file), " ") +
        "".concat(buildArg('uid', uid), " ");
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
var backup = function () {
    throw 'Not yet implemented';
};
/**
 * [file:] - Restore the entire system.
 */
var restore = function () {
    throw 'Not yet implemented';
};
/**
 * [action:seed|lock|unlock] (seed:) - BE CAREFUL. Wipe / Restore your private keys
 */
var vault = function () {
    throw 'Not yet implemented';
};
/**
 * (uid:) - Show your rewards or specify your UserID for the Incentive Cash program
 */
var incentivecash = function () {
    throw 'Not yet implemented';
};
/**
 * Shutdown Minima
 */
var quit = function () {
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
///////////// api ////////////////////
exports.commands = {
    help: help,
    status: status,
    printtree: printtree,
    burn: burn,
    trace: trace,
    hashtest: hashtest,
    txpow: txpow,
    coins: coins,
    tokens: tokens,
    keys: keys,
    getaddress: getaddress,
    newaddress: newaddress,
    send: send,
    balance: balance,
    tokencreate: tokencreate,
    tokenvalidate: tokenvalidate,
    consolidate: consolidate,
    hash: hash,
    random: random,
    scripts: scripts,
    newscript: newscript,
    runscript: runscript,
    tutorial: tutorial,
    mmrcreate: mmrcreate,
    mmrproof: mmrproof,
    coinimport: coinimport,
    coinexport: coinexport,
    cointrack: cointrack,
    sign: sign,
    verify: verify,
    txnlist: txnlist,
    txncreate: txncreate,
    txnbasics: txnbasics,
    txndelete: txndelete,
    txncheck: txncheck,
    txninput: txninput,
    txnoutput: txnoutput,
    txnstate: txnstate,
    txnscript: txnscript,
    txnsign: txnsign,
    txnclear: txnclear,
    txnpost: txnpost,
    txnimport: txnimport,
    txnexport: txnexport,
    network: network,
    maxima: maxima,
    maxcontacts: maxcontacts,
    message: message,
    connect: connect,
    disconnect: disconnect,
    rpc: rpc,
    webhooks: webhooks,
    mds: mds,
    backup: backup,
    restore: restore,
    vault: vault,
    incentivecash: incentivecash,
    quit: quit
};
