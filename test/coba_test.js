const Coba = artifacts.require("Coba");

contract("Coba", async accounts => {
  it("should put 100000000 & 25600000000 in the first & second account", async () => {
    let instance = await Coba.deployed();
    let balance1 = await instance.balanceOf.call(accounts[0], 1);
    let balance2 = await instance.balanceOf.call(accounts[0], 2);
    assert.equal(balance1.valueOf(), 100000000);
    assert.equal(balance2.valueOf(), 25600000000);
  });
});