import { useState } from 'react';
import Button from '../ui/Button';

export default function HiroSilder() {
  const sliderImages = [
    '/images/computer/case19.png',
    '/images/computer/case18.png',
    '/images/computer/case9.png',
  ];
  const [sliderIndex, setSliderIndex] = useState(1);

  return (
    <section id='slider' className=' pt-5 h-auto w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat pb-14 '>
      <div className="relative">
        <div>
          <button
            onClick={() => setSliderIndex((pre) => (pre > 0 ? pre - 1 : 2))}
            className="absolute left-5 top-56 cursor-pointer border-none bg-none  py-2 text-7xl duration-1000 hover:scale-110 hover:animate-pulse "
          >
            &#8249;
          </button>
          <button
            onClick={() => setSliderIndex((next) => (next < 2 ? next + 1 : 0))}
            className="absolute right-5 top-56 cursor-pointer border-none bg-none py-2 text-7xl duration-1000 hover:scale-110 hover:animate-pulse  "
          >
            &#8250;
          </button>
        </div>
        <div className="flex flex-col gap-1 px-5 pt-5  ">
          <img src={sliderImages[sliderIndex]} alt="" />
          <div className="text-2xl font-bold capitalize tracking-wide">
            The Bike is <span className="text-indigo-500">based</span> on the
            project concept.
          </div>

          <div className='text-center'>
            <Button>Watch Video</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
