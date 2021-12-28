const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("Static");
  const URI = "ipfs://QmeucbCuy81fZDbMmyRXXm9JxN2j3NKYMJybAXsXsG5jqV"
  const WALLET_ADDRESS = "0x4235B5b6EB2d399D626b58d086E078f96Cac1091"
  const CONTRACT_ADDRESS = "0x47c5e40890bcE4a473A49D7501808b9633F29782"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});