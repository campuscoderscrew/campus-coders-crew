

export function Meetings(){
    const eventDetails = [
        {
            title: "Executive Meeting",
            time_status: "...",
            location_status: "...",
            content: "The CCC executive board comes together to discuss organizational logistics",
        },
        {
            title: "...Team meeting",
            time_status: "...",
            location_status: "..",
            content: "lorem ipusjm blah bahgh",
        },
        {
            title: "...Team meeting",
            time_status: "...",
            location_status: "...",
            content: "lorem ipusjm blah bahgh",
        },
    ]
    return (    
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl text-[#2D336B] pb-5 font-bold">Upcoming Meetings</h1>
            <p className="text-[#7886C7] text-xl mb-16">
                Some events have restricted attendance. Please follow guidelines as listed
            </p>
            <div className="flex flex-row gap-x-12 w-5/6">
                {eventDetails.map(details => (
                    <div className="flex-col w-5/6 h-80 bg-[#A9B5DF] p-5 overflow-y-auto">
                        <h3 className="text-[#2D336B] font-bold text-lg">{details.title}</h3>
                        <div className='flex flex-col gap-y-2'>
                            <div className="flex flex-row items-center gap-x-2">
                                <img 
                                    src="/clock_logo.png"
                                    alt='clock logo'
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#2D336B]'>{details.time_status}</p>
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                                <img 
                                    src="/location_logo.png"
                                    alt='location logo'
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#2D336B]'>{details.location_status}</p>
                            </div>
                        </div>
                        <p className='text-center pt-5'>{details.content}</p>
                    </div>
                ))}
            </div>
            <button className='w-fit h-fit p-3 bg-[#2D336B] text-[#FFF2F2] mt-10 rounded-md'>
                Click here for more!
            </button>
        </div>
    )
}