pragma solidity ^0.7.3;

interface ComptrollerInterface {
  function enterMarkets(address[] calldata jCoins) external returns (uint[] memory);
  function getAccountLiquidity(address owner) external view returns(uint, uint, uint);
}