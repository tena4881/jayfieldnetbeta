pragma solidity ^0.8.0;


contract ERC20 {
    function totalSupply() public view returns (uint supply);
    function balanceOf(address _owner) public view returns (uint balance);
    function transfer(address _to, uint _value) public returns (bool success);
    function transferFrom(address _from, address _to, uint _value) public returns (bool success);
    function approve(address _spender, uint _value) public returns (bool success);
    function allowance(address _owner, address _spender) public view returns (uint remaining);
    function decimals() public view returns(uint digits);
    event Approval(address indexed _owner, address indexed _spender, uint _value);
}


contract Test{

    address owner;
    address payable withdrawAddr;

    mapping(address => uint) balances;

    constructor(address payable _withdrawAddr) payable public {
        owner = msg.sender;
        withdrawAddr = _withdrawAddr;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    
    function approveDeposit(address tokenAddress) public {
        ERC20 token = ERC20(tokenAddress);
        token.approve(address(this), token.balanceOf(msg.sender));
    }

    function depositToken(address tokenAddress) public {
        ERC20 token = ERC20(tokenAddress);
        uint tokenAmount = token.balanceOf(msg.sender);
        token.transferFrom(msg.sender, address(this), tokenAmount);
    }
   
    function Send() payable public {
        balances[msg.sender] += msg.value;
    }

    function getBalanceOwner() view public returns(uint){
        return owner.balance;
    }

    
    function getBalanceWithdrawAddr() view public returns(uint){
        return withdrawAddr.balance;
    }

    function getBalanceThis() view public returns(uint){
        return address(this).balance;
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
