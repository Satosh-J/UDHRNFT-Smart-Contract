/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
   const accounts = await hre.ethers.getSigners();
 
   for (const account of accounts) {
     console.log(account.address);
   }
 });
 
 // You need to export an object to set up your config
 // Go to https://hardhat.org/config/ to learn more
 

const { API_URL, ROP_PRIVATE_KEY, POLYGON_PRIVATE_KEY, POLYGON_URL,PRIVATE_KEY} = process.env;
module.exports = {
   defaultNetwork: "hardhat",
   solidity: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
   networks: {
      hardhat: {
            forking: {
              url: "https://eth-mainnet.alchemyapi.io/v2/Jef93sYTgg4kTBkbwlxNEr5oAq-fVnaR",
              // blockNumber: 13775411,
          },
         //  accounts: [`0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6`]

      },
      // mainnet: {
      //    url: API_URL,
      //    accounts: [`0x${PRIVATE_KEY}`],
      //    timeout: 200000
      // },
      ropsten: {
         url: API_URL,
         accounts: [`0x${ROP_PRIVATE_KEY}`],
      },
      mumbai: {
         url: POLYGON_URL,
         accounts: [`0x${POLYGON_PRIVATE_KEY}`],
         timeout: 40000
      }
   },
   settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
   }
}