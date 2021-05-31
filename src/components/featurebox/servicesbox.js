import React, { Component } from 'react';

class Servicesbox extends Component {
    render() {
        return (
            <section>
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-lg-6 col-xl-5 mb-8 mb-lg-0">
                                    <div className="mb-5"> <span className="h6 text-primary">
                                        Services
                    </span>
                                        <h2 className="mt-3 font-w-5 mb-0">Why Choose Bootsland Our Services</h2>
                                    </div>
                                    <div className="d-flex justify-content-between mb-5">
                                        <div className="mr-3">
                                            <svg className="feather feather-grid bg-primary-soft p-2 rounded" width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                                                <rect x={3} y={3} width={7} height={7} />
                                                <rect x={14} y={3} width={7} height={7} />
                                                <rect x={14} y={14} width={7} height={7} />
                                                <rect x={3} y={14} width={7} height={7} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Creative Design</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-5">
                                        <div className="mr-3">
                                            <svg className="feather feather-check-square bg-warning-soft p-2 rounded" width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 11 12 14 22 4" />
                                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Easy To Start</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="mr-3">
                                            <svg className="feather feather-wifi bg-primary-soft p-2 rounded" width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                                <line x1={12} y1={20} x2={12} y2={20} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Management</h5>
                                            <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={require(`../../assets/images/about/06.png`)} alt="Image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>
                   
        );
    }
}

export default Servicesbox;