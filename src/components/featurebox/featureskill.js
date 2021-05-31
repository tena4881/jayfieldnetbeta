import React, { Component } from 'react';

class Featureskill extends Component {
    render() {
        return (
    
                <div className="row align-items-center">
                    <div className="col-lg-4 col-12 text-lg-right">
                        <div className="d-flex align-items-start mb-8">
                            <div className="order-lg-1 ml-lg-3">
                                <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-wechat ic-2x" />
                                </div>
                            </div>
                            <div>
                                <h5>Live Chat</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-8">
                            <div className="order-lg-1 ml-lg-3">
                                <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-desktop ic-2x" />
                                </div>
                            </div>
                            <div>
                                <h5>Responsive</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <div className="order-lg-1 ml-lg-3">
                                <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="ti-check-box ic-2x" />
                                </div>
                            </div>
                            <div>
                                <h5>Free Update</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 my-5 my-lg-0">
                        <img src={require(`../../assets/images/about/09.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="d-flex align-items-start mb-8">
                            <div>
                                <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-eye ic-2x" />
                                </div>
                            </div>
                            <div>
                                <h5>Display Ratio</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-8">
                            <div>
                                <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-film ic-2x" />
                                </div>
                            </div>
                            <div>
                                <h5>High Resolution</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <div>
                                <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-headphones ic-2x" />
                                </div>
                            </div>
                            <div>
                                <h5>24/7 Support</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                            </div>
                        </div>
                    </div>
                </div>
         
      
        );
    }
}

export default Featureskill;