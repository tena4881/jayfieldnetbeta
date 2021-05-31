import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feature3 extends Component {
    render() {
        return (
            <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                        <div className="px-4 py-7 rounded bg-white shadow hover-translate">
                            <div>
                                <svg className="feather feather-layers bg-primary p-2 rounded" width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                            </div>
                            <h5 className="mt-4 mb-3">Creative UI/UX</h5>
                            <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                            <Link className="btn-link" to="/">Read Details</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                        <div className="px-4 py-7 rounded text-center hover-translate">
                            <div>
                                <svg className="feather feather-move bg-primary p-2 rounded" width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="5 9 2 12 5 15" /><polyline points="9 5 12 2 15 5" /><polyline points="15 19 12 22 9 19" /><polyline points="19 9 22 12 19 15" /><line x1={2} y1={12} x2={22} y2={12} /><line x1={12} y1={2} x2={12} y2={22} /></svg>
                            </div>
                            <h5 className="mt-4 mb-3">Flexibility</h5>
                            <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                            <Link className="btn-link" to="/">Read Details</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                        <div className="px-4 py-7 rounded text-right bg-white shadow hover-translate">
                            <div>
                                <svg className="feather feather-twitch bg-primary p-2 rounded" width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" /></svg>
                                <h5 className="mt-4 mb-3">Easy Code</h5>
                                <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                                <Link className="btn-link" to="/">Read Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
        );
    }
}

export default Feature3;