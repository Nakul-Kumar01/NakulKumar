import Connect from "./Connect"

export default function Footer(){

    return(
        <div className="w-[100%] h-[40vh] bg-black flex flex-col justify-center items-center text-white">
                <hr className="w-[100%] border-1 border-[#2D285D]"></hr>
            <div className="flex flex-col justify-center items-center gap-4">
                <Connect></Connect>
                <div className="text-[#2D285D] text-6xl">⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖</div>
                <div className="font-extralight text-gray-400 text-sm mt-3">© 2026 Nakul Kumar. All Rights Reserved.</div>
            </div>
        </div>
    )
}