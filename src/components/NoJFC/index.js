import React from 'react';
import { Container } from './styles';
import { Link } from "react-router-dom";
import {ExchangeCard,BodyCard ,ExchangeH1, ExchangeH4} from '../../pages/Profile/Profile'


export default function NoJFC() {
  return (
    <BodyCard>

    
    <Container>
      <ExchangeH4>Insufficient JFC</ExchangeH4>
      <p><br></br>You need at least 100 JFC to view 😔</p>
      <Link to="/profile" className="btn btn-primary mt-3 waves-effect waves-light">Earn more JFC! </Link>
    </Container>
    </BodyCard>
  )
}