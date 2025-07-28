import React from 'react';

interface props {
  name: string;
  title: string;
};

export default function CrewCircle({ name, title }: props) {
    return (
        <div className = "justify-center">
            <div className="w-50 h-50 rounded-full bg-[#FAF7EC]"> </div>
            <h3 className="text-center font-instru text-[#E2D8B5] text-2xl font-bold mt-8"> {title} </h3>
            <h4 className="text-center font-instru text-[#FFFFFD] text-2xl mt-2"> {name} </h4>
        </div> 
    )
} 