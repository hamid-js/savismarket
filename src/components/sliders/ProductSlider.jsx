  // todo create 3 slide for this carosel slider

import { useState } from "react";

export default function HiroSilder() {
  const sliderImages = ["/images/computer/case19.png","/images/computer/case18.png" ,"/images/computer/case9.png"]
const [sliderIndex, setSliderIndex] = useState(1)
  return (
    <div className=" flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <div className=" w-full">
        <img  className="m-auto w-4/6" src={sliderImages[sliderIndex]} alt="" />
      </div>
      <div className="w-1/4 bg-black text-center text-5xl font-extralight">
        <button onClick={() =>setSliderIndex((pre) => pre > 0 ? pre - 1 : 2 )} className="mb-2 pr-4"> &#8249;</button>
        <button onClick={() =>setSliderIndex((next) => next < 2 ? next + 1 : 0 )}  className="mb-2 pl-4"> &#8250;</button>
      </div>
    </div>
  );
}
