import React, { Component } from 'react';
import Link from 'next/link';


class Header extends Component {

  render() {
    return (
      <>
       <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/blogs"><a>Blog</a></Link>
        <Link href="/cv"><a>CV</a></Link>

        <style jsx>
        {`
          a {
            font-size: 20px
          }
        `}
        </style>

      </>
    );
  }
}
export default Header;