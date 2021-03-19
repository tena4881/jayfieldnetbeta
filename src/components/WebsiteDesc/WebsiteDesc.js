import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class WebsiteDesc extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-lg bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 className="text-white">NOT SURE WHAT STEPS TO TAKE NEXT?</h2>
                <p className="pt-3 home-desc">
                  Our experience JayField Geeks will be glad to consult you over the phone for free to discuss the best plan of action for you.
                </p>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
                  <a href="https://jayfield.setmore.com/" className="btn btn-primary mt-4 waves-effect waves-light">Contact Us </a>
               </div>
              </Col>
            </Row>
          </Container>
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="dorsin" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDesc;
