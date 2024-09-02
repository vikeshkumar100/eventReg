import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout