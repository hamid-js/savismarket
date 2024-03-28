import { useState } from 'react';

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
          className="h-[23rem]  w-full  items-center justify-center gap-0 bg-slate-950 bg-[length:640px_380px] bg-center bg-no-repeat duration-[2000ms] sm:h-[28rem] sm:bg-[length:768px_500px] md:h-[32rem] md:bg-[length:1024px_550px] lg:bg-[length:1280px_550px] xl:bg-[length:1050px_480px] xl:mt-5  "
        ></div>
        <div className="z-500 text-white">
          <button
            onClick={() => setSliderIndex((pre) => (pre > 0 ? pre - 1 : 2))}
            className="absolute left-[1%] top-[25vw] cursor-pointer border-none bg-none py-2  text-8xl duration-1000 hover:scale-110 hover:animate-pulse sm:top-40 md:top-48 md:text-9xl xl:left-[5%] 2xl:text-[9rem] xl:top-40 "
          >
            &#8249;
          </button>
          <button
            onClick={() => setSliderIndex((next) => (next < 2 ? next + 1 : 0))}
            className="absolute right-[1%] top-[25vw] cursor-pointer border-none bg-none py-2 text-8xl duration-1000 hover:scale-110  hover:animate-pulse sm:top-40  md:top-48 md:text-9xl xl:right-[5%] xl:top-40 2xl:text-[9rem]"
          >
            &#8250;
          </button>
        </div>
        <ul className=" absolute left-[50%] top-[21rem] flex -translate-x-[50%] gap-3 duration-1000 *:h-3 *:w-3  *:rounded-full *:bg-white sm:top-[25rem] sm:gap-4  md:top-[29rem] md:gap-5 ">
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
