require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const fs = require("fs");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     },
    /*

    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
