import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import tena from '../../assets/images/team/img-3.jpg';
import jay from '../../assets/images/team/img-2.jpg';
import rell from '../../assets/images/team/img-1.jpg';
//Import Section Title
import SectionTitle from "../../reusable/section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          image: rell,
          title: "Terrell Belfield",
          desc: "CEO",
        },
        {
          image: jay,
          title: "Joshua D. Franklin, J.D.",
          desc: "COO",
        },
        {
          image: tena,
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
