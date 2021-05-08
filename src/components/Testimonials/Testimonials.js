import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../../reusable/section-title";
import TestimonialsBox from "./TestimonialsBox";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          image: "assets/images/testimonials/user-2.jpg",
          title: "Beauty Care ",
          desc:
          <p>
              Client Contracts <br></br>
              E-Commerce <br></br>
              Inventory Management

        </p>,
        },
        {
          image: "assets/images/testimonials/user-3.jpg",
          title: "Cryptocurrency",
          desc:
          <p>
          Community Curation <br></br>
          Governance Token Creation <br></br>
          Porfolio Management <br></br>
        </p>,
        },

        {
          image: "assets/images/testimonials/user-3.jpg",
          title: "Digital Artist",
          desc:
          <p>
          Creative Publishsing <br></br>
          Split Sheets & Agreements <br></br>
          Music Tokenization <br></br>
        </p>,
        },
        {
          image: "assets/images/testimonials/user-3.jpg",
          title: "Health & Wellness",
          desc:
          <p>
          Marketing Assitance <br></br>
          Property Location <br></br>
          Production & Supply<br></br>
        </p>,
        },
        {
          image: "assets/images/testimonials/user-1.jpg",
          title: "Retail & Services ",
          desc:
            <p>
              Bookkeeping <br></br>
              Business Planning <br></br>
              Financial Projections <br></br>
            </p>,
        },

        {
          image: "assets/images/testimonials/user-3.jpg",
          title: "Real Estate",
          desc:
          <p>
          Management Strategy <br></br>
          Product Management <br></br>
          Property Location <br></br>

        </p>,
        },


      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Industries"
            />

            <Row className="mt-5">
              <TestimonialsBox clients={this.state.clients} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
