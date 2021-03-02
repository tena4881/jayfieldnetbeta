import React, { Component } from "react";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-home home-half home-registration"
          id="home"
        >
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="vertical-content">
                  <Col lg={7} className="text-white text-left mt-4">
                    <h1 className="home-title">
                      We help startups launch their products
                    </h1>
                    <p className="pt-3 home-desc home-subtitle-width-100">
                      Etiam sed.Interdum consequat proin vestibulum class at a
                      euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <Link
                      to="#"
                      className="btn btn-primary mt-4 waves-effect waves-light"
                    >
                      Get Started <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </Col>
                  <Col lg={{ size: 4, offset: 1 }} className="mt-4">
                    <div className="home-registration-form bg-white">
                      <h4 className="form-heading text-center mt-2">
                        Get 30 day FREE Trial
                      </h4>
                      <Form
                        className="registration-form"
                        id="registration-form"
                      >
                        <Input
                          type="text"
                          id="exampleInputName1"
                          className="form-control registration-input-box"
                          placeholder="Name"
                        />
                        <Input
                          type="email"
                          id="exampleInputEmail1"
                          className="form-control registration-input-box"
                          placeholder="Email"
                        />
                        <textarea
                          className="form-control registration-textarea-box"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                        <Button
                          color="none"
                          className="btn-custom home-btn-width waves-effect waves-light"
                        >
                          Send Detail
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
