import React, { useState } from 'react';

interface props {
  label: string;
};

const ProjButton: React.FC<props> = ({ label }) => {
//export function ProjButton() {
    //const ProjButton = ({ buttonLabel }: { buttonLabel: string }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {setActive(!isActive);}

    return (
        <button 
            className ="bg-[#2D336B] border-3 border-[#2D336B] text-white font-neuton mt-5 font-bold text-2xl rounded-full
                hover:bg-[#FFF2F2] hover:border-3 hover:border-[#2D336B] hover:text-[#2D336B] w-40 h-13"
            onClick = {handleClick}
            >
            {label}
        </button> 
    )
    //}
//}
}
export default ProjButton;