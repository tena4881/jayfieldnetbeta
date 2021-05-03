import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { ExchangeH3 } from "../../pages/Profile/Profile";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="vertical-content">
              <Col lg={5}>
                <div className="features-box">
                  <ExchangeH3>
                  The JayFieldNETwork is dedicated to creating expertise, enhancing business literacy and ownership within our culture.
                  <br></br><br></br>All members are verified on blockchain technology and stay up to date on industry news.
                  </ExchangeH3>
                  <p className="text-muted web-desc">
                  
                   </p>
                  
                 
                </div>
              </Col>
              <Col lg={7}>
                <div className="features-img features-right text-right">
                  <img
                    src="assets/images/online-world.svg"
                    alt="macbook"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
