import React, { useState } from "react";
import { Input, ModalP, StakeBtn } from "../Modal/ModalElements";
export function StakeForm(props) {
  const [stakeAmount, setstakeAmount] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      //MODAL FOR SENDING ETH
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <ModalP>TEST MODE!!! PLEASE DO NOT SEND ANY ETH! </ModalP>
     
      <Input
          type="text"
          value={stakeAmount}
          onChange={e => setstakeAmount(e.target.value)}
        />
      <StakeBtn type="submit" value="Submit">Submit</StakeBtn>
    </form>
  );
}