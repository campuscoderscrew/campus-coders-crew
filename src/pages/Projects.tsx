import React from "react";
import { Header } from "../components/Header";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#8EB0D6] flex flex-col items-center">
        <h1 className="text-6xl text-center text-[#2D336B] font-neuton mt-30 font-semibold tracking-widest">
          Projects
        </h1>
        <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
          "subheading"
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <div className="bg-[#A9B5DF] w-[393px] h-[391px] border border-black flex items-start justify-center">
            <div className="bg-white w-[346px] h-[187px] border mt-10"></div>
          </div>
          <div className="bg-[#A9B5DF] w-[393px] h-[391px] border border-black flex items-start justify-center">
            <div className="bg-white w-[346px] h-[187px] border mt-10"></div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <div className="bg-[#A9B5DF] w-[393px] h-[391px] border border-black flex items-start justify-center">
            <div className="bg-white w-[346px] h-[187px] border mt-10"></div>
          </div>
          <div className="bg-[#A9B5DF] w-[393px] h-[391px] border border-black flex items-start justify-center">
            <div className="bg-white w-[346px] h-[187px] border mt-10"></div>
          </div>
        </div>
        <div className="text-5xl mb-10 text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
          Want to see your project here?
        </div>
      </div>
    </>
  );
}
