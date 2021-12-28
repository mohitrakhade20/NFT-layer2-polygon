const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("Static");
  console.log("NFT deployed to:", NFT.address);
  const CONTRACT_ADDRESS = "X"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  console.log("NFT ", contract.balanceOf("X").then((err)=>{
	  console.log(err)
  }));

//   const owner = await contract.ownerOf(1);
//   console.log("Owner:", owner);
//   const uri = await contract.tokenURI(1);
//   console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});