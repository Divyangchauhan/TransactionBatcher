import { ethers } from "hardhat";

async function main() {
  const transactionBatcher = await ethers.deployContract("TransactionBatcher");

  await transactionBatcher.waitForDeployment();

  console.log(`TransactionBatcher deployed to ${transactionBatcher.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
