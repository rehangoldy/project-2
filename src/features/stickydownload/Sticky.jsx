import React, { useEffect, useState } from 'react'
import Playstore from '../imgstyle/playstore.png'
import Appstore from '../imgstyle/appstore.png'

export default function Sticky() {
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
      const closed = window.localStorage.getItem('downloadClosed');
      if (closed) {
        setIsClosed(closed);
      }
    }, []);
  
    const handleDownloadP = () => {
      window.location.href = 'https://play.google.com/';
    }

    const handleDownloadA = () => {
        window.location.href = 'https://www.apple.com/id/app-store/';
      }
  
    const handleClose = () => {
      setIsClosed(true);
      window.localStorage.setItem('downloadClosed', true);
    }
    
    if (isClosed) {
      return null;
    }

  

  return (
    <div className='justify-content-center fixed-bottom d-flex c-sticky rounded'>
    <div className=' text-center  sticky-download '>
        <h4 className='mt-4 text-black'>Download Aplikasi Kami</h4>
      <button className='btn btn-light btn-p justify-content-center  '  onClick={handleDownloadP}>
        <img className='btn-playstore' src={Playstore}alt="" />
        </button>
        <button className='btn btn-light btn-p justify-content-center   ' onClick={handleDownloadA}>
        <img className='btn-appstore' src={Appstore}alt="" />
        </button>
        <button className='btn btn-secondary btn-a' onClick={handleClose}>Close</button>
    </div>
    </div>

  )
}
