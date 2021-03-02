import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services1: [
        {
          icon: "pe-7s-diamond",
          title: "Digital Design",
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
        },
        {
          icon: "pe-7s-display2",
          title: "Unlimited Colors",
          desc:
            "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
        },
        {
          icon: "pe-7s-piggy",
          title: "Strategy Solutions",
          desc:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
        },
      ],
      services2: [
        {
          icon: "pe-7s-science",
          title: "Awesome Support",
          desc:
            "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
        },
        {
          icon: "pe-7s-news-paper",
          title: "Truly Multipurpose",
          desc:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        },
        {
          icon: "pe-7s-plane",
          title: "Easy to customize",
          desc:
            "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
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
            <SectionTitle
              title="Our Services"
              desc="We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients."
            />

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
