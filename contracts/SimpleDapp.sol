pragma solidity >=0.4.22 <0.6.0;

// call checkIfExists and registerName from front-end UI

contract SimpleDapp {
    mapping (string => bool) private names;


    // check to see if person exists in names mapping, returns true if exists
    // if false, can add name to smart contract
    function checkIfExists(string memory name) public view returns (bool) {
        return names[name];
    }

    // register name within smart contract
    function registerName(string memory name) public {
        names[name] = true;
    }
}