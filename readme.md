## About GGDAO.sol
This smart contract does this.
1. When contract is deployed to the blockchain, it first mints NFT for HRDAO(exactly to the treasury wallet).
2. Owner of the smart contract can change the treasury wallet account.
3. Only owner can transfer ownership to the other acount.
4. Has 6 metadatas on pinata for individual UDHRNFTs.(All metadata is stored in metadatas.zip)
5. Unlimited minting is possible.
6. 'tokenURI' is stored, so that indicates Metadata uploaded on IPFS, pinata.
7. When minting, money sent on message is deposited into treasuary account.
8. According to the amount of donation, level of donation is awarded to each NFT.
9. Metadata contains 
   'DonorLevel(change maker, champion, peacekeeper, visionary, guardian, luminary)'
   'Issuance Number(tokenId + 1)

# Addresses used for smart contract.
    
 TREASURY_WALLET = 0x8408bCBA92b282e75267ce5eA82774d6382103C4
 IPFS Image Address = "https://gateway.pinata.cloud/ipfs/QmQTVLajzcysdEhqLEMtjfbQootQKwHVj3SBoUfDd7JCJ3"


## Steps
  1. compile 'npx hardhat compile'
  2. deploy compiled smart contract, here is 'GGDAO.json'. 
    Run 'npx hardhat run scripts/deploy.js --network ropsten'.
  3. edit root directory/nft-metadata.json and upload it on the IPFS.
    Then, get URI of .json file on IPFS.
  4. call mintNft in web3 with parameter "tokenURI".

