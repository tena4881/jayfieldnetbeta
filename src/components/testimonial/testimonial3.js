import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Testimonial3 extends Component {
    render() {
        return (
            <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col">
                  <OwlCarousel
                    className="owl-carousel no-pb owl-2"
                    dotData={false}
                    nav={true}
                    items={1}
                    autoplay={true}
                    dots={false}
                    loop={true}

                >
                    <div className="item">
                      <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-10 col-lg-8">
                          <div className="card bg-transparent border-0">
                            <div>
                              <img alt="Image" src={require(`../../assets/images/testimonial/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                              <p className="lead font-w-5">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                              <div>
                                <h5 className="text-primary d-inline mb-0">Romi Jensen</h5>
                                <small className="text-dark font-w-5 font-italic">- Founder</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-10 col-lg-8">
                          <div className="card bg-transparent border-0">
                            <div>
                              <img alt="Image" src={require(`../../assets/images/testimonial/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                              <p className="lead font-w-5">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                              <div>
                                <h5 className="text-primary d-inline mb-0">Johny Stock</h5>
                                <small className="text-dark font-w-5 font-italic">- Supervisor</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-10 col-lg-8">
                          <div className="card bg-transparent border-0">
                            <div>
                              <img alt="Image" src={require(`../../assets/images/testimonial/03.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                              <p className="lead font-w-5">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                              <div>
                                <h5 className="text-primary d-inline mb-0">Leeny Biton</h5>
                                <small className="text-dark font-w-5 font-italic">- Manager</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}

export default Testimonial3;