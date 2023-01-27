import React, { useEffect, useState } from 'react'

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
    <div className='container text-center align-item-center sticky-download '>
        <p>Download Aplikasi Kami</p>
      <button className='btn btn-secondary'  onClick={handleDownloadP}>Play Store</button>
      <button className='btn btn-secondary mx-2' onClick={handleDownloadA}>App Store</button>
      <button className='btn btn-secondary' onClick={handleClose}>Close</button>
    </div>

  )
}
