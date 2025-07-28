import React from 'react'
import CrewCircle from '../components/CrewCircle';




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
        </>
    )
}

function GoalsSection() {
    return (
        <>
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
        <div className="min-h-screen size-auto bg-linear-to-t from-[#193463] to-[#034478]" >
        <div className="min-h-screen bg-[url('/SinglePageCrew/SharkB.png')] bg-cover bg-center bg-no-repeat w-screen"> 
                <h1 className="text-center font-instru text-[#FFFFFD] text-5xl font-bold mt-4"> Our Crew </h1> 
                <h2 className="text-center font-instru text-[#CBF0F9] text-4xl font-bold mt-8"> Executive Board </h2>

                <div className="flex justify-center mt-20 space-x-20"> 
                    <CrewCircle name="Brennen Le" title="President" />
                    <CrewCircle name="Franco Molinari" title="Treasurer" />
                </div>
        </div>
        </div>
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
