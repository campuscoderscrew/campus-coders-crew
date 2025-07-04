import { Header } from "../components/Header"
import { type Profile } from "src/types"


import React, { useState } from 'react';
import { useSpring, animated, useInView } from '@react-spring/web';
import CurvedText from "../utils/CurvedText"



import BoardData from "../data/BoardData"
import MembersData from "../data/MembersData";

interface ProfileArgs {
    profile: Profile
}


function RenderProfile({profile} : ProfileArgs) {
    const [profileFlipped, setProfileFlippped] = useState(false);
    const profileSpring = useSpring({
        transform: profileFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <div className="flex flex-col m-20 relative">
            <div className="text-[#7886C7] font-neuton text-4xl absolute top-28 right-13 w-full z-10" id="title">
                <CurvedText name={profile.officialTitle} reversed={true}/>
            </div>

            <div className="text-[#7886C7] font-neuton text-4xl absolute top-28 right-13 w-full z-10" id="title">
                <CurvedText name={profile.funTitle} reversed={false}/>
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
        <Header/>
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


                    <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                        Members
                    </div>

                    {/* <div className="flex flex-row justify-center ">
                        {MembersData.map((profile) => (
                        <RenderProfile profile={profile} />
                        ))}
                    </div> */}
                    
                    {/* Pink box for team icons */}
                    <div className = "w-screen aspect-[1920/2842] relative">

                         {/* First purple box */}
                         <div className="bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2]"
                            style = {{
                                //60px between "walls"/1920 width
                                left: "3.125%",
                                
                                //93.25px between each box and top and bottom/2842 height (48/2842)
                                top: "1.689%",

                                //standard width for all boxes 1755px/1920px
                                width: "91.406%",
                                
                                //standard height for all boxes 823px/2842px
                                height: "28.958%"
                            }}>
                         </div>

                         {/* Second purple box */}
                         <div className="bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2]"
                            style = {{
                                //60px between "walls"/1920 width
                                left: "3.125%",
                                
                                //93.25px between each box and top and bottom/2842 height (982/2842)
                                top: "34.553%",

                                //standard width for all boxes 1755px/1920px
                                width: "91.406%",
                                
                                //standard height for all boxes 823px/2842px
                                height: "28.958%"
                            }}>
                         </div>

                         {/* Third purple box */}
                         <div className="bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2]"
                            style = {{
                                //60px between "walls"/1920 width
                                left: "3.125%",
                                
                                //93.25px between each box and top and bottom/2842 height (1902/2842)
                                top: "66.925%",

                                //standard width for all boxes 1755px/1920px
                                width: "91.406%",
                                
                                //standard height for all boxes 823px/2842px
                                height: "28.958%"
                            }}>
                         </div>
                    </div>

                </div>
            </animated.div>
        </div>
        
    )
}





/*





<!-- Outer full screen pink background -->
    <div class = "bg-[#FFF2F2] w-full relative" style = "aspect-ratio: 1920/4500;">

        <!-- Top header -->
        <div class = "bg-[#2D336B]"
        style = "
                left: 0%;
                top: 0%;
                width: 100%;
                height: 2.444%">
        
            <!-- SVG of CCC logo -->
            <svg class = "absolute"
            style = "left: 25px; top: 5px; width: 4.0625%; height: 2.156%;"
            viewBox="0 0 78 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.1086 51.88C48.5086 51.88 50.4126 50.904 51.8206 48.952C53.2286 47 54.1406 44.632 54.5566 41.848H57.5326C57.0846 45.304 55.9486 48.248 54.1246 50.68C53.1006 52.024 51.9326 53.032 50.6206 53.704C49.3406 54.344 47.9166 54.76 46.3486 54.952C44.8126 55.144 42.7966 55.24 40.3006 55.24C36.7806 55.24 33.9166 54.904 31.7086 54.232C29.5326 53.528 27.6606 52.392 26.0926 50.824C23.0206 47.752 21.4846 43.528 21.4846 38.152C21.4846 32.488 22.8606 28.28 25.6126 25.528C27.4046 23.736 29.4046 22.552 31.6126 21.976C33.8206 21.4 36.7166 21.112 40.3006 21.112C43.5966 21.112 46.2686 21.352 48.3166 21.832C50.3966 22.28 52.0926 23.256 53.4046 24.76C54.4926 26.008 55.3406 27.512 55.9486 29.272C56.5566 31.032 56.9086 32.776 57.0046 34.504H54.2686C54.1406 33.064 53.7886 31.592 53.2126 30.088C52.6686 28.552 51.8046 27.24 50.6206 26.152C49.4366 25.032 47.9326 24.472 46.1086 24.472C44.3806 24.472 42.9886 25.224 41.9326 26.728C41.0046 27.912 40.3006 29.656 39.8206 31.96C39.4686 33.72 39.2926 35.784 39.2926 38.152C39.2926 41.896 39.7406 44.92 40.6366 47.224C41.7886 50.328 43.6126 51.88 46.1086 51.88Z" fill="#FFF2F2"/>
            <path d="M26.1086 86.88C28.5086 86.88 30.4126 85.904 31.8206 83.952C33.2286 82 34.1406 79.632 34.5566 76.848H37.5326C37.0846 80.304 35.9486 83.248 34.1246 85.68C33.1006 87.024 31.9326 88.032 30.6206 88.704C29.3406 89.344 27.9166 89.76 26.3486 89.952C24.8126 90.144 22.7966 90.24 20.3006 90.24C16.7806 90.24 13.9166 89.904 11.7086 89.232C9.53263 88.528 7.66063 87.392 6.09263 85.824C3.02063 82.752 1.48463 78.528 1.48463 73.152C1.48463 67.488 2.86063 63.28 5.61263 60.528C7.40463 58.736 9.40463 57.552 11.6126 56.976C13.8206 56.4 16.7166 56.112 20.3006 56.112C23.5966 56.112 26.2686 56.352 28.3166 56.832C30.3966 57.28 32.0926 58.256 33.4046 59.76C34.4926 61.008 35.3406 62.512 35.9486 64.272C36.5566 66.032 36.9086 67.776 37.0046 69.504H34.2686C34.1406 68.064 33.7886 66.592 33.2126 65.088C32.6686 63.552 31.8046 62.24 30.6206 61.152C29.4366 60.032 27.9326 59.472 26.1086 59.472C24.3806 59.472 22.9886 60.224 21.9326 61.728C21.0046 62.912 20.3006 64.656 19.8206 66.96C19.4686 68.72 19.2926 70.784 19.2926 73.152C19.2926 76.896 19.7406 79.92 20.6366 82.224C21.7886 85.328 23.6126 86.88 26.1086 86.88Z" fill="#FFF2F2"/>
            <path d="M65.1086 86.88C67.5086 86.88 69.4126 85.904 70.8206 83.952C72.2286 82 73.1406 79.632 73.5566 76.848H76.5326C76.0846 80.304 74.9486 83.248 73.1246 85.68C72.1006 87.024 70.9326 88.032 69.6206 88.704C68.3406 89.344 66.9166 89.76 65.3486 89.952C63.8126 90.144 61.7966 90.24 59.3006 90.24C55.7806 90.24 52.9166 89.904 50.7086 89.232C48.5326 88.528 46.6606 87.392 45.0926 85.824C42.0206 82.752 40.4846 78.528 40.4846 73.152C40.4846 67.488 41.8606 63.28 44.6126 60.528C46.4046 58.736 48.4046 57.552 50.6126 56.976C52.8206 56.4 55.7166 56.112 59.3006 56.112C62.5966 56.112 65.2686 56.352 67.3166 56.832C69.3966 57.28 71.0926 58.256 72.4046 59.76C73.4926 61.008 74.3406 62.512 74.9486 64.272C75.5566 66.032 75.9086 67.776 76.0046 69.504H73.2686C73.1406 68.064 72.7886 66.592 72.2126 65.088C71.6686 63.552 70.8046 62.24 69.6206 61.152C68.4366 60.032 66.9326 59.472 65.1086 59.472C63.3806 59.472 61.9886 60.224 60.9326 61.728C60.0046 62.912 59.3006 64.656 58.8206 66.96C58.4686 68.72 58.2926 70.784 58.2926 73.152C58.2926 76.896 58.7406 79.92 59.6366 82.224C60.7886 85.328 62.6126 86.88 65.1086 86.88Z" fill="#FFF2F2"/>
            </svg>
        </div>

        <!-- President Picture -->
        <img src = "PresorTres/brennen (1) 1.svg" alt = "President"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 23.073%; 
            top: 17.888%; 
            width: 24.740%; 
            height: 10.555%;">
        </img>

        <!-- Treasurer Picture -->
        <img src = "PresorTres/franco 1.svg" alt = "Treasurer"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 53.438%; 
            top: 17.888%; 
            width: 24.740%; 
            height: 10.555%;">
        </img>

        <!-- Hammerhead Box -->
        <div class= "bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2]"
        style = "
                left: 4.375%;
                top: 37.911%;
                width:91.406%;
                height: 18.289%">
        
        </div>

        <!-- Hammerhead Icon -->
        <img src = "GroupIcons/hammerhead.svg" alt = "HammerheadIcon"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 77.5%; 
            top: 38.733%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

        <!-- Hammerhead Team Pictures -->

        <!-- Team Lead -->
        <img src = "HammerheadPics/image5.svg" alt = "TeamLeadHammerhead"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 7.708%; 
            top: 47.467%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

        <!-- Member 1 -->
        <img src = "HammerheadPics/image5.svg" alt = "Hammerhead1"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 25.156%; 
            top: 47.467%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

         <!-- Member 2 -->
         <img src = "HammerheadPics/image5.svg" alt = "Hammerhead2"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 42.604%; 
             top: 47.467%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

         <!-- Member 3 -->
         <img src = "HammerheadPics/image5.svg" alt = "Hammerhead3"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 60.052%; 
             top: 47.467%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

         <!-- Member 4 -->
         <img src = "HammerheadPics/image5.svg" alt = "Hammerhead4"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 77.5%; 
             top: 47.467%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

        <!-- Zebra Box -->
        <div class= "bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2]"
        style = "
                left: 4.375%;
                top: 58.666%;
                width:91.406%;
                height: 18.289%">
        
        </div>

        <!-- Zebra Icon -->
        <img src = "GroupIcons/zebra.svg" alt = "Zebra"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 77.5%; 
            top: 59.733%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

        <!-- Zebra Team Pictures -->

        <!-- Team Lead -->
        <img src = "HammerheadPics/image5.svg" alt = "TeamLeadZebra"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 7.708%; 
            top: 68.222%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

        <!-- Member 1 -->
        <img src = "HammerheadPics/image5.svg" alt = "Zebra"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 25.156%; 
            top: 68.222%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

         <!-- Member 2 -->
         <img src = "HammerheadPics/image5.svg" alt = "Zebra2"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 42.604%; 
             top: 68.222%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

         <!-- Member 3 -->
         <img src = "HammerheadPics/image5.svg" alt = "Zebra3"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 60.052%; 
             top: 68.222%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

         <!-- Member 4 -->
         <img src = "HammerheadPics/image5.svg" alt = "Zebra4"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 77.5%; 
             top: 68.222%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

        <!-- Lemon Box -->
        <div class= "bg-[#A9B5DF] absolute rounded-2xl shadow-lg border border-[#9BAAE2]"
        style = "
                left: 4.375%;
                top: 79.111%;
                width:91.406%;
                height: 18.289%">
        
        </div>

        <!-- Lemon Icon -->
        <img src = "GroupIcons/lemon.svg" alt = "Lemon"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 77.5%; 
            top: 80.244%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

         <!-- Lemon Team Pictures -->

        <!-- Team Lead -->
        <img src = "HammerheadPics/image5.svg" alt = "TeamLeadLemon"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 7.708%; 
            top: 88.978%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

        <!-- Member 1 -->
        <img src = "HammerheadPics/image5.svg" alt = "Lemon1"
        class="absolute rounded-full bg-cover bg-center" 
            style="
            left: 25.156%; 
            top: 88.978%; 
            width: 15.625%; 
            height: 6.667%;">
        </img>

         <!-- Member 2 -->
         <img src = "HammerheadPics/image5.svg" alt = "Lemon2"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 42.604%; 
             top: 88.978%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

         <!-- Member 3 -->
         <img src = "HammerheadPics/image5.svg" alt = "Lemon3"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 60.052%; 
             top: 88.978%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

         <!-- Member 4 -->
         <img src = "HammerheadPics/image5.svg" alt = "Lemon4"
         class="absolute rounded-full bg-cover bg-center" 
             style="
             left: 77.5%; 
             top: 88.978%; 
             width: 15.625%; 
             height: 6.667%;">
         </img>

    </div>



















*/