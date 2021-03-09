pragma solidity >=0.6.0 <0.8.0;

import "./JayFieldCoin.sol";

import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

contract JFVault is BaseRelayRecipient{
    JayFieldCoin public token;
    
    event Contributed(uint amount);
    event ContributionFailed(uint256 _amount);
    address owner;
    address payable withdrawAddr;
    
    mapping(address => uint) balances;
    mapping(address => uint) earnedJFC;
    mapping(address => uint) JFCAddress;
    
    
    
    constructor(address payable _withdrawAddr, JayFieldCoin _token) payable public {
        owner = msg.sender;
        withdrawAddr = _withdrawAddr;
        token = _token;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    
    
    
    //TO-DO Make Only owner
   function addJFCToVault(uint _amount) public onlyOwner {
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
    
      
       
    //allows people to contribute to JayField Net   
    function Contribute() payable public {
        
        //Check to make sure there is enough JFC in Vault
        uint256 vaultBalance = this.getVaultJFCBalance();
        if(vaultBalance == 0){
            revert("Not enough JFC in the vault to transfer");
        }
        
        
        //Takes contribution in WEI 
        uint256 amountContributed = msg.value;
        
        //THIS determins how much JFC they will get based on contribution 
        uint256 jfcAmount = (amountContributed*10000)/(10**18);
        
        //Converts JFC to mJFC
        uint256 mJFC = jfcAmount*100;
        
        //THIS makes sure we have enough mJFC
        //If yes, then send
        if(mJFC >= vaultBalance){
            revert("Not enough JFC in the vault to transfer");
        }
        
        token.transfer(msg.sender, mJFC);
        balances[msg.sender] += msg.value;
        earnedJFC[msg.sender] += mJFC;
        emit Contributed(msg.value);
    }

    
    function getUserJFCBalance(address _user) view public returns(uint){
        return token.balanceOf(_user);
    }

    function updateOwner(address _newOwner) onlyOwner public{
        owner = _newOwner;
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
    
    function getEarnedJFC() view public returns(uint){
        return earnedJFC[msg.sender];
    }
    
    function updateWithdrawAddress(address payable _newAddress) onlyOwner public returns(bool success){
        withdrawAddr = _newAddress;
        return true;
    }

     
    function Withdraw() onlyOwner public returns(bool success)  {
        uint256 amount = address(this).balance;
        withdrawAddr.transfer(amount);
        return true;
    }
}
