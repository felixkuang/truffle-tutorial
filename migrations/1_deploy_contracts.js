const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = async function(deployer) {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MetaCoin);
  await deployer.deploy(MetaCoin);
  const instance = await MetaCoin.deployed();

  console.log("MetaCoin:",instance.address);

};