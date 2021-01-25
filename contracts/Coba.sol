pragma solidity 0.6.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Coba is ERC1155 {

    constructor(
        uint256[] memory _id, 
        uint256[] memory _tokenSuply
    ) public ERC1155("https://lare-media.tech/api/{id}.json") {
        for (uint i=0; i<_id.length; i++) {
        _mint(msg.sender, _id[i], _tokenSuply[i], "");
        }
    }
}