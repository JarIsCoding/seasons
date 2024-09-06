'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentClick, setCurrentClick] = useState<string | null>(null);
  const [shrinkOthers, setShrinkOthers] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  //I cant lie im not sure what to add sooo... comment here for yk the green stuff on github :3
  //Dont worry I will add more stuff but i need a little inspiriation 

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoad(false), 1000);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleMiddleClick = () => {
    setShrinkOthers(!shrinkOthers);
    setCurrentClick('MD');
  };

  return (
    <div className="relative h-screen overflow-hidden">

      {/* Loading Screen */}
      {load && (
        <div
          className={`
          absolute z-50 
          bg-purple-200 
          w-full h-full 
          flex justify-center items-center 
          transition-opacity duration-1000 
          ${fadeOut ? 'opacity-0' : 'opacity-100'}
          `}
        >
          <p>Loading... (not really)</p>
        </div>
      )}

      <div
        className={` 
        absolute left-0 top-0 
        bg-red-200 
        origin-top-left
        transition-all duration-500 ease-in-out
        ${currentClick === 'TL' ? 'w-full h-full z-30' : shrinkOthers ? 'w-0 h-0 opacity-0 pointer-events-none z-10' : `w-1/2 h-1/2 hover:z-20 z-10 rounded-br-[100px] border border-b-red-400 border-r-red-400 ${!isSmallScreen ? 'hover:z-20 hoverBig' : ''}`}
      `}
        onClick={() => setCurrentClick('TL')}
      >
        <div className={`p-2 text-[20px] max-w-min ${currentClick === 'TL' ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick(null);
        }}>
          x
        </div>
        <div className={`ps-16 ${currentClick === 'TL' ? '' : 'me-20 pt-10'}`}>
          <p className={`transition-all ${currentClick === 'TL' ? 'm-0 text-[40px]' : '-me-10 sm:me-0 text-[25px]'}`}>
            Projects
          </p>
        </div>
        {/* Description Text will dissapear when clicked */}
        <div className={`ps-16 ${currentClick === 'TL' ? 'hidden' : 'block'}`}>
          dwfqefwfqefwf
        </div>
      </div>

      <div
        className={`
        absolute right-0 top-0 
        bg-blue-200 
        origin-top-right 
        transition-all duration-500 ease-in-out
        ${currentClick === 'TR' ? 'w-full h-full z-30' : shrinkOthers ? 'w-0 h-0 opacity-0 pointer-events-none z-10' : `w-1/2 h-1/2 hover:z-20 z-10 rounded-bl-[100px] border border-b-blue-400 border-l-blue-400 ${!isSmallScreen ? 'hover:z-20 hoverBig' : ''}`}
        `}
        onClick={() => setCurrentClick('TR')}
      >
        <div className={`p-2 text-[20px] max-w-min ${currentClick === 'TR' ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick(null);
        }}>
          x
        </div>
        <div className={`text-center sm:text-[25px] text-[16px] ${currentClick === 'TR' ? '' : 'ms-20 pt-10'}`}>
          <p className={`${currentClick === 'TR' ? 'm-0' : '-ms-10 sm:ms-0'}`}>
            Skills
          </p>
        </div>
      </div>

      <div
        className={`
        absolute left-0 bottom-0 
        bg-yellow-200 
        origin-bottom-left 
        transition-all duration-500 ease-in-out
        ${currentClick === 'BL' ? 'w-full h-full z-30' : shrinkOthers ? 'w-0 h-0 opacity-0 pointer-events-none z-10' : `w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-tr-[100px] border border-t-yellow-400 border-r-yellow-400 ${!isSmallScreen ? 'hover:z-20 hoverBig' : ''}`}
        `}
        onClick={() => setCurrentClick('BL')}
      >
        <div className={`p-2 text-[20px] max-w-min ${currentClick === 'BL' ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick(null);
        }}>
          x
        </div>
        <div className={`text-center sm:text-[25px] text-[16px] ${currentClick === 'BL' ? '' : 'me-20 pt-10'}`}>
          <p className={`${currentClick === 'BL' ? 'm-0' : '-me-10 sm:me-0'}`}>
            Certificates
          </p>
        </div>
      </div>

      <div
        className={`
        absolute right-0 bottom-0 
        bg-green-200 
        origin-bottom-right 
        transition-all duration-500 ease-in-out
        ${currentClick === 'BR' ? 'w-full h-full z-30' : shrinkOthers ? 'w-0 h-0 opacity-0 pointer-events-none z-10' : `w-1/2 h-1/2 hover:z-20 z-10 rounded-tl-[100px] border border-t-green-400 border-l-green-400 ${!isSmallScreen ? 'hover:z-20 hoverBig' : ''}`}
        `}
        onClick={() => setCurrentClick('BR')}
      >
        <div>
          <div className={`p-2 text-[20px] max-w-min ${currentClick === 'BR' ? 'block' : 'hidden'}`} onClick={(e) => {
            e.stopPropagation();
            setCurrentClick(null);
          }}>
            x
          </div>
        </div>
        <div className={`text-center sm:text-[25px] text-[16px] ${currentClick === 'BR' ? '' : 'ms-20 pt-10'}`}>
          <p className={`${currentClick === 'BR' ? 'm-0' : '-ms-10 sm:ms-0'}`}>
            Links & Other...
          </p>
        </div>
      </div>

      <div className={`absolute h-full w-full flex justify-center items-center`}>
        <div className={`transition-all select-none ${shrinkOthers ? 'rounded-xl bg-slate-100 z-0 border border-black px-[20px] py-[12.5px] move-to-top-left' : 'rounded-xl p-20 move-to-center'}`} onClick={handleMiddleClick}>
          {shrinkOthers ? 'x' : 'Hi'}
        </div>
      </div>

    </div>
  );
}
