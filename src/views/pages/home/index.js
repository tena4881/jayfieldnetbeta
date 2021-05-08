import React, { Component } from 'react';


import Section from './section';
import Service from "../../../components/Service/service";
import AboutUs from "../../../components/AboutUs/AboutUs";
import WebsiteDesc from "../../../components/WebsiteDesc/WebsiteDesc";
import Team from '../../../components/Team/Team';
import Testimonials from "../../../components/Testimonials/Testimonials"
import Contact from "../../../components/Contact/Contact";
import Footer from "../../../components/Footer/footer";
import Network from '../../../components/Team/Network';
import Navbar from '../../../components/Navbar/NavBar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "services", navheading: "Services" },
                { id: 3 , idnm : "features", navheading: "Network" },
               /* { id: 4 , idnm : "pricing", navheading: "Pricing" },*/
                { id: 5 , idnm : "team", navheading: "Team" },
                /*{ id: 6 , idnm : "blog", navheading: "Blog" },*/


            ],
            navClass : ""
        };
    }

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                {/* <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} /> */}
                <Navbar />
                {/* section */}
                <Section/>

                {/* services */}
                <Service  sectionClass=""/>

                {/* about us */}
                <AboutUs/>



                {/* pricing <Pricing/> */}


                {/* team */}
                <Team/>

                {/* Network */}
                <Network/>


                {/* process <Process/> */}


                {/* testimonial */}
                <Testimonials/>

                {/* website description */}
                <WebsiteDesc/>

                {/* get started <GetStart/>*/}


                {/* blog <Blog/>*/}





                {/* footer */}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;
