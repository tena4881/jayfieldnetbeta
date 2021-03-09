import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";
import Switcher from "./Switcher";

class Footer extends Component {
  state = {
    links: [
      {
        title: "JAYFIELD NET",
        child: [
          // { link: "#", title: "Home" },
          // { link: "#", title: "About us" },
          // { link: "#", title: "FAQ" },
          // { link: "#", title: "Contact us" },
          // { link: "#", title: "Disscusion" },
          // { link: "#", title: "Terms & Condition" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              {this.state.links.map((fLink, key) => (
                <Col key={key} lg={3} className="mt-4">
                  <h4>{fLink.title}</h4>
                  <div className="text-muted mt-4">
                    <ul className="list-unstyled footer-list">
                      {fLink.child.map((fLinkChild, key) => (
                        <li key={key}>
                          <Link to={fLinkChild.link}>{fLinkChild.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              
            </Row>
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
                  <i className="pe-7s-call"></i> &nbsp;123 4556 789
                </p>
              </Col>
              <Col lg={3} className="mt-4 text-right">
                <p className="contact-title">
                  <i className="pe-7s-mail-open"></i>&nbsp; Support@info.com
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
        {/* Render footer links */}
        <FooterLinks />

        {/* color switcher  <Switcher /> */}
       
      </React.Fragment>
    );
  }
}

export default Footer;

/*
<Col lg={3} className="mt-4">
                <h4>Subscribe</h4>
                <div className="text-muted mt-4">
                  <p>
                    In an ideal world this text wouldn’t exist, a client would
                    acknowledge the importance of having web copy before the
                    design starts.
                  </p>
                </div>
                
               
              </Col>
 <Form className="subscribe">
                  <input
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                  <Link to="#" className="submit">
                    <i className="pe-7s-paper-plane"></i>
                  </Link>
                </Form>
*/