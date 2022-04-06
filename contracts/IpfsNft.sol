//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract IpfsNft is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Ipfs Nft", "IPN") {
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overridden in child contracts.
     */
    function _baseURI() internal pure override returns (string memory) {
        //use base uri for myurl.com/token/1, myurl.com/token/2
        //returns _baseURI() + _tokenId;
        return "ipfs://QmQqyjQkYPsqEs3pz9uQJPVbzwZ6Ze3QFUhuqHtjNQQBUh/";
    }

    function about() public pure returns (string memory) {
        return "Hello world I use ipfs";
    }

    function mint(address to) public returns (uint256) {
        console.log("start mint()");
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());
        console.log("after safeMint()");
        return _tokenIdCounter.current();
    }

}
