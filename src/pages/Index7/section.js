import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

//text rotator
import ReactTextRotator from "react-text-rotator";

const content = [
  {
    text: "Professional Landing Page Template",
    className: "classA",
    animation: "fade",
  },
  {
    text: "We help startups launch their products",
    className: "classB",
    animation: "fade",
  },
  {
    text: "We shall fight in the fields and in the streets.",
    className: "classC",
    animation: "fade",
  },
  {
    text: "Perfect solution for small businesses",
    className: "classD",
    animation: "fade",
  },
];

const TextRotator = () => (
  <ReactTextRotator content={content} time={3000} startDelay={1000} />
);

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
          className="section section-lg vh-100"
          id="home"
          style={{
            backgroundImage: `url(assets/images/img-1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
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
                    <h1 className="home-title text-rotate">
                      <TextRotator />
                    </h1>
                    <p className="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at a
                      euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <p className="play-shadow  mt-4">
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
