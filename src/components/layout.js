import * as React from 'react';
import { Link } from 'gatsby';
import logoImg from '../images/sad_corgi.png';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  logo,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <logo className={logo}>
        <img
          src={logoImg}
          style={{
            resizeMode: 'cover',
            width: 150,
          }}
        />
      </logo>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
