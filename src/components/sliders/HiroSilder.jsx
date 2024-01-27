export default function HiroSilder() {

  // todo create 3 slide for this carosel slider
  return (
    <section className='  h-auto w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat pb-14 '>
      <div className="relative">
        <div>
          <button className="absolute left-0 top-56 cursor-pointer border-none bg-none text-6xl  font-extralight ">
            &#8249;
          </button>
          <button className="absolute right-0 top-56 cursor-pointer border-none bg-none text-6xl   font-extralight ">
            &#8250;
          </button>
        </div>
        <div className="flex flex-col gap-1 px-5 pt-5  ">
          <img src="/images/digital/case21.png" alt="" />
          {/* <div className="text-2xl font-bold capitalize tracking-wide">
              The Bike is <span className="text-orange-400">based</span> on the
              project concept.
            </div> */}
          {/* <p>
              The price you pay on a new or used model is the money you get back
              on trade. Just a little more incentive to get you certain the claims
              of covering long distances.
            </p> */}
          <a
            className=" tex self-center rounded-md bg-orange-400 px-4 py-2 align-baseline "
            href="#cta"
          >
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
}
