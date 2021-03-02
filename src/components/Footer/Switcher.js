import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchToggle : false
        }
        this.toggleSwitcher = this.toggleSwitcher.bind(this);
        this.setTheme = this.setTheme.bind(this);
    }

    setTheme = (color) => {
        document.getElementById("colorTheme").href="assets/css/colors/"+color+".css";
    }

    toggleSwitcher = () => {
        this.setState({ isSwitchToggle : !this.state.isSwitchToggle });
    }
    
    render() {
        return (
            <React.Fragment>
                <div id="style-switcher" style={{ left : this.state.isSwitchToggle ? "0px" : "-189px" }}>
                    <div>
                        <h3>Select your color</h3>
                        <ul className="pattern">
                            <li>
                                <Link className="color1" onClick={()=> this.setTheme('red')} to="#"></Link>
                            </li>
                            <li>
                                <Link className="color2" onClick={()=> this.setTheme('green')} to="#"></Link>
                            </li>
                            <li>
                                <Link className="color3" onClick={()=> this.setTheme('pink')} to="#"></Link>
                            </li>
                            <li>
                                <Link className="color4" onClick={()=> this.setTheme('cyan')} to="#"></Link>
                            </li>
                            <li>
                                <Link className="color5" onClick={()=> this.setTheme('purple')} to="#"></Link>
                            </li>
                            <li>
                                <Link className="color6" onClick={()=> this.setTheme('blue')} to="#"></Link>
                            </li>  
                            <li>
                                <Link className="color7" onClick={()=> this.setTheme('orange')} to="#"></Link>
                            </li>
                            <li>
                                <Link className="color8" onClick={()=> this.setTheme('yellow')} to="#"></Link>
                            </li>                   
                        </ul>
                    </div>
                    <div className="bottom">
                        <Link to="#" onClick={this.toggleSwitcher} className="settings rounded-right"><i className="mdi mdi-settings mdi-spin"></i></Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Switcher;