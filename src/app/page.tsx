'use client'

export default function Home() {
  return (
    <div className="">
      <div className="w-1/2 h-1/2 absolute left-0 top-0 bg-red-200 hoverBig origin-top-left hover:z-20 z-10">
        w
      </div>
      <div className="w-1/2 h-1/2 absolute right-0 top-0 bg-blue-200 hoverBig origin-top-right hover:z-20 z-10">
        w
      </div>
      <div className="w-1/2 h-1/2 absolute left-0 bottom-0 bg-yellow-200 hoverBig origin-bottom-left hover:z-20 z-10">
        w
      </div>
      <div className="w-1/2 h-1/2 absolute right-0 bottom-0 bg-green-200 hoverBig origin-bottom-right hover:z-20 z-10">
        w
      </div>
    </div>
  );
}
