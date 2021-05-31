import React, { Component } from 'react';

class Testimonial1 extends Component {
    render() {
        return (
            <div className="col-12 col-md-12 col-lg-8">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card p-4 shadow border-0 flex-sm-row">
                  <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                    <img alt="Image" src={require(`../../assets/images/testimonial/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                  </div>
                  <div className="card-body p-0">
                    <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                    <div>
                      <h5 className="text-primary d-inline">Romi Jensen</h5>
                      <small className="text-muted font-italic">- Founder</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-5">
                <div className="card p-4 shadow border-0 flex-sm-row">
                  <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                    <img alt="Image" src={require(`../../assets/images/testimonial/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                  </div>
                  <div className="card-body p-0">
                    <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                    <div>
                      <h5 className="text-primary d-inline">Johny Stock</h5>
                      <small className="text-muted font-italic">- Supervisor</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
                <div className="card p-4 shadow border-0 flex-sm-row">
                  <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                    <img alt="Image" src={require(`../../assets/images/testimonial/03.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                  </div>
                  <div className="card-body p-0">
                    <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                    <div>
                      <h5 className="text-primary d-inline">Leeny Biton</h5>
                      <small className="text-muted font-italic">- Manager</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-5">
                <div className="card p-4 shadow border-0 flex-sm-row">
                  <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                    <img alt="Image" src={require(`../../assets/images/testimonial/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                  </div>
                  <div className="card-body p-0">
                    <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design.</p>
                    <div>
                      <h5 className="text-primary d-inline">Jensen Rom</h5>
                      <small className="text-muted font-italic">- Ceo</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / .row */}
          </div>
       
       
        );
    }
}

export default Testimonial1;