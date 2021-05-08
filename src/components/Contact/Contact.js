import React, { Component } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
// import { AvForm, AvField } from "availity-reactstrap-validation";


class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* section title */}
            {/* <SectionTitle
              title="Join Our Mailing List"

            /> */}

            <Row>

              <Col lg={15}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="custom-form mt-4 pt-4">
                  <div id="message"></div>
                  {/* <AvForm name="contact-form" id="contact-form">
                    <Row>

                        <FormGroup className="mt-2">


                          <AvField
                            required
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email*"
                          />
                          <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary"
                              value="Join"
                            />
                            <div id="simple-msg"></div>
                        </FormGroup>




                    </Row>



                  </AvForm> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
