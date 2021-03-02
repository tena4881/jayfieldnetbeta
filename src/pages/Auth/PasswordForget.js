import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

class PasswordForget extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-white">
            <i className="mdi mdi-home h1"></i>
          </Link>
        </div>

        <section className="bg-account-pages vh-100">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={5}>
                    <Card className="account-card">
                      <CardBody>
                        <div className="text-center mt-3">
                          <h3 className="font-weight-bold">
                            <a
                              href="index.html"
                              className="text-dark text-uppercase account-pages-logo"
                            >
                              Dorsin
                            </a>
                          </h3>
                          <p className="text-muted">Reset Password</p>
                        </div>
                        <div className="p-3">
                          <div
                            className="alert alert-warning  text-center"
                            role="alert"
                          >
                            Enter your email address and we'll send you an email
                            with instructions to reset your password.
                          </div>
                          <AvForm>
                            <FormGroup>
                              <Label htmlFor="email">Email</Label>
                              <AvField
                                name="email"
                                required
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                              />
                            </FormGroup>

                            <div className="d-grid mt-3">
                              <Button
                                color="none"
                                type="submit"
                                className="btn-primary"
                              >
                                Reset your Password
                              </Button>
                            </div>
                          </AvForm>
                        </div>
                      </CardBody>
                    </Card>
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

export default PasswordForget;
