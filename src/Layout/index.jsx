import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Sticky from '../features/stickydownload/Sticky';


export default function index({children}) {
  return (
    <>
    
    <Navbar/>
    {children}
    <Sticky/>
    <Footer/>
    
    
    
    

</>
  );
}
