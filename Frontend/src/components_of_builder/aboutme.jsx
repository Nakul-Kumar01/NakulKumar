import { Link } from "react-router";


export default function Me(){
    return(
        <div className="w-full h-[40vh] sm:h-[80vh] bg-[#2A2825] flex justify-center items-center ">
            <div className="w-[95%] sm:w-[80%] h-auto">
                <Link to={"/"}><img className="rounded-3xl" src="/nakul.png"></img></Link>
            </div>
          
        </div>
    )
}