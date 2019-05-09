
import Link from 'next/link';


// class Header extends Component {

//   render() {
//     return (
//       <>
       
//         <Link href="/about"><a>About</a></Link>
//         <Link href="/portfolio"><a>Portfolio</a></Link>
//         <Link href="/blogs"><a>Blog</a></Link>
//         <Link href="/cv"><a>CV</a></Link>

//         <style jsx>
//         {`
//           a {
//             font-size: 20px
//           }
//         `}
//         </style>

//       </>
//     );
//   }
// }
// export default Header;

import React from 'react';
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
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transperant" dark expand="md">
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
                <HNavLink route="/blogs" title="Blog" />
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