import { MaximaMessage, Txpow } from "./../types/minima";
interface MiningData {
    mining: boolean;
    txpow: Txpow;
}
interface NewBlockData {
    txpow: Txpow;
}
interface MinimaLogData {
    message: string;
}
interface NewBalanceData {
}
interface CommsData {
    event: "MDSCOMMS";
    data: {
        message: string;
        minidapp: string;
        public: boolean;
    };
}
declare function onNewBlock(callback: (data: NewBlockData) => void): void;
declare function onMining(callback: (data: MiningData) => void): void;
declare function onMaxima(callback: (data: MaximaMessage) => void): void;
declare function onNewBalance(callback: (data: NewBalanceData) => void): void;
declare function onInit(callback: () => void): void;
declare function onMinimaLog(callback: (data: MinimaLogData) => void): void;
declare function onComms(callback: (data: CommsData["data"]) => void): void;
export declare const events: {
    onNewBlock: typeof onNewBlock;
    onMining: typeof onMining;
    onMaxima: typeof onMaxima;
    onNewBalance: typeof onNewBalance;
    onInit: typeof onInit;
    onMinimaLog: typeof onMinimaLog;
    onComms: typeof onComms;
};
export {};
