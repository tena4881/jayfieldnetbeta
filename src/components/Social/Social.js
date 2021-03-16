import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Social extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="contact-social bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ul className="list-inline social mt-4">
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-linkedin"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-google-plus"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-dribbble"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} className="mt-4">
                <p className="contact-title">
                  <i className="pe-7s-call"></i> &nbsp;646 552 6690
                </p>
              </Col>
              <Col lg={3} className="mt-4 text-right">
                <p className="contact-title">
                  <i className="pe-7s-mail-open"></i>&nbsp; contact@jayfieldllc.com
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Social;
