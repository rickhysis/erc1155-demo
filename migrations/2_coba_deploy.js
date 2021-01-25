const Coba = artifacts.require("Coba.sol");

module.exports = async function (deployer) {
  /* Passing constructor value */
    return deployer
    .then(() => deployer.deploy(Coba, [1, 2], [10**8, 20**8]))
    //.then(() => deployer.deploy(Coba, 2, 10**18))
};
