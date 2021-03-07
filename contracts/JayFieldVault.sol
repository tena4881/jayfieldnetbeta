pragma solidity ^0.8.0;

import "./JayFieldCoin.sol";



contract Test{
    JayFieldCoin public token;
    
    event Contributed(uint amount);
    event Sold(uint256 amount);
    address owner;
    address payable withdrawAddr;
    uint rate;
    
    mapping(address => uint) balances;
    mapping(address => uint) JFCAddress;
    
    
    
    constructor(address payable _withdrawAddr, JayFieldCoin _token) payable public {
        owner = msg.sender;
        withdrawAddr = _withdrawAddr;
        token = _token;
        rate = 10000;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    
    
    
    //TO-DO Make Only owner
   function addJFCToVault(uint _amount) public {
            uint toJFC = _amount * 100;
            require(this.getUserJFCBalance(msg.sender) > 0, "You dont have JFC to add!");
            require(toJFC > 0, "You need to add at least some JFC");
            uint256 allowance = getAllowance();
            token.increaseAllowance(address(this), toJFC);
            require(allowance >= toJFC, "Check the token allowance");
            token.transferFrom(msg.sender, address(this), toJFC);
            
            
    } 
    
    function getAllowance() public  view returns(uint){
        return token.allowance(msg.sender, address(this));
    }
    
    function jfcApprove(uint _amount) public returns(bool){
        return token.approve(address(this), _amount);
    }    
       
    //allows people to contribute to JayField Net   
    //Turn on JFC vault balance checker before produciton!!!
    function Contribute() payable public {
        uint256 vaultBalance = this.getVaultJFCBalance();
        require(vaultBalance > 0,"Not enough JFC in the reserve" );
        uint256 amountContributed = (msg.value)/(1 ether);
        require(amountContributed > 0, "You need to contribute at least 0.02");
        uint256 jftAmount = (amountContributed*10000)*100;
        require(jftAmount <= vaultBalance, "Not enough JFC in the reserve");
        token.transfer(msg.sender, jftAmount);
        balances[msg.sender] += msg.value;
    }

    
    function getUserJFCBalance(address _user) view public returns(uint){
        return token.balanceOf(_user);
    }


    
    function getBalanceWithdrawAddr() view public returns(uint){
        return withdrawAddr.balance;
    }

    function getVaultETHBalance() view public returns(uint){
        return address(this).balance;
    }
    
     function getVaultJFCBalance() view public returns(uint){
        return token.balanceOf(address(this));
    }
    
    function getContribution() view public returns(uint){
        return balances[msg.sender];
    }


    function Withdraw() onlyOwner public returns(bool success)  {
        uint256 amount = address(this).balance;
        withdrawAddr.transfer(amount);
        return true;
    }
}
