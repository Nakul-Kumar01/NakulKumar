import Connect from './Connect';
import React from "react";


 function About(){

    const text = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];
    
    return(
        <div>
        <div   className="bg-black relative w-[100%] h-[173vh] sm:h-[100vh] flex flex-col items-center">
            <div className="text-6xl sm:text-7xl md:text-9xl  absolute text-white text-center font-bold opacity-20 z-10" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>ABOUT ME</div>
            <div className=" text-2xl sm:text-3xl text-center tracking-widest font-bold z-70 pt-4 sm:pt-7 md:pt-10">{text.map((char, index) => (
                      <span
                        key={index}
                        className="inline-block  transition-transform text-white duration-200 ease-out hover:scale-125 hover:text-[#F6339A]"
                      >
                       {char}
                      </span>
                   ))}
            </div>

            <div  className="text-xl text-center font-light opacity-50 text-white m-20">MORE ABOUT ME</div>


            <div className="  flex flex-col sm:flex-row  w-[100%]">
                <div className="w-[100%]  sm:w-[50%] flex justify-center items-center">
                     <div >
                        <div className="flex  text-white gap-5 my-6 ">
                            <div className="skill-tag border border-white  rounded-3xl px-3 py-1 font-light hover:scale-110 hover:bg-white hover:text-black transition-all duration-300">Web Developer</div>
                            <div className="skill-tag border border-white  rounded-3xl px-3 py-1 font-light hover:scale-110 hover:bg-white hover:text-black transition-all duration-300">BlockChain</div>
                            <div className="skill-tag border border-white  rounded-3xl px-3 py-1 font-light hover:scale-110 hover:bg-white hover:text-black transition-all duration-300">GenAi</div>
                       </div>
                        <img className="w-auto shadow-md shadow-violet-600  h-80 rounded-full " src="/np.jpg" alt="Profile"/>
                     </div>
                </div>
                <div  className="w-[100%]  sm:w-[50%]  flex flex-col items-center sm:items-start text-white">
                    <div className=" flex text-4xl font-semibold">Hey! I'm <div className="pl-2 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"> NAKUL</div> </div>
                    <div className="w-[80%]">
                        <div className="my-6 font-light opacity-80">I'm Nakul, a Web developer and Computer Science student. I specialize in building clean, responsive, and dynamic websites using ReactJS, NextJs, MySQL and MongoDB.</div>
                        <div className="my-6 font-light opacity-80">I'm always leveling up my skills and currently diving deeper into BlockChain and GenAI. Whether it's full-time or freelance, I'm open to exciting opportunities where I can grow and build dope stuff with amazing people.</div>
                    </div>
                    <div className='w-[85%]'>
                        <div className="text-2xl font-semibold">What I Do ☕︎</div>
                        <div data-aos="slide-up" className="flex text-sm sm:text-base  text-white gap-3 sm:gap-5 my-6 ">
                            <div className="skill-tag border border-white rounded-xl px-3 py-1 font-light ">Web Development</div>
                            <div className="skill-tag border border-white rounded-xl px-3 py-1 font-light ">BlockChain</div>
                            <div className="skill-tag border border-white rounded-xl px-3 py-1 font-light ">GenAi</div>
                       </div>
                    </div>
                    <div className='w-[85%]'>
                        <div className="text-2xl font-semibold">Contact with me</div>
                        <Connect></Connect>
                    </div>
                    <a target='_blank' href='https://drive.google.com/file/d/1Qcpm5y2A6lYdK_8aq8bseCWF8-TaNAMH/view?usp=drive_link'><button className='my-8 sm:my-6 cursor-pointer border border-white rounded-full px-3  py-2 font-light '>Download Resume</button></a>
                    
                </div>
            </div>
        </div>
        <div className="w-[100%] h-[10vh] sm:h-[30vh]  bg-black"></div>
        <div className="hidden sm:block w-[100%] h-[30vh]  bg-black"></div>
        </div>
    )
}

export default React.memo(About);