import React, { Component } from "react";
import { Container, Row } from "reactstrap";
//Import Section Title
import SectionTitle from "../../reusable/section-title";
import ServiceBox from "./services-box";
class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services1: [
        {
          icon: "pe-7s-magic-wand",
          title: "Registration & Business Formation",
          desc:
            "",
        },
        {
          icon: "pe-7s-piggy",
          title: "Business Banking Setup",
          desc:
            "",
        },
        {
          icon: "pe-7s-cloud-upload",
          title: "Digitizing Your Business",
          desc:
            "",
        },
      ],
      services2: [
        {
          icon: "pe-7s-credit",
          title: "Credit Services",
          desc:
            "",
        },
        {
          icon: "pe-7s-compass",
          title: "Strategy Solutions",
          desc:
            "",
        },
        {
          icon: "pe-7s-diamond",
          title: "Turn Influnces Into Funds",
          desc:
            "",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            {/* <SectionTitle
              title="Business Brain"
              desc=""
            /> */}

            <Row className="mt-4">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>

            <Row className="mt-4">
              {/* service box */}
              <ServiceBox services={this.state.services2} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
