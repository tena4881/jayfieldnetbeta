import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="home-cell-bottom">
              <Container>
                <Row>
                  <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"
                  >
                    <h1 className="home-title">
                      We help startups launch their products
                    </h1>
                    <p className="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at a
                      euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <div className="text-center subscribe-form mt-5">
                      <Form>
                        <input type="text" placeholder="Email" required />
                        <Button
                          color="none"
                          type="submit"
                          className="btn-primary"
                        >
                          Subscribe
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
