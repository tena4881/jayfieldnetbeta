import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../../reusable/section-title";
import NetworkBox from "./NetworkBox";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          image: "assets/images/network/img-1.jpg",
          title: "APEX Black Car Services",
          desc: "",
        },
        {
          image: "assets/images/network/img-2.jpg",
          title: "Birthin' Black",
          desc: "",
        },
        {
          image: "assets/images/network/img-3.jpg",
          title: "Smooth Family Entertainment",
          desc: "",
        },
        {
          image: "assets/images/network/img-4.jpg",
          title: "TVA Tax & Accounting",
          desc: "",
        },

      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-4" id="team">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Network"
              desc=""
            />

            <Row className="mt-5">
              {/* team box */}
              <NetworkBox teams={this.state.teams} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
