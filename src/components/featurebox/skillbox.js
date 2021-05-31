import React, { Component } from 'react';

class Skillbox extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-5 col-xl-5 mb-8 mb-lg-0 order-lg-1">
                            <img src={require(`../../assets/images/about/06.png`)} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-6">
                            <div className="mb-8">
                                <h2 className="font-w-6">One Platform, Deep Insight Why Choose Bootsland</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                            <img className="img-fluid" src={require(`../../assets/images/icon/01.svg`)} alt="" />
                                        </div>
                                        <div>
                                            <h5 className="mb-3 text-primary">App Development</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-6 mt-md-0">
                                    <div className="d-flex align-items-start">
                                        <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                            <img className="img-fluid" src={require(`../../assets/images/icon/03.svg`)} alt="" />
                                        </div>
                                        <div>
                                            <h5 className="mb-3 text-primary">Software Development</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-6">
                                    <div className="d-flex align-items-start">
                                        <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                            <img className="img-fluid" src={require(`../../assets/images/icon/04.svg`)} alt="" />
                                        </div>
                                        <div>
                                            <h5 className="mb-3 text-primary">Easy to customize</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-6">
                                    <div className="d-flex align-items-start">
                                        <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                            <img className="img-fluid" src={require(`../../assets/images/icon/02.svg`)} alt="" />
                                        </div>
                                        <div>
                                            <h5 className="mb-3 text-primary">Clean Code</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
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

export default Skillbox;