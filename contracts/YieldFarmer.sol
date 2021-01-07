pragma solidity ^0.7.3;

import './IERC20.sol';
import './ComptrollerInterface.sol';
import './JCoinInterface.sol';

contract YieldFarmer {
  ComptrollerInterface public comptroller;
  JCoinInterface public jCoin;
  IERC20 public dai;
  uint borrowFactor = 70;

  constructor(
    address comptrollerAddress,
    address jCoinAddress,
    address daiAddress
  ) {
    comptroller = ComptrollerInterface(comptrollerAddress);
    jCoin = JCoinInterface(jCoinAddress);
    dai = IERC20(daiAddress);
    address[] memory jCoins = new address[](1);
    jCoins[0] = jCoinAddress; 
    comptroller.enterMarkets(jCoins);
  }

  function openPosition(uint initialAmount) external {
    uint nextCollateralAmount = initialAmount;
    for(uint i = 0; i < 5; i++) {
      nextCollateralAmount = _supplyAndBorrow(nextCollateralAmount);
    }
  }

  function _supplyAndBorrow(uint collateralAmount) internal returns(uint) {
    dai.approve(address(jCoin), collateralAmount);
    jCoin.mint(collateralAmount);
    uint borrowAmount = (collateralAmount * 70) / 100;
    jCoin.borrow(borrowAmount);
    return borrowAmount;
  }

  function closePosition() external {
    uint balanceBorrow = jCoin.borrowBalanceCurrent(address(this));
    dai.approve(address(jCoin), balanceBorrow);
    jCoin.repayBorrow(balanceBorrow);
    uint balancejCoin = jCoin.balanceOf(address(this));
    jCoin.redeem(balancejCoin);
  }
}