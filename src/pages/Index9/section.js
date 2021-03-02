import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Particles
import Particles from "react-particles-js";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-home vh-100" id="home">
          <div className="bg-overlay">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 140,
                  },
                  size: {
                    value: 4,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                },
                move: {
                  radius: 1,
                },
              }}
            />
          </div>
          <div className="">
            <div className="">
              <Container className="slidero">
                <Row>
                  <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"
                  >
                    <h1 className="home-title">
                      We help startups launch their products
                    </h1>
                    <p className="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at a
                      euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <p className="play-shadow mmt-4">
                      <Link
                        to="#"
                        onClick={this.callModal}
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-center"></i>
                      </Link>
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* Render ModalSection Component for Modal */}
          <ModalSection ref="child" channel="vimeo" videoId="99025203" />
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
