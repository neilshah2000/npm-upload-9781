export interface Status {
  version: string;
  devices: number;
  length: number;
  weight: number;
  configuration: string;
  minima: number;
  coins: number;
  data: string;
  memory: {
    ram: string;
    disk: string;
    files: {
      txpowdb: string;
      archivedb: string;
      cascade: string;
      chaintree: string;
      wallet: string;
      userdb: string;
      p2pdb: string;
    };
  };
  chain: {
    block: number;
    time: string;
    hash: string;
    speed: string;
    difficulty: string;
    size: number;
    length: number;
    weight: number;
    branches: number;
    cascade: {
      start: number;
      length: number;
      weight: string;
    };
  };
  txpow: {
    mempool: number;
    ramdb: number;
    txpowdb: number;
    archivedb: number;
  };
  network: {
    host: string;
    hostset: boolean;
    port: number;
    connecting: number;
    connected: number;
    rpc: boolean;
    p2p: {
      address: string;
      isAcceptingInLinks: boolean;
      numInLinks: number;
      numOutLinks: number;
      numNotAcceptingConnP2PLinks: number;
      numNoneP2PLinks: number;
      numKnownPeers: number;
      numAllLinks: number;
      nio_inbound: number;
      nio_outbound: number;
    };
  };
}

export interface NetworkPeer {
  welcome: string;
  uid: string;
  incoming: boolean;
  host: string;
  port: number;
  minimaport: number;
  valid: true;
  connected: string;
}

export interface Token {
  tokenid: string;
  token: string | TokenNFTDetail;
  total: string;
  sendable: string;
  unconfirmed: string;
  confirmed: string;
  decimals: string;
  coinid?: string;
  totalamount?: string;
  scale?: string;
  description?: string;
  icon?: string;
  proof?: string;
  script?: string;
}

export interface TokenNFTDetail {
  description: string;
  external_url: string;
  image: string;
  name: string;
  nft: boolean;
  owner: string;
  webvalidate: string;
}

export interface NetworkStatus {
  version: string;
  time: string;
  uptime: string;
  conf: string;
  host: string;
  minimaport: number;
  rpcport: number;
  websocketport: number;
  minidappserver: number;
  automine: boolean;
  root: string;
  tip: string;
  total: string;
  lastblock: number;
  lasttime: string;
  cascade: string;
  difficulty: string;
  txpowdb: number;
  ram: string;
  mempooltxn: number;
  mempoolcoins: number;
  chainspeed: number;
  chainlength: number;
  chainweight: string;
  connections: number;
  txpowfiles?: string;
  txpowfolder?: string;
  IBD?: string;
}

export interface Address {
  script: string;
  address: string;
  miniaddress: string;
  simple: boolean;
  default: boolean;
  publickey: string;
  track: boolean;
}

export interface Coin {
    coinid: string
    address: string
    miniaddress: string
    amount: string
    tokenid: string
    floating: boolean
    storestate: boolean
    created: string
    mmrentry: string
    token: Object
    state: []
    spent: boolean
}

export interface MMRProof {
  blocktime: string;
  entry: string;
  data: {
    hashonly: boolean;
    value: string;
    finalhash: string;
    spent: boolean;
    coin: Coin;
  };
  inblock: string;
  prevstate: [];
}

export interface PublicKey {
  bits: number;
  uses: string;
  allowed: string;
  publickey: string;
}

export interface SignatureWitnessProof {
  data: string;
  hashbits: number;
  proofchain: [];
  chainsha: string;
  finalhash: string;
}

export interface SignatureWitness {
  signature: string;
  proof: SignatureWitnessProof;
}

export interface Script {
  script: string;
  proof: Proof;
}

export interface Proof {
  data: string;
  hashbits: number;
  proofchain: [];
  chainsha: string;
  finalhash: string;
}

export interface Witness {
  signatures: SignatureWitness[];
  mmrproofs: MMRProof[];
  tokens: [];
  scripts: Script[];
}

export interface Magic {
  prng: string;
  maxtxpow: number;
  maxtxn: number;
  maxkissvm: number;
}

export interface WitnessBurn {
  signatures: [];
  mmrproofs: [];
  tokens: [];
  scripts: [];
}

export interface TransactionBurn {
  inputs: [];
  outputs: [];
  state: [];
  linkhash: string;
}

export interface TransactionInput {
  coinid: string;
  address: string;
  mxaddress: string;
  amount: string;
  tokenid: string;
  floating: boolean;
  storestate: boolean;
}

export interface TransactionOutput {
  coinid: string;
  address: string;
  mxaddress: string;
  amount: string;
  tokenid: string;
  floating: boolean;
  storestate: boolean;
}

export interface Transaction {
  inputs: TransactionInput[];
  outputs: TransactionOutput[];
  state: State[];
  linkhash: string;
  tokengen?: TokenGenerator;
}

export interface TransactionListItem {
  id: string;
  outputcoindata: string[];
  transaction: Transaction;
  witness: Witness;
}

export interface TransactionBody {
  txndiff: string;
  txn: Transaction;
  witness: Witness;
  burntxn: TransactionBurn;
  burnwitness: WitnessBurn;
  txnlist: [];
  magic: Magic;
}

export interface SuperParents {
  difficulty: number;
  count: number;
  parent: string;
}

export interface TransactionHeader {
  block: string;
  blkdiff: string;
  cascadelevels: number;
  superparents: SuperParents[];
  chainid: string;
  parentchainid: string;
  mmr: string;
  total: string;
  mmrpeaks: string;
  nonce: string;
  timemilli: string;
  date: string;
}

export interface Txpow {
  txpowid: string;
  isblock: boolean;
  istransaction: boolean;
  superblock: number;
  size: number;
  header: TransactionHeader;
  hasbody: boolean;
  body: TransactionBody;
}

export interface Value {
  token: string;
  name: any;
  amount: string;
}

export interface TokenGenerator {
  tokenid: string;
  token: string;
  description: string;
  icon: string;
  proof: string;
  total: string;
  decimals: string;
  script: string;
  coinid: string;
  totalamount: string;
  scale: string;
}

export interface State {
  port: string;
  data: string;
  keeper: string;
}

export interface MaximaMessage {
  application: string;
  data: string;
  from: string;
  msgid: string;
  random: string;
  time: string;
  timemilli: number;
  to: string;
}
