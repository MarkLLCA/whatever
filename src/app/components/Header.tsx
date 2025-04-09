
import { Zen_Kaku_Gothic_New } from "next/font/google";
const zenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zenkakugothic"
});


export default function Header() {
  return (
    <header className="inset-x-0 fixed top-0 z-10 border-b border-black/5 shadow-xl">
      <div className={`${zenKakuGothicNewFont.variable}`}>
        <div className="bg-white flex h-14 items-center justify-between gap-8 px-4 py-[24px]sm:px-6 ">
          <div className="flex justify-start items-center gap-2">
            <img src="https://cdn.bulan.sorsu.edu.ph/images/ssu-logo.webp" alt="whatever" className="w-10 h-10" />
            <a href="" className="text-black font-bold focus:outline-none font-zenkakugothic">SorSU Library Management System</a>
          </div>
          <div className="p-[1rem] ml-auto relative">
            <span className="h-[5px] w-[100%] bg-amber-900 rounded-[25px] absolute top-[50%] left-[50%] transform 
            -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in"></span>
            <span className="h-[5px] w-[100%] bg-amber-900 rounded-[25px] absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in"></span>
            </div>
        </div>
      </div>
    </header>
  );
}