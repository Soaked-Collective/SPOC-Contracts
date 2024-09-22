const { ethers, upgrades } = require("hardhat");

async function main() {
  const SpocTokenV1 = await ethers.getContractFactory("SpocTokenV1");

  console.log("Deploying contracts with the account");

  const contract = await upgrades.deployProxy(SpocTokenV1, [], {
    initializer: "initialize",
  });
  await contract.waitForDeployment();
  console.log("SpocToken deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
