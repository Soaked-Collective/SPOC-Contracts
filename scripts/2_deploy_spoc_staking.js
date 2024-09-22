const { tokenAddress, devAddress, rewardToken } = require("../.secrets.json");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Contract = await ethers.getContractFactory("SpocStakingContract");
  const contract = await Contract.deploy(tokenAddress, devAddress, rewardToken);
  console.log("Token address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
