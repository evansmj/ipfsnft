const ether = require("@openzeppelin/test-helpers/src/ether");
const { expect } = require("chai");
const { ethers } = require("hardhat");

/*describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});*/

describe("Mint one token and observer tokenURI", function () {
  it("use to check token uri for now", async function () {
    const [owner] = await ethers.getSigners();

    const IpfsNft = await ethers.getContractFactory("IpfsNft");
    const ipfsnft = await IpfsNft.deploy();
    await ipfsnft.deployed();

    await ipfsnft.mint(owner.address); // 1
    await ipfsnft.mint(owner.address); // 2
    await ipfsnft.mint(owner.address); // 3

    const myTokenURI1 = await ipfsnft.tokenURI(1);
    const myTokenURI2 = await ipfsnft.tokenURI(2);
    const myTokenURI3 = await ipfsnft.tokenURI(3);

    expect(myTokenURI1).to.equal("ipfs://QmYTYtBcehRdhiZuCQxyEBpoxZPV2yqyWLpVaXLQUH4BmH/1.mp4");
    expect(myTokenURI2).to.equal("ipfs://QmYTYtBcehRdhiZuCQxyEBpoxZPV2yqyWLpVaXLQUH4BmH/2.mp4");
    expect(myTokenURI3).to.equal("ipfs://QmYTYtBcehRdhiZuCQxyEBpoxZPV2yqyWLpVaXLQUH4BmH/3.mp4");
  });
});