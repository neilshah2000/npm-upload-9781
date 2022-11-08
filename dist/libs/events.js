"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
var mds_1 = require("../mds");
//////////////////////// empty functions before registration //////////////////////
var whenNewBlock = function (d) {
    //   console.log("NEWBLOCK event ... please resgister custom callback", d);
};
var whenMining = function (d) {
    //   console.log("MINIMG event ... please resgister custom callback", d);
};
var whenMaxima = function (d) {
    //   console.log("MAXIMA event ... please resgister custom callback", d);
};
var whenNewBalance = function (d) {
    //   console.log("NEW BALANCE event ... please resgister custom callback", d);
};
var whenInit = function () {
    //   console.log("INIT event ... please resgister custom callback");
};
var whenMinimaLog = function (d) {
    //   console.log("MINIMA LOG event ... please resgister custom callback", d);
};
var whenComms = function (d) {
    //   console.log("COMMS event, please register an event for comms for a custom callback", d);
};
var whenTimer = function () { };
///////////////////////////
var initializeMinima = function () {
    mds_1.MDS.init(function (nodeEvent) {
        // console.log(nodeEvent)
        switch (nodeEvent.event) {
            case 'inited':
                whenInit();
                break;
            case 'NEWBLOCK':
                var newBlockData = nodeEvent.data;
                whenNewBlock(newBlockData);
                break;
            case 'MINING':
                var minimgData = nodeEvent.data;
                whenMining(minimgData);
                break;
            case 'MAXIMA':
                var maximaData = nodeEvent.data;
                whenMaxima(maximaData);
                break;
            case 'NEWBALANCE':
                var newBalanceData = nodeEvent.data;
                whenNewBalance(newBalanceData);
                break;
            case 'MINIMALOG':
                var minimaLogeData = nodeEvent.data;
                whenMinimaLog(minimaLogeData);
                break;
            case 'MDSCOMMS':
                var commsData = nodeEvent.data;
                whenComms(commsData);
                break;
            case 'MDS_TIMER_10SECONDS':
                whenTimer(); // no data passed
                break;
            default:
                console.error('Unknown event type: ', nodeEvent);
        }
    });
};
///////////////////////// application registers custom callbacks ///////////////////////
function onNewBlock(callback) {
    whenNewBlock = callback;
}
function onMining(callback) {
    whenMining = callback;
}
function onMaxima(callback) {
    whenMaxima = callback;
}
function onNewBalance(callback) {
    whenNewBalance = callback;
}
function onInit(callback) {
    whenInit = callback;
    // Do registration
    initializeMinima();
}
function onMinimaLog(callback) {
    whenMinimaLog = callback;
}
function onComms(callback) {
    whenComms = callback;
}
function onTimer(callback) {
    whenTimer = callback;
}
exports.events = {
    onNewBlock: onNewBlock,
    onMining: onMining,
    onMaxima: onMaxima,
    onNewBalance: onNewBalance,
    onInit: onInit,
    onMinimaLog: onMinimaLog,
    onComms: onComms,
    onTimer: onTimer,
};
