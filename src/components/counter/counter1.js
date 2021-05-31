import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter1 extends Component {
    render() {
        return (
          
              <div className="row align-items-center text-center">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="counter">
                    <div className="counter-desc"> 
                        <CountUp className="count-number display-4" end={15} duration={40} />
                      <span className="display-4 text-primary">k</span> 
                      <h6 className="text-muted mb-0">Project</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-5">
                  <div className="counter">
                    <div className="counter-desc"> <CountUp className="count-number display-4" end={29} duration={40} />
                      <span className="display-4 text-primary">k</span> 
                      <h6 className="text-muted mb-0">Member</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="counter">
                    <div className="counter-desc"> <CountUp className="count-number display-4" end={45} duration={40} />
                      <span className="display-4 text-primary">k</span> 
                      <h6 className="text-muted mb-0">Love Us</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-5">
                  <div className="counter">
                    <div className="counter-desc">  <CountUp className="count-number display-4" end={23} duration={40} />
                      <span className="display-4 text-primary">k</span> 
                      <h6 className="text-muted mb-0">Happy Client</h6>
                    </div>
                  </div>
                </div>
              </div>
         
        
        );
    }
}

export default Counter1;