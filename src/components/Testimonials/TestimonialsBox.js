import React, { Component } from "react";
import { Col } from "reactstrap";

class TestimonialsBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.clients.map((client, key) => (
          <Col lg={4} key={key}>
            <div className="testimonial-box hover-effect mt-4">
              <img
                src={client.image}
                alt="client"
                className="img-fluid d-block img-thumbnail rounded-circle"
              />
              <div className="testimonial-decs">
                <p className="text-muted text-center mb-0">“{client.desc}” </p>
              </div>
              <h5 className="text-center text-uppercase pt-3">
                {client.title} -{" "}
                <span className="text-muted text-capitalize">
                  {client.subTitle}
                </span>
              </h5>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default TestimonialsBox;
