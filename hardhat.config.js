require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    dev:{
      url: "http://127.0.0.1:7545",
      account: [0xc2d5e7d3526507c6aab6f586ee8c81434d38871e687e375b350e987d6e134dee],
      chainId: 1337,
    },
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/3Yz0UXWPoIFnOPKIjo3yZglCCNObP-2g",
      chainId: 11155111,
      accounts: ["29d2751eff381a1528ccfa9ec39cea1760bc7158b1719ed4a788278d0cc3a4c8"],
    }
  },
  solidity: "0.8.19",
};
