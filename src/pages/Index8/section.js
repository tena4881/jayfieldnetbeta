import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="section section-lg home-half"
          id="home"
          style={{
            backgroundImage: `url(assets/images/img-2.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="home-cell-bottom">
              <Container>
                <Row>
                  <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"
                  >
                    <h1 className="home-title">
                      We help startups to the MOON!
                    </h1>
                    <p className="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at a
                      euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <div className="mt-4">
                      <iframe
                        title="dorsin"
                        src="http://player.vimeo.com/video/69988283?color=f15b72&amp;title=0&amp;byline=0&amp;portrait=0"
                        width="555"
                        height="321"
                        className="frame-border"
                      ></iframe>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
