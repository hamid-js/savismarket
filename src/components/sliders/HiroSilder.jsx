import { useState } from "react";

export default function HiroSilder() {

const sliderImages = ["/images/computer/case19.png","/images/computer/case18.png" ,"/images/computer/case9.png"]
const [sliderIndex, setSliderIndex] = useState(1)

  return (
    <section className='  h-auto w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat pb-14 '>
      <div className="relative">
        <div>
          <button onClick={() =>setSliderIndex((pre) => pre > 0 ? pre - 1 : 2 )} className="absolute hover:animate-pulse hover:scale-110 left-5 top-56 cursor-pointer  border-none bg-none text-7xl duration-1000 py-2 ">
            &#8249;
          </button>
          <button onClick={() =>setSliderIndex((next) => next < 2 ? next + 1 : 0 )}  className="absolute hover:animate-pulse right-5 top-56 cursor-pointer border-none bg-none text-7xl hover:scale-110 duration-1000 py-2  ">
            &#8250;
          </button>
        </div>
        <div className="flex flex-col gap-1 px-5 pt-5  ">
          <img src={sliderImages[sliderIndex]} alt="" />
          <div className="text-2xl font-bold capitalize tracking-wide">
              The Bike is <span className="text-orange-400">based</span> on the
              project concept.
            </div>
         
          <a
            className="mt-7 tex self-center rounded-md bg-orange-400 px-4 py-2 align-baseline "
            href="#cta"
          >
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
}
