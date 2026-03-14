import { useState } from "react";
import { Link, Outlet } from "react-router";
import Footer from "./footer";
import ChatBot from "./ChatBot";
import { useDispatch, useSelector } from "react-redux";
import { setShowbot } from "./slice01";

export default function HeaderBar() {

  // const {id} = useParams();
  // console.log(id);
  // console.log(typeof id);
  const [flag, setFlag] = useState("home");

  const showBot = useSelector((state) => state.slice1.showBot);

  const dispatch = useDispatch();


  return (
    <div className="relative ">
      <div className="fixed z-100 top-2 rounded-3xl   container left-0 right-0 mx-auto flex justify-evenly items-center w-[90%]  sm:w-[60%] lg:w-[30%] px-4 py-2 backdrop-blur-md bg-[rgba(46,41,95,0.4)] text-white">
        <Link onClick={() => { setFlag("home") }} className={(flag === "home") ? ("bg-[#2E295F] rounded-2xl p-2 text-white") : "text-gray-400"} to="/"><div>Home</div></Link>
        <Link onClick={() => { setFlag("work") }} className={(flag === "work") ? ("bg-[#2E295F] rounded-2xl p-2 text-white") : "text-gray-400"} to="/work"><div>Work</div></Link>
        <Link onClick={() => { setFlag("education") }} className={(flag === "education") ? ("bg-[#2E295F] rounded-2xl p-2 text-white") : "text-gray-400"} to="/Education"><div>Education</div></Link>
        <Link onClick={() => { setFlag("contact") }} className={(flag === "contact") ? ("bg-[#2E295F] rounded-2xl p-2 text-white") : "text-gray-400"} to="/contact"><div>Contact</div></Link>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>

      {
        (showBot)
          ? (<ChatBot></ChatBot>)
          : (
            <div onClick={() => { dispatch(setShowbot()) }} className="fixed cursor-pointer bottom-4 right-4 w-20 h-20 rounded-full bg-[#2E295F] flex justify-center items-center hover:scale-105"><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 8h10M7 12h6m-6 4h4m8 4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14l-4-4z"
              />
            </svg></div>)
      }
    </div>
  )
}