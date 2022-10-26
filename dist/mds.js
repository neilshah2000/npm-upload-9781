"use strict";
/**
 * MDS JS lib for MiniDAPPs..
 *
 * @spartacusrex
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDS = void 0;
/**
 * The MAIN Minima Callback function
 */
var MDS_MAIN_CALLBACK = null;
/**
 * Main MINIMA Object for all interaction
 */
exports.MDS = {
    //RPC Host for Minima
    mainhost: '',
    //The MiniDAPP UID
    minidappuid: '',
    //Is logging RPC enabled
    logging: false,
    //When debuggin you can hard set the Host and port
    DEBUG_HOST: null,
    DEBUG_PORT: -1,
    //An allowed TEST Minidapp ID for SQL - can be overridden
    DEBUG_MINIDAPPID: '0x00',
    /**
     * Minima Startup - with the callback function used for all Minima messages
     */
    init: function (callback) {
        //Log a little..
        exports.MDS.log('Initialising MDS..');
        //Is logging enabled.. via the URL
        if (exports.MDS.form.getParams('MDS_LOGGING') != null) {
            exports.MDS.logging = true;
        }
        //Get the host and port..
        var host = window.location.hostname;
        var port = Math.floor(window.location.port);
        //Get ther MiniDAPP UID
        exports.MDS.minidappuid = exports.MDS.form.getParams('uid');
        //HARD SET if debug mode - running from a file
        if (exports.MDS.DEBUG_HOST != null) {
            exports.MDS.log('DEBUG Settings Found..');
            host = exports.MDS.DEBUG_HOST;
            port = exports.MDS.DEBUG_PORT;
        }
        if (exports.MDS.minidappuid == null) {
            exports.MDS.minidappuid = exports.MDS.DEBUG_MINIDAPPID;
        }
        //Is one specified..
        if (exports.MDS.minidappuid == '0x00') {
            exports.MDS.log('No MiniDAPP UID specified.. using test value');
        }
        //The ports..
        var mainport = port + 1;
        exports.MDS.log('MDS FILEHOST  : https://' + host + ':' + port + '/');
        exports.MDS.mainhost = 'https://' + host + ':' + mainport + '/';
        exports.MDS.log('MDS MAINHOST : ' + exports.MDS.mainhost);
        //Store this for poll messages
        MDS_MAIN_CALLBACK = callback;
        //Start the Long Poll listener
        PollListener();
        //And Post a message
        MDSPostMessage({ event: 'inited' });
    },
    /**
     * Log some data with a timestamp in a consistent manner to the console
     */
    log: function (output) {
        console.log('Minima @ ' + new Date().toLocaleString() + ' : ' + output);
    },
    /**
     * Runs a function on the Minima Command Line - same format as MInima
     */
    cmd: function (command, callback) {
        //Send via POST
        httpPostAsync(exports.MDS.mainhost + 'cmd?' + 'uid=' + exports.MDS.minidappuid, command, callback);
    },
    /**
     * Runs a SQL command on this MiniDAPPs SQL Database
     */
    sql: function (command, callback) {
        //Send via POST
        httpPostAsync(exports.MDS.mainhost + 'sql?' + 'uid=' + exports.MDS.minidappuid, command, callback);
    },
    /**
     * Network Commands
     */
    net: {
        /**
         * Make a GET request
         */
        GET: function (url, callback) {
            //Send via POST
            httpPostAsync(exports.MDS.mainhost + 'net?' + 'uid=' + exports.MDS.minidappuid, url, callback);
        },
        /**
         * Make a POST request
         */
        POST: function (url, data, callback) {
            //Create the sinlg eline version..
            var postline = url + '&' + data;
            //Send via POST
            httpPostAsync(exports.MDS.mainhost + 'netpost?' + 'uid=' + exports.MDS.minidappuid, postline, callback);
        },
    },
    /**
     * COMMS - send a message to ALL minidapps or JUST your own service.js
     */
    comms: {
        /**
         * PUBLIC message broadcast to ALL (callback is optional)
         */
        broadcast: function (msg, callback) {
            //Create the single line
            var commsline = 'public&' + msg;
            //Send via POST
            httpPostAsync(exports.MDS.mainhost + 'comms?' + 'uid=' + exports.MDS.minidappuid, commsline, callback);
        },
        /**
         * PRIVATE message send just to this MiniDAPP (callback is optional)
         */
        solo: function (msg, callback) {
            //Create the single line
            var commsline = 'private&' + msg;
            //Send via POST
            httpPostAsync(exports.MDS.mainhost + 'comms?' + 'uid=' + exports.MDS.minidappuid, commsline, callback);
        },
    },
    /**
     * Form GET / POST parameters..
     */
    form: {
        //Return the GET parameter by scraping the location..
        getParams: function (parameterName) {
            var result = null, tmp = [];
            var items = window.location.search.substr(1).split('&');
            for (var index = 0; index < items.length; index++) {
                tmp = items[index].split('=');
                //console.log("TMP:"+tmp);
                if (tmp[0] === parameterName)
                    result = decodeURIComponent(tmp[1]);
            }
            return result;
        },
    },
};
/**
 * Post a message to the Minima Event Listeners
 */
function MDSPostMessage(json) {
    //And dispatch
    if (MDS_MAIN_CALLBACK) {
        MDS_MAIN_CALLBACK(json);
    }
}
var PollCounter = 0;
var PollSeries = 0;
function PollListener() {
    //The POLL host
    var pollhost = exports.MDS.mainhost + 'poll?' + 'uid=' + exports.MDS.minidappuid;
    var polldata = 'series=' + PollSeries + '&counter=' + PollCounter;
    httpPostAsyncPoll(pollhost, polldata, function (msg) {
        //Are we on the right Series..
        if (PollSeries != msg.series) {
            //Reset to the right series..
            PollSeries = msg.series;
            PollCounter = msg.counter;
        }
        else {
            //Is there a message ?
            if (msg.status == true) {
                //Get the current counter..
                PollCounter = msg.response.counter + 1;
                //And Post the message..
                MDSPostMessage(msg.response.message);
            }
        }
        //And around we go again..
        PollListener();
    });
}
/**
 * Utility function for GET request
 *
 * @param theUrl
 * @param callback
 * @param params
 * @returns
 */
function httpPostAsync(theUrl, params, callback) {
    //Do we log it..
    if (exports.MDS.logging) {
        exports.MDS.log('POST_RPC:' + theUrl + ' PARAMS:' + params);
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            //Do we log it..
            if (exports.MDS.logging) {
                exports.MDS.log('RESPONSE:' + xmlHttp.responseText);
            }
            //Send it to the callback function..
            if (callback) {
                callback(JSON.parse(xmlHttp.responseText));
            }
        }
    };
    xmlHttp.open('POST', theUrl, true); // true for asynchronous
    xmlHttp.overrideMimeType('text/plain; charset=UTF-8');
    //xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(encodeURIComponent(params));
    //xmlHttp.send(params);
}
/**
 * Utility function for GET request (UNUSED for now..)
 *
 * @param theUrl
 * @param callback
 * @returns
 */
/*function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            if(MDS.logging){
                console.log("RPC      : "+theUrl);
                console.log("RESPONSE : "+xmlHttp.responseText);
            }

            //Always a JSON ..
            var rpcjson = JSON.parse(xmlHttp.responseText);
            
            //Send it to the callback function..
            if(callback){
                callback(rpcjson);
            }
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}*/
function httpPostAsyncPoll(theUrl, params, callback) {
    //Do we log it..
    if (exports.MDS.logging) {
        exports.MDS.log('POST_POLL_RPC:' + theUrl + ' PARAMS:' + params);
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            //Do we log it..
            if (exports.MDS.logging) {
                exports.MDS.log('RESPONSE:' + xmlHttp.responseText);
            }
            //Send it to the callback function..
            if (callback) {
                callback(JSON.parse(xmlHttp.responseText));
            }
        }
    };
    xmlHttp.addEventListener('error', function (ev) {
        exports.MDS.log('Error Polling - reconnect in 10s');
        setTimeout(function () {
            PollListener();
        }, 10000);
    });
    xmlHttp.open('POST', theUrl, true); // true for asynchronous
    xmlHttp.overrideMimeType('text/plain; charset=UTF-8');
    xmlHttp.send(encodeURIComponent(params));
}
