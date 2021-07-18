import React from 'react';
import { Container } from './styles';
import { Link } from "react-router-dom";


export default function NoJFC() {
  return (
    <>
      
    <h1><br></br>
       </h1>
    

    
    <Container>
      <h4>Insufficient JFC</h4>
      <p><br></br>You need JFC to view 😔</p>
      <Link to="/dashboard" className="btn btn-primary mt-3 waves-effect waves-light">Earn more JFC! </Link>
    </Container>
   
    </>
  )
}