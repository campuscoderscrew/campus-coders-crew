import React, { useState, useEffect } from 'react';
import CCC_icon from "../../public/campus_coders_crew_icon.png"

import pages from '~/data/PagesData';
import { Link } from "react-router-dom";
import { Padding } from './Padding';

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine the approximate point where the hero section ends
      // and the light background begins
      const scrollPosition = window.scrollY;
      setScrolledPastHero(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const headerBGColor = scrolledPastHero ? 'bg-[#2D336B]' : 'bg-transparent';
  const headerBGColor = 'bg-[#2D336B]';


  interface pageLinkInterface {
    pagePath: string, // eg. /
    pageName: string, // eg. HOME
  }

  function PageLink({pagePath, pageName} : pageLinkInterface) {
    return(
      <div className="relative">
        <Link 
          to= {pagePath}
          className="transition-colors"
          onMouseEnter={() => setHoveredLink(pageName)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {pageName}
        </Link>
        {hoveredLink === pageName && (
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-white`} />
        )}
      </div>
    )
    
  }

  

  return (
    <header className={`fixed top-0 left-0 right-0 ${headerBGColor} p-4 md:p-1 z-50 flex text-white`}>
      <Padding/>
      <div className="flex-70 justify-between items-center align-middle md:mt-2">  
        <nav className="space-x-6 font-neuton text-2xl flex justify-end">

          {pages.map((page) => (
            <PageLink 
              key={page.pageName} 
              pagePath={page.pagePath} 
              pageName={page.pageName} 
            />
          ))}

        </nav>
      </div>
      <Padding/>
    </header>
  );
} 