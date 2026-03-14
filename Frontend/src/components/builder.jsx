// import React from 'react'
import { createRoot } from 'react-dom/client'
import About from '../components_of_builder/About'
import App from '../components_of_builder/app'
import Me from '../components_of_builder/aboutme'
import Footer from '../components_of_builder/footer'
import React, { useEffect } from 'react';
   import AOS from 'aos';
   import 'aos/dist/aos.css';
import { Link } from 'react-router'

export default function Builder(){
  useEffect(() => {     // also in main.jsx // in its function // ek barr pure project me
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return(
     <div >
       {/* <Header></Header> */}
       <Link to="/">
      <div 
        className="
          fixed z-50 top:2 md:top-4 left-2 mdleft-4 
          text-white text-sm md:text-lg font-semibold 
          cursor-pointer 
          bg-white/10
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:text-black
          flex items-center gap-2
          px-4 py-2 rounded-full
          hover:bg-white/50
          
        "
      >
        <span className="text-xl">⮜</span> Portfolio
      </div>
    </Link>
       <App></App>
       <About></About>
       <Me></Me>
       <Footer></Footer>
     </div>
  )
}


// createRoot(document.getElementById('root')).render(<Main></Main>)
