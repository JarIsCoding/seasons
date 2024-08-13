'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const [currentClick, setCurrentClick] = useState<string>();

  useEffect(() => {
    console.log(currentClick)
  }, [currentClick])

  return (
    <div className={``}>
      <div
        className={` 
        absolute left-0 top-0 
        bg-red-200 
        origin-top-left  
        ${currentClick === 'TL' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-br-[100px]'}
      `}
        onClick={() => setCurrentClick('TL')}
      >
        <div className={`${currentClick ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick('')
        }
        }>
          x
        </div>
        <div className="text-center">
          w
        </div>
      </div>

      <div
        className={`
        absolute right-0 top-0 
        bg-blue-200 
        origin-top-right 
        ${currentClick === 'TR' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-bl-[100px]'}
        `}
        onClick={() => setCurrentClick('TR')}
      >
        <div className={`${currentClick ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick('')
        }
        }>
          x
        </div>
        <div className="text-center">
          w
        </div>

      </div>

      <div
        className={`
        absolute left-0 bottom-0 
        bg-yellow-200 
        origin-bottom-left 
        ${currentClick === 'BL' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-tr-[100px]'}
        `}
        onClick={() => setCurrentClick('BL')}
      >
        <div className={`${currentClick ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick('')
        }
        }>
          x
        </div>
        <div className="text-center">
          w
        </div>
      </div>

      <div
        className={`
        absolute right-0 bottom-0 
        bg-green-200 
        origin-bottom-right 
        ${currentClick === 'BR' ? 'w-full h-full z-30' : 'w-1/2 h-1/2 hover:z-20 z-10 hoverBig rounded-tl-[100px]'}
        `}
        onClick={() => setCurrentClick('BR')}
      >
        <div className={`${currentClick ? 'block' : 'hidden'}`} onClick={(e) => {
          e.stopPropagation();
          setCurrentClick('')
        }
        }>
          x
        </div>
        <div className="text-center">
          w
        </div>
      </div>

      <div className="absolute top-[48.5%] left-[49.5%]">
        Hi
      </div>
    </div>
  );
}
