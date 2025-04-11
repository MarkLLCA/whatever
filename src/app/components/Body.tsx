import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
});


export default function body() {
  return (
    <div className="py-16 px-7" style={{ backgroundColor: 'rgb(227, 212, 185)' }}>
      <div className="flex justify-start items-center min-h-screen bg-white rounded-2xl">
        <h1 className="text-4xl font-bold font-geologica text-gray-800 dark:text-white pl-3">Library Management System</h1>
      </div>
      <hr className="my-4 border-t-2 border-black" />

      {/*ITEMS HERE */}
      <div className="flex bg-white min-h-screen rounded-2xl">
        <div className="p-15">
          <ul className="grid grid-cols-1">
            <div className="px-[10px] py-[110px] bg-green-700"></div>
          </ul>
        </div>
      </div>
      <button id="" className="bg-green-500 text-white p-4 rounded transition-all
       hover:duration-200 hover:delay-300 hover:px-5 active:delay-0 active:opacity-50">Click Me!</button>
       
      <div>adwadw</div>
      <div className="w-150 h-8 rounded-4xl bg-orange-400"><nav></nav></div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
      <div>adwadw</div>
    </div>
  );
}