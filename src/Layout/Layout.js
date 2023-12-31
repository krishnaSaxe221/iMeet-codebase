import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
const Layout = (props) => {
  return (
    <div>
        <Header />
        <main>{props.children}</main>
        <Footer />
  </div>
  )
}

export default Layout