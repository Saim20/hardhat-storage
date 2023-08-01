// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract SimpleStorage {
    mapping (address => uint) addressToNumber;

    event FavouriteNumberSet(uint favouriteNumber);

    function setFavouriteNumber(uint _favouriteNumber) public {
        addressToNumber[msg.sender] = _favouriteNumber;
        console.log("Favourite number set to %s", _favouriteNumber);
    }

    function getFavouriteNumber() public view returns (uint) {
        console.log("Favourite number is %s", addressToNumber[msg.sender]);
        return addressToNumber[msg.sender];
    }
}
