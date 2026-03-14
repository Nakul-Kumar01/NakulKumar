

export default function Education(){

   const text = ['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'];

    return(
        <div className="bg-black relative w-[100%] h-[200vh] flex flex-col items-center">
            <div className="mt-27 relative w-full h-[40vh] sm:h-[50vh] flex flex-col  items-center ">
                <div className="text-6xl sm:text-7xl md:text-9xl  absolute text-white mask-r-from-neutral-400 text-center font-bold opacity-20 z-10" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>EDUCATION</div>
                <div className="text-2xl sm:text-3xl text-center tracking-widest font-bold z-70 pt-4 sm:pt-7 md:pt-13 ">{text.map((char, index) => (
                      <span
                        key={index}
                        className="inline-block  transition-transform text-white duration-200 ease-out hover:scale-125 hover:text-[#F6339A]"
                      >
                       {char}
                      </span>
                   ))}
                </div>
                <div  className="text-2xl text-center font-light opacity-50 text-white mt-20">ACADEMIC JOURNEY</div>
            </div>


            <div className="w-[100%] h-[100vh] relative flex flex-col items-center  justify-between mt-20">
                <div className="h-[80vh] absolute bg-pink-300 w-[1px]"></div>
<div className="z-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
  <div data-aos="fade-up" className="w-6 h-6 border-3 bg-black border-pink-500 rounded-full transition-all duration-300 hover:scale-110"></div>
  <div data-aos="fade-up" className="text-xs mt-3 font-extralight px-2 text-pink-500 py-1 bg-pink-500/15 rounded-full transition-colors duration-300 hover:bg-pink-500/25">
    2023-2024
  </div>
  <div data-aos="fade-up" className="text-sm sm:text-2xl font-semibold text-white mt-2 transition-all duration-300  hover:text-pink-400">
    🎓 Bachelor in Computer Science and Engineering
  </div>
  <div data-aos="fade-up" className="text-sm sm:text-2xl text-gray-400 font-extralight mt-2 transition-colors duration-300 hover:text-gray-300">
    Chandigarh University, Mohali, Punjab
  </div>
  <div data-aos="fade-up" className="text-xs mt-3 font-light px-2 text-pink-500 py-1 bg-pink-500/15 rounded-full transition-colors duration-300 hover:bg-pink-500/25">
    CGPA: 8.6
  </div>
</div>

<div className="z-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 ">
  <div data-aos="fade-up" className="w-6 h-6 border-3 bg-black border-pink-500 rounded-full transition-all duration-300 hover:scale-110"></div>
  <div data-aos="fade-up" className="text-xs mt-3 font-extralight px-2 text-pink-500 py-1 bg-pink-500/15 rounded-full transition-colors duration-300 hover:bg-pink-500/25">
    2022-2023
  </div>
  <div data-aos="fade-up" className="text-sm sm:text-2xl font-semibold text-white mt-2 transition-all duration-300  hover:text-pink-400">
    🎓 Higher Secondary Education
  </div>
  <div data-aos="fade-up" className="text-sm sm:text-2xl text-gray-400 font-extralight mt-2 transition-colors duration-300 hover:text-gray-300">
    Ved Model International Sr. Sec. School, Kalanaur, Haryana
  </div>
</div>

<div className="z-10 flex mb-15 sm:mb-0 flex-col items-center transition-transform duration-300 hover:scale-105 ">
  <div data-aos="fade-up" className="w-6 h-6 border-3 bg-black border-pink-500 rounded-full transition-all duration-300 hover:scale-110"></div>
  <div data-aos="fade-up" className="text-xs mt-3 font-extralight px-2 text-pink-500 py-1 bg-pink-500/15 rounded-full transition-colors duration-300 hover:bg-pink-500/25">
    2020-2021
  </div>
  <div data-aos="fade-up" className="text-sm sm:text-2xl font-semibold text-white mt-2 transition-all duration-300  hover:text-pink-400">
    🎓 Secondary Education
  </div>
  <div data-aos="fade-up" className="text-sm sm:text-2xl text-gray-400 font-extralight mt-2 transition-colors duration-300 hover:text-gray-300">
    Ved Model International Sr. Sec. School, Kalanaur, Haryana
  </div>
</div>

            </div>
        </div>
    )
}