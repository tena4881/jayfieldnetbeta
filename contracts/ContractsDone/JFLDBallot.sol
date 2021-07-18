// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.6.0 <0.8.0;

import "./JFC.sol";

/** 
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract JFBallot {
   
    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint256 vote;   // index of the voted proposal
    }

    struct Proposal {
        // If you can limit the length to a certain number of bytes, 
        // always use one of bytes1 to bytes32 because they are much cheaper
        uint256 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }
    event Vote(uint who);   // declaring event
    event VotedFor(uint who);   // declaring event
    event NoVotes(uint who);   // declaring event
    address public chairperson;
    address payable resetAddr;
    mapping (uint=> address ) private voterAdd;
    mapping(address => Voter) public voters;
    JayFieldCoin public token;
    mapping(address => uint) balances;
    mapping(address => uint) earnedJFC;
    mapping(address => uint) JFCAddress;
    uint _totalVoters; 
    // Mapping from address to position in the array
    // 0 means the address is not in the array
    mapping (address => uint) index;

 

    
    Proposal[] public proposals;

    /** 
     * @dev Create a new ballot to choose one of 'proposalNames'.
     * @param proposalNames names of proposals
     */
    constructor(uint256[] memory proposalNames, JayFieldCoin _token) payable public {
        chairperson = msg.sender;
        token = _token;
        voters[chairperson].weight = 1;
        _totalVoters = 0;
        for (uint i = 0; i < proposalNames.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }
    
    /** 
     * @dev Give 'voter' the right to vote on this ballot. May only be called by 'chairperson'.
     * @param voter address of voter
     */
    function giveRightToVote(address voter) public {
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(
            !voters[voter].voted,
            "The voter already voted."
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

   function resetBallot() public {
         require(
            msg.sender == chairperson,
            "Only chairperson can give reset the ballot"
        );
        
        uint shares;
        for (uint i = 0; i < proposals.length; i++) {
            proposals[i].voteCount = 0;
        }
        
        
        for(uint i = 0 ; i < _totalVoters; i++) {
            voters[voterAdd[i]].voted = false;
            voters[voterAdd[i]].delegate = address(0x0000000000000000000000000000000000000000);
            voters[voterAdd[i]].weight = 1;
        }
        
    }
  

    
    function vote() public payable {
        Voter storage sender = voters[msg.sender];
        require(this.getUserJFCBalance(msg.sender) > 0, "You dont have JFC to vote!");
        require(!sender.voted, "No more votes");
        if(sender.voted){
            emit NoVotes(sender.vote);
            sender.voted = true;
        }else {
        sender.vote = msg.value;
        sender.voted = true;
        voterAdd[_totalVoters] = msg.sender;
        _totalVoters++;
        
        // If 'proposal' is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[msg.value].voteCount += this.getUserJFCBalance(msg.sender)* 7;
        emit Vote(msg.value);
        }
        
        
       
        
    }
    
    function getUserJFCBalance(address _user) view public returns(uint){
        return token.balanceOf(_user);
    }
    
    function getVoteCount(uint proposal) view public returns(uint){
         return proposals[proposal].voteCount;
    }
    
    /** 
     * @dev Computes the winning proposal taking all previous votes into account.
     * @return winningProposal_ index of winning proposal in the proposals array
     */
    function winningProposal() public view
            returns (uint256 winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }
 

    /** 
     * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
     * @return winnerName_ the name of the winner
     */
    function winnerName() public view
            returns (uint256 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}
