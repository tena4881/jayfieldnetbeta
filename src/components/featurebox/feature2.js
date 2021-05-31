import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feature2 extends Component {
    render() {
        return (
            <section className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-7 rounded bg-white shadow">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                                    <div>
                                        <div>
                                            <img className="img-fluid" src={require(`../../assets/images/services/01.png`)} alt="" />
                                        </div>
                                        <h5 className="mt-4 mb-3">Overview</h5>
                                        <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                        <Link className="btn-link" to="/">Read Details</Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-6">
                                    <div>
                                        <div>
                                            <img className="img-fluid" src={require(`../../assets/images/services/02.png`)} alt="" />
                                        </div>
                                        <h5 className="mt-4 mb-3">Video Chat</h5>
                                        <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                        <Link className="btn-link" to="/">Read Details</Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                                    <div>
                                        <div>
                                            <img className="img-fluid" src={require(`../../assets/images/services/03.png`)} alt="" />
                                        </div>
                                        <h5 className="mt-4 mb-3">Unique Data</h5>
                                        <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                        <Link className="btn-link" to="/">Read Details</Link>
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

export default Feature2;