import React from 'react';
  
  const [amount, setAmount] = useState();

  function SimpleForm(props) {
    const handleSubmit= (e) => {
      e.preventDefault();
      // ???
    }
  
    return (
      <form onSubmit={e => {handleSubmit(e)}}>
        <br />
        <input 
          name='amount' 
          type='text'
          onChange={e => setAmount(e.target.value)}
          value={amount}
        />
      </form>
    )
  }

  export default SimpleForm;