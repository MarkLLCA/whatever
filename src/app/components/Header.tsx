import Navigation from "./Navigation";



export default function Header() {
  return (
    <header className="inset-x-0 fixed top-0 z-10 border-b border-black/5 shadow-xl">
      <div className="">
        <div className="bg-transparent flex h-14 items-center justify-between gap-8 px-4 py-[24px]sm:px-6 ">
          <a href="" className="text-white font-bold focus:outline-none">Library Name</a>
          <Navigation />
        </div>
      </div>
    </header>
  );
}