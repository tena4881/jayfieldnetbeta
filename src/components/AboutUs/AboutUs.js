import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
                  The decentralized collaborative business headquarters. 
                  Where Social meets business. 
                  </h3>
                  <p className="text-muted web-desc">
                  JayField Consulting is tailored to creating expertise, enhancing business literacy and ownership within our culture. 
                  JayField ensures their clients are complient and knowledgable on the first steps of any venture no matter the industry.
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">Business Consultants</li>
                    <li className="">
                      Business Processing
                    </li>
                    <li className="">
                      Business Plan Drafting
                    </li>
                    <li className="">Notary Public</li>
                    <li className="">Video Courses</li>
                    <li className="">Tax Preperation</li>
                    <li className="">Financial Tips</li>
                    <li className="">Solution Expert</li>
                  </ul>
                  <Link
                    to="#"
                    className="btn btn-primary mt-4 waves-effect waves-light"
                  >
                    Learn More <i className="mdi mdi-arrow-right"></i>
                  </Link>
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
