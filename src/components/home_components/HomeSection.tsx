import React from "react"
import { useSpring, animated } from "@react-spring/web"
import { Welcome } from "./Welcome";
import { OurGoals } from "./OurGoals";
import { Meetings } from "./Meetings";

export default function HomeSection () {

    return (
        <div className="flex-col">
            <div 
                style={{backgroundImage: `url('/home-background-image.png')`}} 
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            >
                <div className="absolute inset-0 flex flex-col justify-center">
                    <div className="w-64 h-64 md:w-3/4 lg:w-2/3 xl:w-1/2 px-3 flex flex-col justify-center ml-6 md:ml-14 lg:ml-22 gap-y-20 md:gap-y-20 -mt-22">
                        <h2 
                            className="text-[#7886C7] text-4xl md:text-5xl lg:text-5xl font-notable font-bold text-center" 
                        >
                            CAMPUS CODERS CREW
                        </h2>

                        <p 
                            className="w-full md:w-11/12 text-2xl md:text-3xl lg:text-4xl text-white font-extrabold text-center -mt-4"
                        >
                            Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
                        </p>
                    </div>
                    <div className="absolute -bottom-8 md:-bottom-8 left-0 right-0 text-center">
                        <p className="text-[#2D336B] text-2xl md:text-3xl font-bold">
                            We build websites for clubs. By Students. For Students.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-60" />
            <Welcome />
            <div className="h-40" />
            <OurGoals />
            <div className="h-40" />
            <Meetings />
        </div>
    )
}