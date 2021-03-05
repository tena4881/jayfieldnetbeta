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
              <br></br>
              <br></br>
              <Container style={{height: '70vh', display: 'flex', justifyContent:'center'}}>
                <Row>
                  <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"
                    
                  >
                    <h1 className="text-uppercase">
                      WE HELP STARTUPS TO THE MOON!
                    </h1>
                    <p className="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at a
                      euismod mus luctus quam.Lorem ipsum dolor sit amet,
                      consectetur adipisicing eli.
                    </p>
                    <div className="mt-4">
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
