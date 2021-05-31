import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Testimonial2 extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <div className="col-12">
                {/* <div className="owl-carousel owl-center" data-center="true" data-items={3} data-md-items={3} data-sm-items={1}> */}
                <OwlCarousel
                    className="owl-carousel  owl-center"
                    center={true}
                    dots={true}
                    items={3}
                    autoplay={true}
                    loop={true}
                >
                  <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                      <div>
                        <img alt="Image" src={require(`../../assets/images/testimonial/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                      </div>
                      <div className="card-body p-0 mt-5">
                        <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                        <div>
                          <h5 className="text-primary d-inline mb-0">Romi Jensen</h5>
                          <small className="text-muted font-italic">- Founder</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                      <div>
                        <img alt="Image" src={require(`../../assets/images/testimonial/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                      </div>
                      <div className="card-body p-0 mt-5">
                        <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                        <div>
                          <h5 className="text-primary d-inline mb-0">Johny Stock</h5>
                          <small className="text-muted font-italic">- Supervisor</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                      <div>
                        <img alt="Image" src={require(`../../assets/images/testimonial/03.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                      </div>
                      <div className="card-body p-0 mt-5">
                        <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                        <div>
                          <h5 className="text-primary d-inline mb-0">Leeny Biton</h5>
                          <small className="text-muted font-italic">- Manager</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                      <div>
                        <img alt="Image" src={require(`../../assets/images/testimonial/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                      </div>
                      <div className="card-body p-0 mt-5">
                        <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                        <div>
                          <h5 className="text-primary d-inline mb-0">Jensen Rom</h5>
                          <small className="text-muted font-italic">- Ceo</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Testimonial2;