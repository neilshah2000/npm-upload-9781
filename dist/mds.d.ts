export namespace MDS {
    const mainhost: string;
    const minidappuid: string;
    const logging: boolean;
    const DEBUG_HOST: any;
    const DEBUG_PORT: number;
    const DEBUG_MINIDAPPID: string;
    function init(callback: any): void;
    function log(output: any): void;
    function cmd(command: any, callback: any): void;
    function sql(command: any, callback: any): void;
    namespace net {
        function GET(url: any, callback: any): void;
        function POST(url: any, data: any, callback: any): void;
    }
    namespace comms {
        function broadcast(msg: any, callback: any): void;
        function solo(msg: any, callback: any): void;
    }
    namespace form {
        function getParams(parameterName: any): string;
    }
}
