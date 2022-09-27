import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../static/Layout.css';

const Layout = (props) => {
  return (
    // header
    // children
    // footer
    <>
      <Header />
      <div className="children">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
