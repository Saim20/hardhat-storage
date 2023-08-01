// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.parseEther("0.001");

  const storage = await hre.ethers.deployContract("SimpleStorage", [], {});

  await storage.waitForDeployment();

  console.log(
    `SimpleStorage deployed to ${storage.target}`
  );

  await storage.setFavouriteNumber(42);

  const favNumber = await storage.getFavouriteNumber();
  console.log(`Favourite number is ${favNumber}`);

  await storage.setFavouriteNumber(100);

  const favNumber2 = await storage.getFavouriteNumber();
  console.log(`Favourite number is ${favNumber2} after change`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
