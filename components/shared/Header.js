
import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';



 // NavLink 
 const HNavLink = (props) => {
   const { route, title } = props;
   return (
    <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
   )
 }



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    const { className } = this.props;
    const { isOpen } = this.state;

    const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Sandip Guchait</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <HNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <HNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item" >
                <HNavLink route="/portfolio" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item" >
                <HNavLink route="/cv" title="CV" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}