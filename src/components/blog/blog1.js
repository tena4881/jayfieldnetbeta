import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Blog1 extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12 col-lg-4 mb-6 mb-lg-0">
              {/* Blog Card */}
              <div className="card border-0 bg-transparent">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                  <br />July</div>
                <img className="card-img-top shadow rounded" src={require(`../../assets/images/blog/01.png`)} alt="Image" />
                <div className="card-body pt-5"> <Link className="d-inline-block text-muted mb-2" to="/">Sass</Link>
                  <h2 className="h5 font-weight-medium">
                    <Link className="link-title" to="/blog-single">Bootsland Perfect Performance landing Page</Link>
                  </h2>
                  <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                    </li>
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                    </li>
                    <li className="list-inline-item"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                    </li>
                  </ul>
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
                <div className="card-body pt-5"> <Link className="d-inline-block text-muted mb-2" to="/">Marketing</Link>
                  <h2 className="h5 font-weight-medium">
                    <Link className="link-title" to="/blog-single">The most powerfull template that make you.</Link>
                  </h2>
                  <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                    </li>
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                    </li>
                    <li className="list-inline-item"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                    </li>
                  </ul>
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
                <div className="card-body pt-5"> <Link className="d-inline-block text-muted mb-2" to="/">Landing</Link>
                  <h2 className="h5 font-weight-medium">
                    <Link className="link-title" to="/blog-single">A brand for a company is like a reputation person.</Link>
                  </h2>
                  <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 131</Link>
                    </li>
                    <li className="list-inline-item pr-4"> <Link to="/" className="text-muted"><i className="ti-eye mr-1 text-primary" /> 255</Link>
                    </li>
                    <li className="list-inline-item"> <Link to="/" className="text-muted"><i className="ti-comments mr-1 text-primary" /> 14</Link>
                    </li>
                  </ul>
                </div>
                <div />
              </div>
              {/* End Blog Card */}
            </div>
          </div>
      
        );
    }
}

export default Blog1;