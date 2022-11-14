import { MDS } from '../mds'
import { MaximaMessage, Txpow } from './../types/minima'

////////////// response interfaces //////////
interface InitResponse {
    event: 'inited'
}

interface MiningResponse {
    event: 'MINING'
    data: MiningData
}
interface MiningData {
    mining: boolean
    txpow: Txpow
}

interface NewBlockResponse {
    event: 'NEWBLOCK'
    data: NewBlockData
}
interface NewBlockData {
    txpow: Txpow
}

interface MinimaLogResponse {
    event: 'MINIMALOG'
    data: MinimaLogData
}
interface MinimaLogData {
    message: string
}

interface NewBalanceResponse {
    event: 'NEWBALANCE'
    data: NewBalanceData
}
interface NewBalanceData {
    // TODO
}

interface MaximaResponse {
    event: 'MAXIMA'
    data: MaximaMessage
}

interface CommsData {
    event: 'MDSCOMMS'
    data: {
        message: string
        minidapp: string
        public: boolean
    }
}

interface Timer10s {
    event: 'MDS_TIMER_10SECONDS'
    data: {}
}

interface MaxHosts {
    event: 'MAXIMAHOSTS'
    data: {
        connected: boolean
        host: string
    }
}

interface MaxContacts {
    event: 'MAXIMACONTACTS'
    data: {}
}

//////////////////////// empty functions before registration //////////////////////
let whenNewBlock = (d: NewBlockData) => {
    //   console.log("NEWBLOCK event ... please resgister custom callback", d);
}
let whenMining = (d: MiningData) => {
    //   console.log("MINIMG event ... please resgister custom callback", d);
}
let whenMaxima = (d: MaximaMessage) => {
    //   console.log("MAXIMA event ... please resgister custom callback", d);
}
let whenNewBalance = (d: NewBalanceData) => {
    //   console.log("NEW BALANCE event ... please resgister custom callback", d);
}
let whenInit = () => {
    //   console.log("INIT event ... please resgister custom callback");
}
let whenMinimaLog = (d: MinimaLogData) => {
    //   console.log("MINIMA LOG event ... please resgister custom callback", d);
}
let whenComms = (d: CommsData['data']) => {
    //   console.log("COMMS event, please register an event for comms for a custom callback", d);
}
let whenTimer = () => {}
let whenMaxhosts = (d: MaxHosts['data']) => {}
let whenMaxcontacts = () => {}

///////////////////////////

const initializeMinima = () => {
    MDS.init(
        (
            nodeEvent:
                | InitResponse
                | MiningResponse
                | NewBlockResponse
                | MinimaLogResponse
                | NewBalanceResponse
                | MaximaResponse
                | CommsData
                | Timer10s
                | MaxHosts
                | MaxContacts
        ) => {
            // console.log(nodeEvent)

            switch (nodeEvent.event) {
                case 'inited':
                    whenInit()
                    break
                case 'NEWBLOCK':
                    const newBlockData = nodeEvent.data
                    whenNewBlock(newBlockData)
                    break
                case 'MINING':
                    const minimgData = nodeEvent.data
                    whenMining(minimgData)
                    break
                case 'MAXIMA':
                    const maximaData = nodeEvent.data
                    whenMaxima(maximaData)
                    break
                case 'NEWBALANCE':
                    const newBalanceData = nodeEvent.data
                    whenNewBalance(newBalanceData)
                    break
                case 'MINIMALOG':
                    const minimaLogeData = nodeEvent.data
                    whenMinimaLog(minimaLogeData)
                    break
                case 'MDSCOMMS':
                    const commsData = nodeEvent.data
                    whenComms(commsData)
                    break
                case 'MDS_TIMER_10SECONDS':
                    whenTimer() // no data passed
                    break
                case 'MAXIMAHOSTS':
                    const maxhostsData = nodeEvent.data
                    whenMaxhosts(maxhostsData) // no data passed
                    break
                case 'MAXIMACONTACTS':
                    whenMaxcontacts() // no data passed, call maxcontacts command to get latest
                    break
                default:
                    console.error('Unknown event type: ', nodeEvent)
            }
        }
    )
}

///////////////////////// application registers custom callbacks ///////////////////////

function onNewBlock(callback: (data: NewBlockData) => void) {
    whenNewBlock = callback
}

function onMining(callback: (data: MiningData) => void) {
    whenMining = callback
}

function onMaxima(callback: (data: MaximaMessage) => void) {
    whenMaxima = callback
}

function onNewBalance(callback: (data: NewBalanceData) => void) {
    whenNewBalance = callback
}

function onInit(callback: () => void) {
    whenInit = callback
    // Do registration
    initializeMinima()
}

function onMinimaLog(callback: (data: MinimaLogData) => void) {
    whenMinimaLog = callback
}

function onComms(callback: (data: CommsData['data']) => void) {
    whenComms = callback
}

function onTimer(callback: () => void) {
    whenTimer = callback
}

function onMaxhosts(callback: (data: MaxHosts['data']) => void) {
    whenMaxhosts = callback
}

function onMaxcontacts(callback: () => void) {
    whenMaxcontacts = callback
}

export const events = {
    onNewBlock,
    onMining,
    onMaxima,
    onNewBalance,
    onInit,
    onMinimaLog,
    onComms,
    onTimer,
    onMaxhosts,
    onMaxcontacts,
}
