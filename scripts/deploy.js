async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    // deploy contracts here:
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
  
    // deploy contracts here:
    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy(1);
  
    console.log("NFT contract address", nft)
    console.log("Marketplace contract address", marketplace)
    console.log("NFT contract address", nft.address)
    console.log("Marketplace contract address", marketplace.address)
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });