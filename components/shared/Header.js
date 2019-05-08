import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {

  render() {
    return (
      <>
       <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/cv">CV</Link>
      </>
    );
  }
}

export default Header;