import React from 'react';
import { Container } from './styles';
import { Link } from "react-router-dom";


export default function NoJFC() {
  return (
    <Container>
      <p>You need at least 100 JFC to view 😔</p>
      <Link style={{display: 'flex', justifyContent: 'center'}} to="/profile" className="btn btn-primary mt-3 waves-effect waves-light">Get more JFC! </Link>
    </Container>
  )
}