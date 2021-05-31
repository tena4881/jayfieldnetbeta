import React, { Component } from 'react';

class Feature1 extends Component {
    render() {
        return (
            <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12 order-lg-1 mb-8 mb-lg-0">
                        <img src={require(`../../assets/images/about/08.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="mb-8"> <span className="badge badge-primary-soft p-2">
                            <i className="la la-cubes ic-3x rotation" />
                        </span>
                            <h2 className="mt-3 mb-0">Bootsland Users Love App Features</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="d-flex align-items-start">
                                    <div>
                                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-wechat ic-2x" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Live Chat</h5>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-6 mt-md-0">
                                <div className="d-flex align-items-start">
                                    <div>
                                        <div className="f-icon-shape-sm text-white bg-dark rounded-circle shadow-primary mr-3"> <i className="la la-desktop ic-2x" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Responsive</h5>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-6">
                                <div className="d-flex align-items-start">
                                    <div>
                                        <div className="f-icon-shape-sm text-white bg-white rounded-circle shadow-primary mr-3"> <i className="la la-download ic-2x text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Free Update</h5>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-6">
                                <div className="d-flex align-items-start">
                                    <div>
                                        <div className="f-icon-shape-sm text-white bg-orange rounded-circle shadow-primary mr-3"> <i className="la la-headphones ic-2x" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Online Support</h5>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        );
    }
}

export default Feature1;