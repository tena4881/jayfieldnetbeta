import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Blog2 extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
              {/* Blog Card */}
              <div className="card border-0 shadow">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3 z-index-1">15
                  <br />July</div>
                <div className="row no-gutters align-items-center">
                  <div className="col-md-5">
                    <img src={require(`../../assets/images/blog/01.png`)} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body"> <Link className="d-inline-block text-muted mb-2" to="/">Sass</Link>
                      <h2 className="h5 font-weight-medium">
                        Bootsland Perfect Performance landing Page
                      </h2>
                      <p>Businesses need access to development resources serspiciatis.</p>
                      <Link className="btn-link" to="/">Read Details</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Blog Card */}
            </div>
            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
              {/* Blog Card */}
              <div className="card border-0 shadow">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3 z-index-1">15
                  <br />July</div>
                <div className="row no-gutters align-items-center">
                  <div className="col-md-5">
                    <img src={require(`../../assets/images/blog/02.png`)} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body"> <Link className="d-inline-block text-muted mb-2" to="/">Marketing</Link>
                      <h2 className="h5 font-weight-medium">
                        The most powerfull template that make you.
                      </h2>
                      <p>Businesses need access to development resources serspiciatis.</p>
                      <Link className="btn-link" to="/">Read Details</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Blog Card */}
            </div>
          </div>
    
        );
    }
}

export default Blog2;