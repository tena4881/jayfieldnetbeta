import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          icon: "pe-7s-pen",
          title: "Tell us what you need",
          desc: "The Big Oxmox advised her not to do so.",
        },
        {
          icon: "pe-7s-id",
          title: "Get free quotes",
          desc: "Little Blind Text didn’t listen.",
        },
        {
          icon: "pe-7s-target",
          title: "Deliver high quality product",
          desc: "When she reached the first hills.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="WORK PROCESS"
              desc="In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts."
            />

            <Row>
              <Col lg={6} className="text-center process-left-icon-1">
                <i className="pe-7s-angle-right"></i>
              </Col>
              <Col lg={6} className="text-center process-left-icon-2">
                <i className="pe-7s-angle-right"></i>
              </Col>
            </Row>
            <Row className="mt-5">
              <ProcessBox processes={this.state.processes} />
              <div className="text-center mx-auto">
                <Link
                  to="#"
                  className="btn btn-primary waves-light waves-effect mt-5"
                >
                  Get Started <i className="mdi mdi-arrow-right"></i>
                </Link>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
