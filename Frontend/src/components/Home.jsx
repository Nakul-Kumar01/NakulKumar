import { useState } from 'react';
import BackgroundAnimation from "./Background";
import About from "./About";
import Skills from "./Skills";
import SkillDetail from "./SkillDetail";
import Contact from "./Contact";
import { useDispatch } from 'react-redux';
import { setShowbot } from './slice01';
import { Link } from 'react-router';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();

  const text = [
    'C', 'o', 'd', 'e', 'r', ' ',
    <span className="mx-1 sm:mx-2 text-pink-500" key="x">メ</span>,
    ' ', 'D', 'r', 'e', 'a', 'm', 'e', 'r'
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("parmarnakul277@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-black">
        <BackgroundAnimation />
        
        <div className="relative  flex flex-col items-center justify-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-[90vh] sm:h-[80vh] md:h-[70vh]">
          
          {/* Chatbot banner */}
          <div className='flex flex-wrap justify-center'>
            <div 
            onClick={() => dispatch(setShowbot())} 
            className="relative w-fit inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-100 rounded-full text-white hover:border-purple-500 cursor-pointer transition-all duration-300 mb-4 sm:mb-6"
          >
            <span className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-bounce"></span>
            <span className="ml-2 text-xs sm:text-sm font-medium bg-purple-500 rounded-full px-2 py-1">new</span>
            <span className="ml-2 text-xs sm:text-sm md:text-base font-medium">ChatBot Available</span>
          </div>
            <Link className='flex justify-center items-center' to={"/builder"}>
            <div 
            className="relative mx-4 sm:ml-5 w-fit inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-100 rounded-full text-white hover:border-yellow-400 cursor-pointer transition-all duration-300 mb-4 sm:mb-6"
          >
            <span className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-bounce"></span>
            <span className="ml-2 text-xs sm:text-sm font-medium bg-yellow-500 rounded-full px-2 py-1">new</span>
            <span className="ml-2 text-xs sm:text-sm md:text-base font-medium">Website Builder</span>
          </div>
            </Link >
          </div>

          {/* Animated heading */}
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight">
            {text.map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-cyan-400"
              >
                {char}
              </span>
            ))}
          </div>

          {/* Subheading */}
          <div 
            data-aos="slide-up" 
            className="text-white mb-5 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mt-3 sm:mt-4 md:mt-6"
          >
            Hello, I'm ❝Nakul❞ - a Software Developer
          </div>

          {/* Button and Email section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-2xl mt-6 sm:mt-8">
            
            {/* Contact Button */}
            <a href='#contact' className='scroll-smooth'>
              <button className="relative flex items-center hover:cursor-pointer px-4 py-2 sm:px-5 sm:py-2.5 border border-gray-100 rounded-full text-white text-sm sm:text-base font-medium overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:border-cyan-400 cursorilateral hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] group">
                <span className="relative z-10">Let's Connect</span>
                <span className="inline-block ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2">➤</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </a>

            {/* Copy Email Button */}
            <div className="flex items-center gap-2 text-white text-xs sm:text-sm md:text-base font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <button className='text-lg sm:text-xl cursor-pointer' onClick={handleCopy}>
                {copied ? "✔️" : "⿻"}
              </button>
              <span className="break-all">parmarnakul277@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="w-full h-[15vh] sm:h-[20vh] md:h-[25vh] bg-black"></ div>

      <About />
      <Skills />
      <SkillDetail />

      <div className="w-full h-[15vh] sm:h-[20vh] md:h-[25vh] bg-black"></div>

      <Contact />
    </>
  );
}