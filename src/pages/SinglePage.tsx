import React from 'react'





function ClubNameSection() {
    return (
        <>
            <div style={{backgroundColor: "beige"}}>
                hello
            </div>
        </>
    )
}

function WhoWeAreSection() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center bg-[#003C70] text-center px-4 py-16 sm:py-24">   
                <img 
                src="/singlePagePics/background-shark-8.png" 
                alt="shark top left" 
                className="absolute top-[15%] left-[20%] w-40 opacity-100 pointer-events-none" 
                />
                    
                <img 
                src="/singlePagePics/background-shark-6.png" 
                alt="shark bottom right" 
                className="absolute bottom-0 right-[5%] w-100 opacity-100 pointer-events-none" 
                />

                <img 
                    src="/singlePagePics/logo.png"
                    alt='sailboat'
                    className="w-24 h-24 mb-6"
                />
    
                <h1 className="text-2xl sm:text-5xl text-center text-[#F3FAEC] font-bold mt-8 font-Instrument_Sans tracking-wide">
                        Who are we?
                </h1>

                <h2 className="text-sm sm:text-xl text-center text-[#F3FAEC] font-Kumbh_Sans mt-6 max-w-3xl mx-auto leading-relaxed">
                    We are a group of students interested in hands on experience in software engineering. 
                    Our club takes students out of the typical classroom setting and into a a community of 
                    thinkers, builders, and dreamers.
                </h2>
            </div>
        </>
    )
}

function GoalsSection() {
    return (
        <>
         <div className="relative bg-gradient-to-b from-[#003C70] to-[#065082] text-center py-16 px-6 overflow-hidden">
            <img 
                src="/singlePagePics/background-shark-2.png" 
                alt="left shark"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-40 opacity-100 pointer-events-none"
            />
            
            <h3 className="text-white text-3xl font-bold font-Instrument_Sans mb-12">
                Our goals:
            </h3>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-25">
    
                <div className="flex flex-col items-center">
                <img 
                    src="/singlePagePics/learning.png" 
                    alt="learning icon" 
                    className="w-16 h-16 mb-4"
                />
                <p className="text-white font-bold leading-tight">
                    LEARNING
                </p>
                </div>

                <div className="flex flex-col items-center">
                    <img 
                        src="/singlePagePics/service.png" 
                        alt="service icon" 
                        className="w-16 h-16 mb-4"
                    />
                    <p className="text-white font-bold">
                        SERVICE
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img 
                        src="/singlePagePics/opportunity.png" 
                        alt="opportunity icon" 
                        className="w-16 h-16 mb-4"
                    />
                    <p className="text-white font-bold">
                        OPPORTUNITY
                    </p>
                </div>
            </div>
         </div>
        </>
    )
}

function UppcomingMeetingsSection() {
    return (
        <>
        </>
    )
}

function WebsiteApplicationSection() {
    return (
        <>
        </>
    )
}

function WantToJoinSection() {
    return (
        <>
        </>
    )
}
function FAQSection() {
    return (
        <>
        </>
    )
}

function EventsSection() {
    return (
        <>
        </>
    )
}

function CrewSection() {
    return (
        <>
        </>
    )
}

function ContactUsSection() {
    return (
        <>
        </>
    )
}



export default function SinglePage() {
    return (
        <>
            <ClubNameSection/>
            <WhoWeAreSection/>
            <GoalsSection/>
            <UppcomingMeetingsSection/>
            <WebsiteApplicationSection/>
            <WebsiteApplicationSection/>
            <WantToJoinSection/>
            <FAQSection/>
            <EventsSection/>
            <CrewSection/>
            <ContactUsSection/>
        </>
    )
}
