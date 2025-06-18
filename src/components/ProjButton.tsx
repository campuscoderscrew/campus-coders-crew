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
            className ="bg-[#FFF2F2] border-3 border-[#2D336B] text-[#2D336B] font-neuton mt-15 font-bold text-3xl rounded-full
                hover:bg-[#2D336B] hover:text-white isActive ? bg-[#2D336B] : bg-[#FFF2F2] isActive ? text-white: text-[#2D336B] w-34 h-13"
            onClick = {handleClick}
            >
            {label}
        </button> 
    )
    //}
//}
}
export default ProjButton;