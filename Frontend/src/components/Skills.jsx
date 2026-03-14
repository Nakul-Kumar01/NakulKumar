import React, { useEffect, useRef, useState } from "react";

 function Skills() {
  
  const text = ['S', 'k', 'i', 'l', 'l'];

  const imageRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true);
          // Remove animation class after animation completes
          setTimeout(() => setAnimate(false), 1000); // match with animation duration
          observer.unobserve(entry.target); // trigger only once
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-black relative w-full h-[50vh] sm:h-[60vh] flex justify-center overflow-hidden">
        <img
          ref={imageRef}
          className={`container mx-auto mt-10 sm:mt-0 absolute opacity-80 w-[60%] sm:w-[40%] md:w-[35%] lg:w-[20%] h-auto transition-transform duration-1000 ${
            animate ? "rotate-once" : ""
          }`}
          src="/flower.webp"
          alt="flower"
        />
        <div className="text-8xl sm:text-8xl md:text-9xl top-55 absolute text-white text-center font-bold opacity-20 z-10" style={{ textShadow: "0 0 10px white, 0 0 20px white, 0 0 40px white", }}>SKILLS</div>
        <div className="text-4xl text-center tracking-widest font-bold z-20 pt-64 sm:pt-70">{text.map((char, index) => (
                      <span
                        key={index}
                        className="inline-block  transition-transform text-white duration-200 ease-out hover:scale-125 hover:text-[#F6339A]"
                      >
                       {char}
                      </span>
                   ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateOnce {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate-once {
          animation: rotateOnce 1s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}



export default React.memo(Skills);