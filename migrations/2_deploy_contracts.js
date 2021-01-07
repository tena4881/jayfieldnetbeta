const YieldFarmer = artifacts.require('YieldFarmer.sol');

module.exports = function(deployer) {
  deployer.deploy(
    YieldFarmer,
    '0x86f743F5D708684a48D94D88e6D389779a3Fd909', //comptroller
    '0x38dDe250AF51420372BEA9A589ec5cCa7c2Eb9A7', //JFLD
    '0x421183bc8B1a01f40f1650597D79a03Ff499C7dd' //dai
  );
};