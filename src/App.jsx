import {
  RiBarChartBoxLine,
  RiHeartLine,
  RiMenuFill,
  RiShoppingCartLine,
  RiStore3Line,
  RiUserLine,
} from 'react-icons/ri';

function App() {
  return (
    <div>
      <Header />
      <main className="pb-80">
        <Silder />
        <MobileMenu />
        <ProductsSection />
        <ProductCarousel />
        <PricingBox />
      </main>
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="fixed z-10  flex  w-full items-center  justify-between p-3 text-2xl  text-white ">
      <div>
        <RiMenuFill />
      </div>
      <h1 className="font-bold  ">Savismarket</h1>
      <div className="relative p-2">
        <span className="absolute right-0 top-0 w-4 rounded-full bg-orange-500 text-center text-xs   opacity-85">
          1
        </span>
        <RiShoppingCartLine className="text-2xl font-bold" />
      </div>
    </header>
  );
}

function Silder() {
  return (
    <section className='  h-dvh w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat '>
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
          <img src="/images/digital/Image_09.png" alt="" />
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

function MobileMenu() {
  const iconStyle = 'text-2xl text-center m-auto';
  return (
    <div className="fixed bottom-0 h-14 w-full bg-white pt-2  text-sm text-black ">
      <ul className="flex  items-center justify-evenly ">
        <li>
          {' '}
          <a href="#ff">
            <RiStore3Line className={iconStyle} />
            shop
          </a>
        </li>

        <li>
          <a href="#ff">
            <RiHeartLine className={iconStyle} />
            wishlist
          </a>
        </li>

        <li>
          <a href="#ff">
            <RiUserLine className={iconStyle} />
            my account
          </a>
        </li>

        <li>
          <a href="#ff">
            <RiBarChartBoxLine className={iconStyle} />
            compare
          </a>
        </li>
      </ul>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="m-1 w-[47%] text-white ">
      <div className="flex  h-40 w-full  flex-col justify-between bg-[url(/images/digital/Image_48.jpg)] bg-cover bg-center  ">
        <div className="mr-2 mt-1 h-8 w-8 self-end  rounded-full bg-black p-2">
          <RiHeartLine className=" " />
        </div>
        <div className="text- h-7 w-7 rounded-sm bg-blue-500">
          <RiShoppingCartLine className="-scale-x-100  pr-1  pt-2 text-2xl  " />
        </div>
      </div>
      <div className="flex flex-col items-center text-xs">
        <p className="font-semibold">dasdasasda</p>
        <p className="text-gray-300">sdsdas</p>
        <p className="text-blue-500">$65.46</p>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section className="flex w-full flex-wrap justify-around ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}

function ProductCarousel() {
  return (
    <div className=" flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-t  from-[#3f48788d] via-zinc-900  via-50% to-black pb-20 ">
      <div className=" w-full">
        <img src="/images/digital/Image_03.png" alt="" />
      </div>
      <div className="w-1/4 bg-black text-center text-5xl font-extralight">
        <button className="mb-2 pr-4"> &#8249;</button>
        <button className="mb-2 pl-4"> &#8250;</button>
      </div>
    </div>
  );
}
// background-image:-webkit-linear-gradient(bottom , rgb(16, 16, 16) , rgba(0, 0, 0, 0) 51%);background-image:linear-gradient(to top , rgb(16, 16, 16) , rgba(0, 0, 0, 0) 51%)
function PricingBox() {
  return (
    <div>
      <div className=" p-5 gap-4 text-center  flex flex-col items-center justify-center  capitalize text-gray-300 ">
        <p className="text-2xl ">play like the pros</p>
        <h3 className="text-3xl font-bold uppercase text-white">
          ready pc builds
        </h3>
        <p className='text-sm'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected.{' '}
        </p>
      </div>
      <div>
        <PricingTable />
        <PricingTable />
        <PricingTable />
      </div>
    </div>
  );
}
function PricingTable() {
  return (
    <div className="item-center mb-14 flex  w-full flex-col justify-center gap-2 text-center ">
      <p className="py-2 text-xl font-semibold uppercase tracking-widest">
        premium build
      </p>
      <div className="mx-5 border-2 border-indigo-600  bg-gray-900">
        <div className=" bg-[url(/images/digital/Image_074.jpg)]  bg-cover bg-center py-4 font-bold">
          <div className="text-4xl">$2500</div>
          <div className="text-gray-300 ">per month</div>
        </div>
        <div>
          <ul className="flex flex-col items-center justify-between   p-4 text-lg text-gray-300">
            <li className="border- w-full  py-3">rayzen</li>
            <li className="w-full border-t  py-3">rayzen</li>
            <li className="w-full border-t  py-3">rayzen</li>
            <li className="w-full border-t  py-3">rayzen</li>
          </ul>
          <div className=" border-t">
            {' '}
            <button className=" my-6 bg-indigo-600 px-5 py-3 uppercase">
              buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
