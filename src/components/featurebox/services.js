import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureServices extends Component {
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center ${this.props.bgshadow}`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/svg/01.svg`)} alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Creative UI/UX 1</h5>
                        <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                        <Link  to="#" className="btn-link">Read Details</Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/svg/02.svg`)} alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Flexibility</h5>
                        <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                        <Link  to="#" className="btn-link">Read Details</Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center ${this.props.bgshadow}`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/svg/03.svg`)} alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Easy Code</h5>
                        <p>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                        <Link to="#" className="btn-link">Read Details</Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default FeatureServices;