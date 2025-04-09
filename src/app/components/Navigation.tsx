import { Zen_Kaku_Gothic_New } from "next/font/google";
const zenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
});




export default function Navigation(){ 
    return(
        <div>
          <div className="flex items-center gap-4 fixed justify-center font-[3rem] right-3 bg-amber-700 md:rounded-4xl md:py-[7px] md:px-[22px] top-2 z-10 ">
            <nav className="flex items-center">
              <ul className={`flex flex-row gap-4 ${zenKakuGothicNewFont.className} text-white`}>
                <li>
                  <a href="" className="p-0 focus:outline-none">無視及び軽侮が</a>
                </li>
                <li>
                  <a href="" className="p-0 focus:outline-none">Home</a>
                </li>
                <li>
                  <a href="" className="p-0 focus:outline-none">About</a>
                </li>
                <li>
                  <a href="" className="p-0 focus:outline-none">Account</a>
                </li>
              </ul>
            </nav>
          </div>
            {/* <div className="p-[1rem] ml-auto relative">
            <span className="h-[5px] w-[100%] bg-white rounded-[25px] absolute top-[50%] left-[50%] transform 
            -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in"></span>
            <span className="h-[5px] w-[100%] bg-white rounded-[25px] absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in"></span>
            </div> */}
        </div>
    );
}