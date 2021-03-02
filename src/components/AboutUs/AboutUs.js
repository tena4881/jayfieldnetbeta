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
                    A digital web design studio creating modern & engaging
                    online experiences
                  </h3>
                  <p className="text-muted web-desc">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean. A small river named
                    Duden flows by their place and supplies it with the
                    necessary regelialia.
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">We put a lot of effort in design.</li>
                    <li className="">
                      The most important ingredient of successful website.
                    </li>
                    <li className="">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </li>
                    <li className="">Submit Your Orgnization.</li>
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
