
pragma solidity 0.5.7;

/** 
* @dev A simple bank which allows users to deposit, withdraw and read their ether balance
*/
contract EthereumBank {
    //It will keep track of balance of each user
    mapping (address => uint256) private _balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    
    /** 
    * @dev Allows user to deposit ether in the bank
    */
    function deposit() external payable {
        uint256 value = msg.value;
        require(value > 0, "Inavlid value!!");

        //Not handling integer overflow and underflow here
        //Update balance of user
        _balances[msg.sender] = _balances[msg.sender] + value;
        emit Deposit(msg.sender, value);
    }

    /** 
    * @dev Allows user to withdraw ethers from his/her balance
    * @param amount Amount of ethers to withdraw
    */
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0!!");
        //Amount to withdraw should not be greater than user's balance in the bank
        require(
            amount <= _balances[msg.sender],
            "Insufficient account balance!!"
        );
        _balances[msg.sender] = _balances[msg.sender] - amount;
        msg.sender.transfer(amount);
        emit Withdraw(msg.sender, amount);
    }

    /** 
    * @dev Returns user ether balance in the bank
    */
    function getUserBalance() external view returns(uint256) {
        return _balances[msg.sender];
    }
}