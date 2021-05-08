import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../../reusable/section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          image: "assets/images/team/img-1.jpg",
          title: "Terrell Belfield",
          desc: "CEO",
        },
        {
          image: "assets/images/team/img-2.jpg",
          title: "Joshua D. Franklin, J.D.",
          desc: "COO",
        },
        {
          image: "assets/images/team/img-3.jpg",
          title: "Antenhe Tena",
          desc: "DEVELOPER",
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
              title="BEHIND THE PEOPLE"
              desc=""
            />

            <Row className="mt-5">
              {/* team box */}
              <TeamBox teams={this.state.teams} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
