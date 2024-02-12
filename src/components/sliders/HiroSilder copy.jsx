// import { useState } from 'react';
import Button from '../ui/Button';

export default function HiroSilder() {
  const sliderImages = [
    '/images/digital/gallery-5.jpg',
    '/images/digital/gallery-6.jpg',
    '/images/digital/gallery-7.jpg',
    '/images/digital/gallery-8.jpg',
    '/images/digital/gallery-9.jpg',
  ];
  // const [sliderTranslate , setSlidertranslate] = useState("0rem")

  return (
    <section
      id="slider"
      className=' w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat pt-10  '
    >
      <div className="relative">
        <div>
          <button className="sm:top-50 absolute left-[5%] top-[50vw] cursor-pointer border-none bg-none  py-2 text-7xl duration-1000 hover:scale-110 hover:animate-pulse ">
            &#8249;
          </button>
          <button className="sm:top-50 absolute right-[5%] top-[50vw] cursor-pointer border-none bg-none py-2 text-7xl duration-1000 hover:scale-110 hover:animate-pulse  ">
            &#8250;
          </button>
        </div>
        <div className="flex translate-x-[2rem] overflow-x-clip ">
          {sliderImages.map((image, index) => (
            <img key={index} className="   px-6 " src={image} alt={image} />
          ))}
          <div className="text-center text-lg font-bold capitalize tracking-wide">
            Build Your
            <span className="text-indigo-500 "> NEW</span> PC
          </div>

          <div className="text-center">
            <div className="mx-[20vw] py-1 sm:mx-auto sm:w-1/2 sm:py-10">
              <Button>Watch Video</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
