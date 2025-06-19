import React from 'react';
import { Header } from '../components/Header';
import PurpleButton from '../components/PurpleButton';

export default function Archive() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-linear-to-t from-[#2D336B] to-[#FFF2F2]">

                <h1 className="text-6xl text-center text-[#2D336B] font-neuton mt-30 font-bold tracking-widest">
                    ARCHIVE
                </h1>

                <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                    2024-2025
                </div>

                <div className="flex justify-center space-x-4">
                    <PurpleButton label="CREW" />
                    <PurpleButton label="EVENTS" />
                 
                </div>


            </div>
        </>
    );
} 