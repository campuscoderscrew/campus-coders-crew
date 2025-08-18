
export function OurGoals(){
    const imgWidthHeightSize = 150;
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-[#2D336B] pb-10">Our Goals</h1>
            <div className="flex flex-row gap-x-75">
                <div className="flex-col flex items-center text-center">
                    <img 
                        src="/image 6.png"
                        alt='learning'
                        width={imgWidthHeightSize}
                        height={imgWidthHeightSize}
                    />
                    <p className="text-4xl font-bold text-[#7886C7]">LEARNING</p>
                </div>
                <div className="flex-col flex items-center text-center">
                    <img 
                        src="/icons/service-icon.png"
                        alt='learning'
                        width={imgWidthHeightSize}
                        height={imgWidthHeightSize}
                    />
                    <p className="text-4xl font-bold text-[#7886C7]">SERVICE</p>
                </div>
                <div className="flex-col flex items-center text-center">
                    <img 
                        src="/image 7.png"
                        alt='learning'
                        width={imgWidthHeightSize}
                        height={imgWidthHeightSize}
                    />
                    <p className="text-4xl font-bold text-[#7886C7]">OPPORTUNITY</p>
                </div>
            </div>
        </div>
    )
}