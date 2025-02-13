import { retrieveEnvVariable } from "../utils"
import { PublicKey } from "@solana/web3.js";

export const PRIVATE_KEY = retrieveEnvVariable('PRIVATE_KEY')
export const RPC_ENDPOINT = retrieveEnvVariable('RPC_ENDPOINT')
export const RPC_WEBSOCKET_ENDPOINT = retrieveEnvVariable('RPC_WEBSOCKET_ENDPOINT')

export const TOKEN_NAME = retrieveEnvVariable('TOKEN_NAME')
export const TOKEN_SYMBOL = retrieveEnvVariable('TOKEN_SYMBOL')
export const DESCRIPTION = retrieveEnvVariable('DESCRIPTION')
export const TOKEN_SHOW_NAME = retrieveEnvVariable('TOKEN_SHOW_NAME')
export const TOKEN_CREATE_ON = retrieveEnvVariable('TOKEN_CREATE_ON')
export const TWITTER = retrieveEnvVariable('TWITTER')
export const TELEGRAM = retrieveEnvVariable('TELEGRAM')
export const WEBSITE = retrieveEnvVariable('WEBSITE')
export const FILE = retrieveEnvVariable('FILE')

export const SWAP_AMOUNT = Number(retrieveEnvVariable('SWAP_AMOUNT'))
export const DISTRIBUTION_WALLETNUM = Number(retrieveEnvVariable('DISTRIBUTION_WALLETNUM'))

export const JITO_FEE = Number(retrieveEnvVariable('JITO_FEE'))

export const global_mint = new PublicKey("p89evAyzjd9fphjJx7G3RFA48sbZdpGEppRcfRNpump")
export const PUMP_PROGRAM = new PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");


// export const BUY_INTERVAL_MIN = Number(retrieveEnvVariable('BUY_INTERVAL_MIN'))
// export const BUY_INTERVAL_MAX = Number(retrieveEnvVariable('BUY_INTERVAL_MAX'))

// export const SELL_INTERVAL_MIN = Number(retrieveEnvVariable('SELL_INTERVAL_MIN'))
// export const SELL_INTERVAL_MAX = Number(retrieveEnvVariable('SELL_INTERVAL_MAX'))

// export const DISTRIBUTE_WALLET_NUM = Number(retrieveEnvVariable('DISTRIBUTE_WALLET_NUM'))

// export const JITO_MODE = retrieveEnvVariable('JITO_MODE') === 'true'
// export const JITO_FEE = Number(retrieveEnvVariable('JITO_FEE'))

// export const SLIPPAGE = Number(retrieveEnvVariable('SLIPPAGE'))

// export const TOKEN_MINT = retrieveEnvVariable('TOKEN_MINT')





