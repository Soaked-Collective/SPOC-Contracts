// hardhat.config.js
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import { HardhatUserConfig } from "hardhat/types";

const {
  mainnetAccount,
  testnetAccount,
  localhostDeployAccount,
} = require("./.secrets.json");

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: { enabled: true, runs: 1500 },
        },
      },
    ],
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
      accounts: [localhostDeployAccount],
    },
    testnet: {
      url: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      accounts: [testnetAccount],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [mainnetAccount],
    },
  },
};

export default config;
