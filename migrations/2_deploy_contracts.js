var SimpleDapp = artifacts.require("./SimpleDapp.sol")

module.exports = function(deployer) {
  /* Deploy your contract here with the following command */
  // deployer.deploy(YourContract);
  deployer.deploy(SimpleDapp);
};
