import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import image from '../../assets/images/JFCCoin.gif'
class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="vertical-content">
              <Col lg={5}>
                <div className="features-box">
                  <h3>
                  JayFieldCOIN ($JFC): The CURRENCY of JayFieldNET Governing Community, Education and Financial Technology.
                  <br></br><br></br>Our Smart Contracts Enable Effortless Migration From Internet 2.0 to Web 3.
                  </h3>
                  <p className="text-muted web-desc">

                   </p>


                </div>
              </Col>
              <Col lg={7}>
                <div className="features-img features-right text-right">
                  <img
                    src={image}
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
