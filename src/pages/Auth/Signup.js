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
  Input,
  Button,
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

class Signup extends Component {
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
                            <Link
                              to="/"
                              className="text-dark text-uppercase account-pages-logo"
                            >
                              Dorsin
                            </Link>
                          </h3>
                          <p className="text-muted">
                            Sign up for a new Account
                          </p>
                        </div>
                        <div className="p-3">
                          <AvForm>
                            <FormGroup>
                              <Label htmlFor="firstname">First Name</Label>
                              <AvField
                                name="firstname"
                                required
                                type="text"
                                className="form-control"
                                id="firstname"
                                placeholder="First Name"
                              />
                            </FormGroup>

                            <FormGroup>
                              <Label htmlFor="email">Email</Label>
                              <AvField
                                type="password"
                                name="email"
                                required
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                              />
                            </FormGroup>

                            <FormGroup>
                              <Label htmlFor="userpassword">Password</Label>
                              <AvField
                                type="password"
                                name="password"
                                required
                                className="form-control"
                                id="userpassword"
                                placeholder="Enter password"
                              />
                            </FormGroup>

                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="customControlInline"
                              />{" "}
                              <Label
                                className="custom-control-label"
                                htmlFor="customControlInline"
                              >
                                Remember me
                              </Label>
                            </div>

                            <div className="d-grid mt-3">
                              <Button
                                type="submit"
                                color="none"
                                className="btn btn-primary"
                              >
                                Sign in
                              </Button>
                            </div>

                            <div className="mt-4 mb-0 text-center">
                              <p className="mb-0">
                                Don't have an account ?{" "}
                                <Link to="/login" className="text-danger">
                                  Sign in
                                </Link>
                              </p>
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

export default Signup;
