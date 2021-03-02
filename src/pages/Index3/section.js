import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
        <section
          className="section bg-home vh-100"
          id="home"
          data-image-src="images/bg-home.jpg"
        >
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
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
                    <p className="play-shadow mt-4">
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
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="pattern" />
          </div>
          {/* Render ModalSection Component for Modal */}
          <ModalSection ref="child" channel="vimeo" videoId="99025203" />
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
