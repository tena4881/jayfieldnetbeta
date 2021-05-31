import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog4 extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12 col-lg-4 mb-6 mb-lg-0">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                  <br />July</div>
                <img className="card-img-top shadow rounded" src={require(`../../assets/images/blog/01.png`)} alt="Image" />
                <div className="card-footer bg-transparent border-0 pt-5">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-dark"><i className="ti-comments mr-1 text-muted" /> 131</Link>
                    </li>
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-dark"><i className="ti-eye mr-1 text-muted" /> 255</Link>
                    </li>
                    <li className="list-inline-item"> <Link to="/" className="text-dark"><i className="ti-comments mr-1 text-muted" /> 14</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body pt-0">
                  <h2 className="h5 font-weight-medium">
                    Bootsland Perfect Performance landing Page
                  </h2>
                  <p className="mb-5">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div><Link className="text-dark bg-light px-3 py-1 rounded" to="/">Sass</Link>
                    </div><Link className="btn-link text-muted" to="/blog-single">Read More</Link>
                  </div>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </div>
            <div className="col-12 col-lg-4 mb-6 mb-lg-0">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                  <br />July</div>
                <img className="card-img-top shadow rounded" src={require(`../../assets/images/blog/02.png`)} alt="Image" />
                <div className="card-footer bg-transparent border-0 pt-5">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-dark"><i className="ti-comments mr-1 text-muted" /> 131</Link>
                    </li>
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-dark"><i className="ti-eye mr-1 text-muted" /> 255</Link>
                    </li>
                    <li className="list-inline-item"> <Link to="/" className="text-dark"><i className="ti-comments mr-1 text-muted" /> 14</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body pt-0">
                  <h2 className="h5 font-weight-medium">
                    The most powerfull template that make you.
                  </h2>
                  <p className="mb-5">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div><Link className="text-dark bg-light px-3 py-1 rounded" to="/">Marketing</Link>
                    </div><Link className="btn-link text-muted" to="/blog-single">Read More</Link>
                  </div>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </div>
            <div className="col-12 col-lg-4">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                  <br />July</div>
                <img className="card-img-top shadow rounded" src={require(`../../assets/images/blog/03.png`)} alt="Image" />
                <div className="card-footer bg-transparent border-0 pt-5">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-dark"><i className="ti-comments mr-1 text-muted" /> 131</Link>
                    </li>
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-dark"><i className="ti-eye mr-1 text-muted" /> 255</Link>
                    </li>
                    <li className="list-inline-item"> <Link to="/" className="text-dark"><i className="ti-comments mr-1 text-muted" /> 14</Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body pt-0">
                  <h2 className="h5 font-weight-medium">
                    A brand for a company is like a reputation person.
                  </h2>
                  <p className="mb-5">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div><Link className="text-dark bg-light px-3 py-1 rounded" to="/">Landing</Link>
                    </div> <Link className="btn-link text-muted" to="/blog-single">Read More</Link>
                  </div>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </div>
          </div>
       
        );
    }
}

export default Blog4;