import { Header } from "../components/Header"
import { type Profile } from "src/types"


import React, { useState } from 'react';
import { useSpring, animated, useInView } from '@react-spring/web';
import CurvedText from "../utils/CurvedText"



import BoardData from "../data/BoardData"
import MembersData from "../data/MembersData";
// import { relative } from "path";

interface ProfileArgs {
    profile: Profile
}

function RenderProfile({ profile }: ProfileArgs) {
    const [profileFlipped, setProfileFlippped] = useState(false);
    const profileSpring = useSpring({
        transform: profileFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <div className="flex flex-col m-20 relative">
            <div className="text-[#7886C7] font-neuton text-4xl absolute top-28 right-13 w-full z-10" id="title">
                <CurvedText name={profile.officialTitle} reversed={true} member = {false}/>
            </div>

            <div className="text-[#7886C7] font-neuton text-4xl absolute top-28 right-13 w-full z-10" id="title">
                <CurvedText name={profile.funTitle} reversed={false} member = {false} />
            </div>

            <div className="flex items-center justify-center mt-40 relative z-20" id="picture">
                <div
                    className="relative rounded-full h-80 w-80 cursor-pointer"
                    onMouseEnter={() => setProfileFlippped(true)}
                    onMouseLeave={() => setProfileFlippped(false)}
                    style={{ perspective: '1000px' }}
                >
                    <animated.div
                        className="relative w-full h-full"
                        style={{
                            ...profileSpring,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                            <div className="relative rounded-full h-80 w-80 overflow-hidden relative">
                                <img
                                    src={profile.image != "" ? profile.image : "../../public/profiles/empty_profile.jpg"}
                                    alt={profile.name}
                                    className="h-full w-full"
                                />
                                {/* Gradient overlay positioned at the bottom */}
                                <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                                <p className="absolute bottom-7 w-full text-center text-2xl font-neuton text-white font-semibold">
                                    {profile.name}
                                </p>
                            </div>
                        </div>
                        <div
                            className="absolute w-full h-full rounded-full bg-[#7886C7] flex items-center justify-center"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            }}
                        >
                            <p className="text-white text-xl font-neuton text-center px-4">
                                {profile.major}
                            </p>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

function RenderMemberProfile({profile}: ProfileArgs) {
    const [profileFlipped, setProfileFlippped] = useState(false);
    const profileSpring = useSpring({
        transform: profileFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <div className="flex flex-col m-8 relative">
            <div className="text-[#474C7E] font-neuton text-4xl absolute top-0 right-29 w-full z-10" id="title">
                <CurvedText name={profile.officialTitle} reversed={true} member = {true}/>
            </div>

            <div className="flex items-center justify-center mt-20 relative z-20" id="picture">
                <div
                    className="relative rounded-full h-50 w-50 cursor-pointer"
                    onMouseEnter={() => setProfileFlippped(true)}
                    onMouseLeave={() => setProfileFlippped(false)}
                    style={{ perspective: '1000px' }}
                >
                    <animated.div
                        className="relative w-full h-full"
                        style={{
                            ...profileSpring,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                            <div className="relative rounded-full h-50 w-50 overflow-hidden relative">
                                <img
                                    src={profile.image != "" ? profile.image : "../../public/profiles/empty_profile.jpg"}
                                    alt={profile.name}
                                    className="h-full w-full"
                                />
                                {/* Gradient overlay positioned at the bottom */}
                                <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                            </div>
                        </div>
                        <div
                            className="absolute w-full h-full rounded-full bg-[#7886C7] flex items-center justify-center"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            }}
                        >
                            <p className="text-white text-xl font-neuton text-center px-4">
                                {profile.major}
                            </p>
                        </div>
                    </animated.div>
                </div>
            </div>

            <div className = "text-[#474C7E] text-2xl font-neuton relative z-20 font-semibold">
                {profile.name}
            </div>
        </div>
    )
}

export default function Crew() {
    const [ref, inView] = useInView({
        rootMargin: '0px',
        amount: 0.2,
        once: true
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 500 }
    });

    return (
        <div className=" bg-[#FFF2F2]">
            <Header />
            <animated.div ref={ref} style={fadeIn}>
                <div className="text-center">
                    <p className="text-6xl text-center text-[#2D336B] font-neuton mt-30 font-semibold tracking-widest">
                        OUR CREW
                    </p>

                    <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                        Executive Board
                    </div>

                    <div className="flex flex-row justify-center flex-wrap">
                        {BoardData.map((profile) => (
                            <RenderProfile profile={profile} />
                        ))}
                    </div>


                    <div className="text-8xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                         Teams
                    </div>

                    <div className="text-6xl text-center text-[#7886C7] font-neuton mt-7 mb-7 font-light tracking-wider">
                         Summer 2025
                    </div>

                    {/* Pink box for team icons */}
                    <div className="w-screen aspect-[1920/2842] relative">

                        {/* First purple box */}
                        <div className="bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2] overflow-hidden"
                            style={{
                                //60px between "walls"/1920 width
                                left: "4.297%",

                                //93.25px between each box and top and bottom/2842 height (48/2842)
                                top: "1.689%",

                                //standard width for all boxes 1755px/1920px
                                width: "91.406%",

                                //standard height for all boxes 823px/2842px
                                height: "28.958%"
                            }}>
                            
                            <div className = "relative">
                                <div className="text-7xl text-center text-[#474C7E] font-neuton mt-21 font-bold tracking-wider">
                                    Hammerhead
                                </div>

                                <div className="hidden md:block absolute -top-28 right-0 h-80 w-80 overflow-hidden">
                                    <img
                                        src = "../../public/teamlogos/hammerhead.png"
                                        alt="hammerhead image"
                                        className="h-full w-full"
                                    />
                                </div>
                            </div>

                            <div className = "text-5xl text-left text-[#474C7E] font-neuton font-bold mt-10 pl-14 tracking-wider">
                                    Current Projects:
                            </div>

                            {/* Box that contains circles with members profile pictures */}
                            <div className="flex flex-row justify-center">

                                {/* Members profile pictures mapped with appropriate height and width */}
                                {MembersData.map((profile) => (
                                        <RenderMemberProfile profile={profile} />
                                ))}
                            </div>
                        </div>

                        {/* Second purple box */}
                        <div className="bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2] overflow-hidden"
                            style={{
                                //60px between "walls"/1920 width
                                left: "4.297%",

                                //93.25px between each box and top and bottom/2842 height (982/2842)
                                top: "34.553%",

                                //standard width for all boxes 1755px/1920px
                                width: "91.406%",

                                //standard height for all boxes 823px/2842px
                                height: "28.958%"
                            }}>

                            <div className = "relative">
                                <div className="text-7xl text-center text-[#474C7E] font-neuton mt-21 font-bold tracking-wider">
                                    Zebra
                                </div>

                                <div className="hidden md:block absolute -top-23 right-0 h-80 w-80 overflow-hidden">
                                    <img
                                        src = "../../public/teamlogos/zebra.png"
                                        alt="zebra image"
                                        className="h-full w-full"
                                    />
                                </div>

                                <div className = "text-5xl text-left text-[#474C7E] font-neuton font-bold mt-10 pl-14 tracking-wider">
                                    Current Projects:
                                </div>

                                {/* Box that contains circles with members profile pictures */}
                                <div className="flex flex-row justify-center">

                                {/* Members profile pictures mapped with appropriate height and width */}
                                {MembersData.map((profile) => (
                                        <RenderMemberProfile profile={profile} />
                                ))}
                                </div>

                            </div>
                        </div>

                        {/* Third purple box */}
                        <div className="bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2] overflow-hidden"
                            style={{
                                //60px between "walls"/1920 width
                                left: "4.297%",

                                //93.25px between each box and top and bottom/2842 height (1902/2842)
                                top: "66.925%",

                                //standard width for all boxes 1755px/1920px
                                width: "91.406%",

                                //standard height for all boxes 823px/2842px
                                height: "28.958%"
                            }}>
                            
                            <div className = "relative">
                                <div className="text-7xl text-center text-[#474C7E] font-neuton mt-21 font-bold tracking-wider">
                                    Lemon
                                </div>

                                <div className="hidden md:block absolute -top-25 right-0 h-80 w-80 overflow-hidden">
                                    <img
                                        src = "../../public/teamlogos/lemon.png"
                                        alt="lemon image"
                                        className="h-full w-full"
                                    />
                                </div>

                                <div className = "text-5xl text-left text-[#474C7E] font-neuton font-bold mt-10 pl-14 tracking-wider">
                                    Current Projects:
                                </div>

                                {/* Box that contains circles with members profile pictures */}
                                <div className="flex flex-row justify-center">

                                {/* Members profile pictures mapped with appropriate height and width */}
                                {MembersData.map((profile) => (
                                        <RenderMemberProfile profile={profile} />
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </animated.div>
        </div>

    )
}