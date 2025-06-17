import React from 'react';
import { Header } from '../components/Header';

export function Events() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#8EB0D6] py-10 px-4">
                {/* Inner content wrapper, centered horizontally */}
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    {/* Header Title */}
                    <h1 className="mt-10 text-5xl font-neuton font-bold text-[#2D336B] mb-10">
                        EVENTS
                    </h1>

                    {/* Event Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
                        {Array.from({ length: 6 }, (_, index) => (
                            <div
                                key={index}
                                className="w-68 h-79 bg-[#A9B5DF] border-4 border-[#2D336B] rounded-xl flex items-center justify-center text-lg font-medium text-white"
                            >
                                Event {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </>
    );
} 