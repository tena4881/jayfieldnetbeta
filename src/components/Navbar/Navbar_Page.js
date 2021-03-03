import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//stickey header
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <StickyHeader
          header={
            <Navbar
              expand="lg"
              fixed="top"
              className={
                "navbar-custom sticky sticky-dark " + this.props.navClass
              }
            >
              <Container >
                <NavbarBrand className="logo text-uppercase" href="/">
                  JayField/Net
                </NavbarBrand>
                
                <NavbarToggler onClick={this.toggle}>
                  <i className="mdi mdi-menu"></i>
                </NavbarToggler>
                
                <Collapse
                  id="navbarCollapse"
                  isOpen={this.state.isOpenMenu}
                  navbar
                >
                  
                  <ScrollspyNav
                    scrollTargetIds={targetId}
                    scrollDuration="800"
                    headerBackground="true"
                    activeNavClass="active"
                    className="navbar-collapse"
                  >
                    <Nav  navbar className="navbar-center" id="mySidenav">
                      {this.props.navItems.map((item, key) => (
                        <NavItem 
                          key={key}
                          className={item.navheading === "Home" ? "active" : ""}
                        >
                          <NavLink href={"#" + item.idnm}>
                            {" "}
                            {item.navheading}
                          </NavLink>
                        </NavItem>
                      ))}
                     
                    </Nav>
                    
                  </ScrollspyNav>
                  
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  className="nav-button ms-auto">
                  <Link to="/profile"><Button>Login</Button></Link>
               </div>
                </Collapse>
                
              </Container>
             
            </Navbar>
            
          }
          stickyOffset={-100}
        ></StickyHeader>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
