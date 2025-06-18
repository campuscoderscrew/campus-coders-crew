import React, { useState } from 'react';
import { useSpring, animated, useInView } from '@react-spring/web';


export function Team() {
    const [ref, inView] = useInView({
        rootMargin: '0px',
        amount: 0.2,
        once: true
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 500 }
    });

    const [brennenFlipped, setBrennenFlipped] = useState(false);
    const [francoFlipped, setFrancoFlipped] = useState(false);

    const brennenSpring = useSpring({
        transform: brennenFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: { tension: 300, friction: 20 }
    });

    const francoSpring = useSpring({
        transform: francoFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <animated.div ref={ref} style={fadeIn}>
            <div className="text-center">
                <p className="text-5xl text-center font-neuton font-semibold" style={{color: "#7886C7"}}>
                    OUR CREW
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-10">
                    <div className="flex items-center justify-center">
                        <div 
                            className="relative rounded-full h-80 w-80 cursor-pointer"
                            onMouseEnter={() => setBrennenFlipped(true)}
                            onMouseLeave={() => setBrennenFlipped(false)}
                            style={{ perspective: '1000px' }}
                        >
                            <animated.div 
                                className="relative w-full h-full"
                                style={{
                                    ...brennenSpring,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                                    <div className="relative rounded-full h-80 w-80 overflow-hidden">
                                        <img 
                                            src="/profiles/brennen.jpg"
                                            alt="Brennen"
                                            className="h-full w-full"
                                        />
                                        {/* Gradient overlay positioned at the bottom */}
                                        <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                                        <p className="absolute bottom-7 w-full text-center text-2xl font-neuton text-white font-semibold">
                                            Brennen
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
                                        Computer Science & Mathematics Dual Degree, Computational Finance Minor
                                    </p>
                                </div>
                            </animated.div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div 
                            className="relative rounded-full h-80 w-80 cursor-pointer"
                            onMouseEnter={() => setFrancoFlipped(true)}
                            onMouseLeave={() => setFrancoFlipped(false)}
                            style={{ perspective: '1000px' }}
                        >
                            <animated.div 
                                className="relative w-full h-full"
                                style={{
                                    ...francoSpring,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                                    <div className="relative rounded-full h-80 w-80 overflow-hidden">
                                        <img 
                                            src="/profiles/franco.png"
                                            alt="Franco"
                                            className="h-full w-full"
                                        />
                                        {/* Gradient overlay positioned at the bottom */}
                                        <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                                        <p className="absolute bottom-7 w-full text-center text-2xl font-neuton text-white font-semibold">
                                            Franco
                                        </p>
                                    </div>
                                </div>
                                <div 
                                    className="absolute w-full h-full rounded-full bg-[#7886C7] flex flex-col items-center justify-center"
                                    style={{ 
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <p className="text-white text-xl font-neuton text-center px-4">
                                        Computer Engineering Freshman
                                    </p>
                                    <p className="text-white text-xl font-neuton text-center px-4">
                                        Software Development Engineer intern @ AWS
                                    </p>
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}