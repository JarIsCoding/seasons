'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentClick, setCurrentClick] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoad(false), 1000);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('Current click:', currentClick);
  }, [currentClick]);

  return (
    <div className="relative h-screen">

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
        ${currentClick === 'TL' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-br-[100px] border border-b-red-400 border-r-red-400'}
      `}
        onClick={() => setCurrentClick('TL')}
      >
        <div className={`p-2 text-[20px] max-w-min ${currentClick === 'TL' ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick(null)
        }
        }>
          x
        </div>
        <div className={`text-center text-[20px] ${currentClick === 'TL' ? '' : 'me-20 pt-10'}`}>
          Text
        </div>
      </div>

      <div
        className={`
        absolute right-0 top-0 
        bg-blue-200 
        origin-top-right 
        transition-all duration-500 ease-in-out
        ${currentClick === 'TR' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-bl-[100px] border border-b-blue-400 border-l-blue-400'}
        `}
        onClick={() => setCurrentClick('TR')}
      >
        <div className={`p-2 text-[20px] max-w-min ${currentClick === 'TR' ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick(null)
        }
        }>
          x
        </div>
        <div className={`text-center text-[20px] ${currentClick === 'TR' ? '' : 'ms-20 pt-10'}`}>
          Text
        </div>
        <div className={`${currentClick === 'TR' ? 'block' : 'hidden'}`}>
          <p>
            lorem
          </p>
        </div>

      </div>

      <div
        className={`
        absolute left-0 bottom-0 
        bg-yellow-200 
        origin-bottom-left 
        transition-all duration-500 ease-in-out
        ${currentClick === 'BL' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-tr-[100px] border border-t-yellow-400 border-r-yellow-400'}
        `}
        onClick={() => setCurrentClick('BL')}
      >
        <div className={`p-2 text-[20px] max-w-min ${currentClick === 'BL' ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick(null)
        }
        }>
          x
        </div>
        <div className={`text-center text-[20px] ${currentClick === 'BL' ? '' : 'me-20 pt-10'}`}>
          Text
        </div>
      </div>

      <div
        className={`
        absolute right-0 bottom-0 
        bg-green-200 
        origin-bottom-right 
        transition-all duration-500 ease-in-out
        ${currentClick === 'BR' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-tl-[100px] border border-t-green-400 border-l-green-400'}
        `}
        onClick={() => setCurrentClick('BR')}
      >
        <div>
          <div className={`p-2 text-[20px] max-w-min ${currentClick === 'BR' ? 'block' : 'hidden'}`} onClick={(e) => {
            e.stopPropagation();
            setCurrentClick(null)
          }
          }>
            x
          </div>
        </div>
        <div className={`text-center text-[20px] ${currentClick === 'BR' ? '' : 'ms-20 pt-10'}`}>
          Text
        </div>
      </div>

      <div className="absolute h-full w-full flex justify-center items-center">
        <div>
          Hi
        </div>
      </div>
    </div>
  );
}
