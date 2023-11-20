const MyToken = artifacts.require("MyToken");

module.exports = async function(deployer) {
  await deployer.deploy(MyToken);
  const instance = await MyToken.deployed();

  console.log("MyToken:",instance.address);
};