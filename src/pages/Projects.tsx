import React from 'react';
import { Header } from '../components/Header';


export default function Projects() {
    return (
        <>
            <Header /> 
            <div className="min-h-screen bg-[#FFF2F2]">

            <h1 className="text-6xl text-center text-[#2D336B] font-neuton mt-30 font-bold tracking-widest">
                Our Projects
            </h1>
            <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                    "subheading"
            </div>

            <div className="flex justify-center space-x-4"> 

                <button className ="bg-[#2D336B] text-white border-3 border-[#2D336B] font-neuton mt-30 font-bold text-3xl 
                    rounded-full hover:bg-[#2D336B] hover:text-white active:bg-[#2D336B] active:text-white w-34 h-13">
                All
                </button> 

                <button className ="bg-[#FFF2F2] border-3 border-[#2D336B] text-[#2D336B] font-neuton mt-30 font-bold text-3xl rounded-full
                    hover:bg-[#2D336B] hover:text-white active:bg-[#2D336B] active:text-white w-34 h-13">
                2025
                </button>  

                <button className ="bg-[#FFF2F2] border-3 border-[#2D336B] text-[#2D336B] font-neuton mt-30 font-bold text-3xl rounded-full
                    hover:bg-[#2D336B] hover:text-white active:bg-[#2D336B] active:text-white w-34 h-13">
                Team X
                </button>  

                <button className ="bg-[#FFF2F2] border-3 border-[#2D336B] text-[#2D336B] font-neuton mt-30 font-bold text-3xl rounded-full
                    hover:bg-[#2D336B] hover:text-white active:bg-[#2D336B] active:text-white w-34 h-13">
                Team Y
                </button>  

                <button className ="bg-[#FFF2F2] border-3 border-[#2D336B] text-[#2D336B] font-neuton mt-30 font-bold text-3xl rounded-full
                    hover:bg-[#2D336B] hover:text-white active:bg-[#2D336B] active:text-white w-34 h-13">
                Team Z
                </button>  

            </div>



            </div>    
        </>
    );
} 