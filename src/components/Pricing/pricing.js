import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          title: "Economy",
          price: 9.90,
          duration: "MONTH",
          features: [
            { title: "Bandwidth", value: "1GB" },
            { title: "Onlinespace ", value: "50MB" },
            { title: "Support", value: "No" },
            { title: "Domain", value: "1" },
            { title: "Hidden Fees", value: "No" },
          ],
        },
        {
          title: "DELUXE",
          price: 19.90,
          duration: "Mo",
          isActive: true,
          features: [
            { title: "Bandwidth", value: "10GB" },
            { title: "Onlinespace ", value: "500MB" },
            { title: "Support", value: "No" },
            { title: "Domain", value: "10" },
            { title: "Hidden Fees", value: "No" },
          ],
        },
        {
          title: "ULTIMATE",
          price: 29.90,
          duration: "Mo",
          features: [
            { title: "Bandwidth", value: "100GB" },
            { title: "Onlinespace ", value: "2 GB" },
            { title: "Support", value: "Yes" },
            { title: "Domain", value: "Unlimited" },
            { title: "Hidden Fees", value: "No" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-5" id="pricing">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Pricing"
              desc="Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options."
            />

            <Row className="mt-5">
              {/* pricing box */}
              <PricingBox pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
