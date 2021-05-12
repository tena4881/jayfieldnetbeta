import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/shadedLogo.png'; // Tell Webpack this JS file uses this image
import bgCover from '../../../assets/images/bg-home.jpg'; // Tell Webpack this JS file uses this image
import '../../../assets/css/style.css'
//Importing Modal
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
            backgroundImage: bgCover,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="home-cell-bottom">

              <Container style={{height: '70vh', display: 'flex', justifyContent:'center'}}>
              
                <Row>
                <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"

                  >
                     <img src={logo} />
                  </Col>
                  <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"

                  >
                    <h2 className="text-uppercase">
                      Your Dedicated Business Brain
                    </h2>
                    <p className="pt-3 home-desc">
                    JayField is a network of business owners in the know.
                    When you have an idea dont stop there make it official and create a business
                    </p>

                    
                    <div className="mt-4">
                      </div>
                      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
                  <Link to="/dashboard" className="btn btn-primary mt-4 waves-effect waves-light">Business Brain</Link>
               </div>
               <p className="pt-3 home-desc">
                 <br></br>
                    Scroll Down

                    </p>
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
