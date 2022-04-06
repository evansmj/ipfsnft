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

    console.log("owner is " + owner.address);

    console.log("about() = " + await ipfsnft.about());

    //console.log("_balances = " + ipfsnft);

    const counter = await ipfsnft.mint(owner.address);

    console.log("counter = " + counter);

    const myTokenURI = await ipfsnft.tokenURI(1);

    console.log("token x = " + myTokenURI);
  });
});