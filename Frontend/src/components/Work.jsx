
export default function Work() {

    const text = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
    //      const toolsAndTechnologiesP1 = [
    //   "React.js",
    //   "Redux",
    //   "React Router",
    //   "Tailwind CSS",
    //   "JavaScript (ES6+)",
    //   "Fetch API",
    //   "Postman",
    //   "Git & GitHub"
    // ];   
    const toolsAndTechnologiesP2 = [
        "React.js",
        "Tailwind CSS",
        "Google GenAI(Gemini-1.5-flash)",
        "react-speech-recognition",
        "ElevenLabs API",
        "Local Storage",
    ];


    return (
        <div className="bg-black relative w-[100%] h-[350vh]  md:h-[300vh]  flex flex-col items-center">
            <div className="mt-27 relative w-full h-[35vh] sm:h-[50vh] flex flex-col  items-center ">
                <div className="text-6xl sm:text-7xl md:text-9xl  absolute text-white mask-r-from-neutral-400 text-center font-bold opacity-20 z-10" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>PROJECTS</div>
                <div className="text-2xl sm:text-4xl  text-center tracking-widest font-bold z-70 pt-4 sm:pt-7 md:pt-10 ">{text.map((char, index) => (
                    <span
                        key={index}
                        className="inline-block  transition-transform text-white duration-200 ease-out hover:scale-125 hover:text-[#F6339A]"
                    >
                        {char}
                    </span>
                ))}
                </div>
                <div className="text-2xl text-center font-light opacity-50 text-white mt-20">Curated Work</div>
            </div>
            <div className="w-[100%]">
                {/* <div className="flex w-[100%] h-[50vh]">
                    <div className="w-[60%] flex justify-center items-center">
                          <div className=" w-[80%] h-[100%]  rounded-3xl flex justify-center items-center  bg-gradient-to-b from-orange-400 via-orange-400 to-white">
                             <img className=" w-[95%] tilt-image rounded-3xl h-[95%]" src="/swiggy.png" />
                          </div>
                    </div>
                    <div className="w-[40%] text-white flex flex-col items-start">
                        <div className="text-3xl font-semibold"><span className="text-orange-400">❯❯❯❯</span> Swiggy Application</div>
                        <div className="my-4 opacity-80">Personal project</div>
                        <div className="opacity-80 text-sm w-[80%] font-bold">Developed a Swiggy-inspired application leveraging live APIs to fetch real-time restaurant data, menu items, and order statuses.</div>

                        <ul className="opacity-95 mt-3 font-light">
                            <li><span className="text-orange-400 mr-3">✦</span>"Live APIs" to fetch real-time restaurant data</li>
                            <li><span className="text-orange-400 mr-3">✦</span>Navigation using React Router</li>
                            <li><span className="text-orange-400 mr-3">✦</span>State Management/Redux</li>
                            <li><span className="text-orange-400 mr-3">✦</span>CORS Handling to ensure seamless API integration</li>
                            <li><span className="text-orange-400 mr-3">✦</span>Search, dynamic menu display, add-to-cart, and order summary components</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                             {
                            toolsAndTechnologiesP1.map((tool, index) => (
                                <span key={index} data-aos="fade-right" className="skill-tag border border-white rounded-xl px-3 py-1 font-light ">{tool}</span>
                            ))
                            }
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-col mt-50 md:flex-row w-[100%] h-[50vh] ">
                    <div className="w-[100%] md:w-[60%] flex justify-center items-center">
                        <div className=" w-[80%] h-[100%]  rounded-3xl flex justify-center items-center  bg-gradient-to-b from-[#1A1E42] via-[#1A1E42] to-black">
                            <a href="https://nexloops.xyz/" target="_blank" className="flex justify-center items-center"><img className=" w-[95%] h-[97%] object-cover tilt-image rounded-3xl " src="/Nexloop.png" /></a>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[40%] p-2 text-white flex flex-col items-center md:items-start">
                        <div className="text-2xl lg:text-3xl font-semibold"><span className="text-[#1F1F1F]">❯❯❯❯</span>  NexLoop – Coding Practice & Learning Platform</div>
                        <div className="my-4 md:my-2 lg:my-4 opacity-80">Personal project</div>
                        <div className="opacity-80 text-sm w-[80%] font-bold">A full-stack coding platform designed to help users practice DSA, problem-solving, and core programming concepts with an interactive and structured learning experience. </div>

                        <ul className="opacity-95 mt-1 md:mt-3 font-light">
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span>Frontend: React.js with modern UI components, responsive design, and smooth user interactions</li>
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span> Backend: Node.js + Express.js for handling APIs, authentication, and problem data</li>
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span>  Database: MongoDB for storing users, problems, submissions, and progress tracking</li>
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span>  Goal: To simulate a real competitive-programming and interview-prep environment while remaining beginner-friendly</li>
                        </ul>
                        
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-[100%] h-[80vh] md:h-[50vh] mt-30">
                    <div className="w-[100%] md:w-[60%] flex justify-center items-center">
                        <div className=" w-[80%] h-[100%]  rounded-3xl flex justify-center items-center  bg-gradient-to-b from-blue-600 via-blue-600 to-black">
                            <a href="https://rohitnegibot.netlify.app/" target="_blank" className="flex justify-center items-center"><img className=" w-[95%] h-[97%] object-cover tilt-image rounded-3xl " src="/rohit.png" /></a>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[40%] text-white p-2 flex flex-col items-center md:items-start ">
                        <div className="text-2xl lg:text-3xl font-semibold"><span className="text-blue-600">❯❯❯❯</span> AI-Powered Chatbot</div>
                        <div className="my-4 md:my-2 lg:my-4 opacity-80">Personal project</div>
                        <div className="opacity-80 text-sm w-[80%] font-bold">Innovative AI virtual assistant inspired by Rohit Negi’s teaching style at Coder Army. Designed to guide learners in DSA, Web Development, System Design, Blockchain, and more — with an engaging, motivational UI.</div>

                        <ul className="opacity-95 mt-1 md:mt-3 font-light md:text-sm lg:text-base">
                            <li data-aos="fade-right"><span className="text-blue-600 mr-3">✦</span>AI Chatbot powered by Google Generative AI (Gemini-1.5-flash)</li>
                            <li data-aos="fade-right"><span className="text-blue-600 mr-3">✦</span> Voice Assistant using react-speech-recognition and ElevenLabs API</li>
                            <li data-aos="fade-right"><span className="text-blue-600 mr-3">✦</span> DSA Quiz Game to reinforce learning</li>
                            <li data-aos="fade-right"><span className="text-blue-600 mr-3">✦</span> Dark/Light Theme Toggle, saved via localStorage</li>
                            <li data-aos="fade-right"><span className="text-blue-600 mr-3">✦</span>Motivational tone reflecting Rohit Negi’s teaching philosophy</li>
                        </ul>
                        <div className="flex flex-wrap justify-center md:justify-start sm:items-center lg:items-start gap-2 mt-4 md:text-sm lg:text-base">
                            {
                                toolsAndTechnologiesP2.map((tool, index) => (
                                    <span key={index} data-aos="fade-right" className="skill-tag border border-white rounded-xl px-3 py-1 font-light ">{tool}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-[100%] h-[50vh] mt-50">
                    <div className="w-[100%] md:w-[60%] flex justify-center items-center">
                        <div className=" w-[80%] h-[100%]  rounded-3xl flex justify-center items-center  bg-gradient-to-b from-[#3D3DBC] via-[#5757ce] to-black">
                            <a href="https://githubprofilegenerator126.netlify.app/" target="_blank" className="flex justify-center items-center"><img className=" w-[95%] h-[97%] object-cover tilt-image rounded-3xl " src="/github.png" /></a>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[40%] p-2 text-white flex flex-col items-center md:items-start">
                        <div className="text-2xl lg:text-3xl font-semibold"><span className="text-[#3D3DBC]">❯❯❯❯</span>  GitHub Profile Generator</div>
                        <div className="my-4 md:my-2 lg:my-4 opacity-80">Personal project</div>
                        <div className="opacity-80 text-sm w-[80%] font-bold">A dynamic web application that fetches real-time user data using the GitHub API. It allows users to search any GitHub username and displays a well-structured profile, including repositories, followers, following count, and more.</div>

                        <ul className="opacity-95 mt-1 md:mt-3 font-light">
                            <li data-aos="fade-right"><span className="text-[#3D3DBC] mr-3">✦</span>Search functionality for any GitHub profile.</li>
                            <li data-aos="fade-right"><span className="text-[#3D3DBC] mr-3">✦</span> Real-time data fetching from the GitHub API.</li>
                            <li data-aos="fade-right"><span className="text-[#3D3DBC] mr-3">✦</span>  Well-handled loading and error states for a smooth user experience.</li>
                        </ul>
                        <div className="flex flex-wrap justify-center md:justify-start  sm:items-center lg:items-start gap-2 mt-4">
                            {
                                toolsAndTechnologiesP2.map((tool, index) => (
                                    <span key={index} data-aos="fade-right" className="skill-tag border border-white rounded-xl px-3 py-1 font-light ">{tool}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col mt-50 md:flex-row w-[100%] h-[50vh] ">
                    <div className="w-[100%] md:w-[60%] flex justify-center items-center">
                        <div className=" w-[80%] h-[100%]  rounded-3xl flex justify-center items-center  bg-gradient-to-b from-[#1F1F1F] via-[#1F1F1F] to-black">
                            <a href="https://github.com/Nakul-Kumar01/terminal_website_builder.git" target="_blank" className="flex justify-center items-center"><img className=" w-[95%] h-[97%] object-cover tilt-image rounded-3xl " src="/terminal.png" /></a>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[40%] p-2 text-white flex flex-col items-center md:items-start">
                        <div className="text-2xl lg:text-3xl font-semibold"><span className="text-[#1F1F1F]">❯❯❯❯</span>  Terminal-Based Website Builder</div>
                        <div className="my-4 md:my-2 lg:my-4 opacity-80">Personal project</div>
                        <div className="opacity-80 text-sm w-[80%] font-bold">cross-platform website builder that automates the creation of HTML, CSS, and JavaScript files using shell/terminal commands. </div>

                        <ul className="opacity-95 mt-1 md:mt-3 font-light">
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span>Linux/macOS: Shell scripting with cat ~'EOF'</li>
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span> Windows: PowerShell using @' ... '@ here-strings and Set-Content</li>
                            <li data-aos="fade-right"><span className="text-[#1F1F1F] mr-3">✦</span>  Execution Engine: executeCommand tool (simulated command runner)</li>
                        </ul>
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}