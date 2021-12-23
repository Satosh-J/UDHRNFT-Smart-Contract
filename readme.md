## About GGDAO.sol
This smart contract does this.
1. When contract is deployed to the blockchain, it first mints NFT for HRDAO.
2. Owner of the smart contract can change the account where donating money is deposited.
3. Only owner can transfer ownership to the other acount.
4. Has struct called 'NFTMeta' as metadata for minted nfts. When minting, issuance number and level of donation is added to the struct array nftMetas.
5. Unlimited minting is possible.
6. 'tokenURI' is stored, so that indicates Metadata uploaded on IPFS, pinata.
7. When minting, money sent on message is deposited into DAO account.
8. According to the amount of donation, level of donation is awarded to each NFT.

   # KEYs used to test.
    DEPLOYER_PRIVATE_KEY="81ebdc9308eec8c5cd3884e3c16728f6601f3f09046dd8b26db61de0d5709abf"
    SMART_CONTRACT_ADDRESS = "0x4D7627DB302978F13004d449b80C4aE81E9c165C"
    IPFS Image Address = "https://gateway.pinata.cloud/ipfs/QmdnvNL84wWcBUrFVjSAKGsKqZ5yFFyp5RQRxYZEHzfq7d"
    

## Steps
  1. compile 'npx hardhat compile'
  2. deploy compiled smart contract, here is 'GGDAO.json'. 
    Run 'npx hardhat run scripts/deploy.js --network ropsten'.
  3. edit root directory/nft-metadata.json and upload it on the IPFS.
    Then, get URI of .json file on IPFS.
  4. call mintNft in web3 with parameter "tokenURI".

