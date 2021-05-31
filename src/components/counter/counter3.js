import React, { Component } from 'react';
import CountUp from 'react-countup';


class Counter3 extends Component {
    render() {
        return (
         
              <div className="row text-center align-items-center justify-content-between">
                <div className="col-lg-3 col-md-4">
                  <div className="counter bg-white rounded py-8 px-3 shadow mb-5 mb-md-0">
                    <div className="counter-desc"> 
                    <CountUp className="count-number text-primary display-4" end={234} duration={100} />
                      <span className="display-4">k</span> 
                      <h5 className="mb-0 mt-3">Year Of Experience</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="counter bg-white rounded py-8 px-3 shadow mb-5">
                    <div className="counter-desc">
                    <CountUp className="count-number text-success display-4" end={234} duration={100} />
                      <span className="display-4">k</span> 
                      <h5 className="mb-0 mt-3">Completed Project</h5>
                    </div>
                  </div>
                  <div className="counter bg-white rounded py-8 px-3 shadow mb-5 mb-md-0">
                    <div className="counter-desc"> 
                      <CountUp className="count-number text-warning display-4" end={455} duration={100} />
                      <span className="display-4">k</span> 
                      <h5 className="mb-0 mt-3">Member</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="counter bg-white rounded py-8 px-3 shadow">
                    <div className="counter-desc"> 
                      <CountUp className="count-number text-danger display-4" end={455} duration={100} />
                      <span className="display-4">k</span> 
                      <h5 className="mb-0 mt-3">Satisfied Customers</h5>
                    </div>
                  </div>
                </div>
              </div>
        
         
        );
    }
}

export default Counter3;