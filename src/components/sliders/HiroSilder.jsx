import {  useState } from 'react';

export default function HiroSilder() {
  const sliderImages = [
    '/images/digital/gallery-25.jpg',
    '/images/digital/gallery-32.jpg',
    '/images/digital/gallery-17.jpg',
  ];
  const [sliderIndex, setSliderIndex] = useState(0);
  console.log('HiroSilder ~ sliderIndex:', sliderIndex);

 
  return (
    <section
      id="slider"
      className=' w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat pt-16  '
    >
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${sliderImages[sliderIndex]})` }}
          className="duration-[2000ms]  h-[23rem]  w-full items-center justify-center gap-0 bg-slate-700 bg-[length:520px_380px] bg-center bg-no-repeat "
        ></div>
        <div className="z-500 text-white">
          <button
            onClick={() => setSliderIndex((pre) => (pre > 0 ? pre - 1 : 2))}
            className="sm:top-50 absolute left-[1%] top-[25vw] cursor-pointer border-none bg-none  py-2 text-8xl duration-1000 hover:scale-110 hover:animate-pulse "
          >
            &#8249;
          </button>
          <button
            onClick={() => setSliderIndex((next) => (next < 2 ? next + 1 : 0))}
            className="sm:top-50 absolute right-[1%] top-[25vw] cursor-pointer border-none bg-none py-2 text-8xl duration-1000 hover:scale-110 hover:animate-pulse  "
          >
            &#8250;
          </button>
        </div>
        <ul className=" absolute -translate-x-[50%]  left-[50%] top-[21rem] flex gap-3  *:h-3 *:w-3 *:rounded-full *:bg-white ">
          {sliderImages.map((url, index) => (
            <li
              onClick={() => setSliderIndex(index)}
              key={url}
              style={{
                backgroundColor: `${sliderIndex === index ? '#a855f7' : ''}`,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
