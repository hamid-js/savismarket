/* eslint-disable no-unused-vars */
import {
  RiBarChartBoxLine,
  RiCustomerService2Fill,
  RiHeartLine,
  RiMenuFill,
  RiRoadMapLine,
  RiRocketFill,
  RiShoppingCartLine,
  RiStore3Line,
  RiUserLine,
  RiVerifiedBadgeFill,
} from 'react-icons/ri';

function App() {
  return (
    <div>
      <Header />
      <main className="pb-10">
        <Silder />
        <MobileMenu />
        <Services />
        <Auctions />
        <AllCategories />
        <LaptopsSection />
        <ProductCarousel />
        <PricingBox />
        <Articles />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="fixed z-20  flex  w-full items-center  justify-between p-3 text-2xl  text-white ">
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
    <section className='  h-auto pb-14 w-full bg-[url("/images/bg_dark1.jpg")] bg-cover bg-center bg-no-repeat '>
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

function MobileMenu() {
  const iconStyle = 'text-2xl text-center m-auto';
  return (
    <div className="fixed z-40 bottom-0 h-14 w-full bg-white pt-2  text-sm text-black ">
      <ul className="flex  items-center justify-evenly ">
        <li>
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

function ProductCard({ isInAuctions }) {
  return (
    <div
      className={`m-1 w-[47%] p-2 text-white ${isInAuctions ? 'border border-gray-600' : ''}`}
    >
      <div className="flex  h-40 w-full  flex-col justify-between bg-[url(/images/digital/gallery-27.jpg)] bg-cover bg-center  ">
        <div className="mr-2 mt-1 h-8 w-8 self-end  rounded-full bg-black p-2">
          <RiHeartLine className=" " />
        </div>
        <div className="text- h-7 w-7 rounded-sm bg-blue-500">
          <RiShoppingCartLine className="-scale-x-100  pr-1  pt-2 text-2xl  " />
        </div>
      </div>
      {isInAuctions ? (
        <div className="flex flex-col items-center justify-between gap-y-2 text-center capitalize">
          <p>Time left</p>

          <div className="flex w-full items-center justify-evenly border-b border-gray-700 pb-1">
            <div>
              175 <div className="text-[10px]  text-gray-400">days</div>
            </div>
            <div>
              13<div className="text-[10px]  text-gray-400">hours</div>
            </div>
            <div>
              44<div className="text-[10px]  text-gray-400">minutes</div>
            </div>
            <div>
              55<div className="text-[10px]  text-gray-400">seconds</div>
            </div>
          </div>

          <p className="font-semibold">duel sim Smartphone</p>
          <p className="text-sm font-light *:text-lg *:font-semibold">
            current bid: <span>$411.00</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-xs">
          <p className="font-semibold">Smartphone</p>
          <p className="text-gray-300">duel sim</p>
          <p className="text-blue-500">$65.46</p>
        </div>
      )}
    </div>
  );
}

// function ProductsSection() {
//   return (
//     <section className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 ">
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//     </section>
//   );
// }

function ProductCarousel() {
  return (
    <div className=" flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <div className=" w-full">
        <img src="/images/digital/case18.png" alt="" />
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
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 py-10">
      <Titles
        title1="play like the pros"
        title2="ready pc builds"
        title3=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected."
      />
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
        <div className=" bg-[url(/images/digital/gallery-9.jpg)] -z-10 brightness-90 bg-cover bg-center py-4 font-bold">
          <div className="text-5xl    ">$2500</div>
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
            <Button>buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div className=" flex flex-col bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950  ">
      <Titles />
      <ProductArticle />
      <ProductArticle />
    </div>
  );
}

function ProductArticle() {
  return (
    <div className="  flex  w-full flex-col items-center justify-center ">
      <div className=" w-full">
        <img src="/images/digital/case2.png" alt="" />
      </div>
      <div className="w-full p-4">
        <h3 className="my-4 text-2xl font-semibold capitalize">
          skyTech Omega
        </h3>
        <ul className="text-gray-300">
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>geforce GTX1060 </span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>Intel Corei5 7500</span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>16GB DDR4</span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>512GB SSD</span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>Windows 12!</span>
          </li>
        </ul>
        <Button>Read me</Button>
      </div>
    </div>
  );
}

function Button({ children }) {
  return (
    <button className=" my-6 bg-indigo-600 px-5 py-3 uppercase">
      {children}
    </button>
  );
}

function Titles({
  title1 = 'play like the pros',
  title2 = 'ready pc builds',
  title3 = ' There are many variations of passages of Lorem Ipsum available, butthe majority have suffered alteration in some form, by injected.',
}) {
  return (
    <div className=" flex flex-col items-center  justify-center gap-4 p-5 text-center  capitalize text-gray-300 ">
      <p className="text-2xl ">{title1}</p>
      <h3 className="text-3xl font-bold uppercase text-white">{title2}</h3>
      <p className="text-sm">{title3}</p>
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <Titles
        title1="play like the pros"
        title2="ready pc builds"
        title3=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected."
      />

      <div className="grid h-full w-full  grid-cols-2 grid-rows-4 bg-gray-900  ">
        <div className=" over bg bg-center-center m-1 h-40  bg-[url(/images/digital/gallery-1.jpg)] bg-cover "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-2.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-3.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-4.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-10.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-11.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-12.jpg)] bg-cover  bg-center p-1 "></div>
        <div className=" h-40  w-full bg-[url(/images/digital/gallery-13.jpg)] bg-cover  bg-center p-1 "></div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className=" mb-7 w-full bg-black py-7">
        <div className="mb-7 p-3 text-xl">
          <h4 className=" font-semibold uppercase ">foote menu</h4>
          <ul className="capitalize text-gray-300 *:mt-3">
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
          </ul>
        </div>

        <div className="p-3  text-xl">
          <h4 className=" font-semibold uppercase ">foote menu</h4>
          <ul className="pb-5 capitalize text-gray-300 *:mt-3">
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
            <li>
              <a href="#d">instagram</a>
            </li>
          </ul>
        </div>
        <Subscribe />
        <div className="w-full bg-indigo-950 py-3 text-center text-lg capitalize text-indigo-200  ">
          ❤️ created by hamid mohamadi ❤️
        </div>
      </div>
    </>
  );
}

function LaptopsSection() {
  return (
    <div className="bg-gradient-to-t from-zinc-950  via-zinc-800 via-50% to-zinc-950 p-5">
      <div className="flex h-48 w-full flex-col items-center justify-center  gap-y-5 bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700  uppercase">
        <h2 className="font-bold ">phones</h2>
        <div>
          <span>12 </span>Products
        </div>
        <a className="rounded-full bg-cyan-400 px-4 py-1" href="#ds">
          view all items
        </a>
      </div>
      <div className="flex w-full flex-wrap justify-around bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
function Subscribe() {
  return (
    <div className=" bg-inherit pb-10">
      <form className="p-2">
        <p className="px-2  py-5 text-xl font-bold capitalize text-gray-200 ">
          subscribe to our Newsletter
        </p>
        <input
          className="rounded-l-full  py-[7px] pl-8 w-4/5 shadow-sm shadow-gray-50 outline-none"
          placeholder="enter your email"
          type="text"
        />

        <button className="-m-10 rounded-full  bg-gray-600 px-7 py-[9px] pt-[8px] ">
          Submit
        </button>
      </form>
    </div>
  );
}
function Services() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <div className="py-10 px-3 text-xl capitalize  text-gray-200  *:my-8 ">
        <div>
          <RiCustomerService2Fill className="mr-2 inline text-6xl text-indigo-500 " />
          <span> call center</span>
        </div>

        <div>
          <RiRoadMapLine className="mr-2 inline text-6xl text-indigo-500 " />
          <span> order tracking</span>
        </div>
        <div>
          <RiRocketFill className="mr-2 inline text-6xl text-indigo-500 " />
          <span> fast delivery</span>
        </div>
        <div>
          <RiVerifiedBadgeFill className="mr-2 inline text-6xl text-indigo-500 " />
          <span> instant buying</span>
        </div>
      </div>
    </div>
  );
}
function Auctions() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950 py-10">
      <div></div>
      <h4 className="m-auto my-5 w-2/3 border-b py-5 text-center text-xl uppercase">
        Latest auctions
      </h4>
      <div className="flex w-full flex-wrap justify-around">
        <ProductCard isInAuctions />
        <ProductCard isInAuctions />
      </div>
    </div>
  );
}

function CategoryBox({  title = '', count = 0, color = '' ,url = '' }) {
  const boxStyle = {
    backgroundImage: `url(${url})`,
    backgroundColor: `${color}`
  }
  return (
    <div>
      <div style={boxStyle}
        className={`my-3 flex h-48 w-full flex-col items-start justify-center gap-y-5  bg-[url(/images/digital/headphone-1.png)] bg-blue-500 bg-contain bg-right bg-no-repeat uppercase`}
      >
        <h2 className="font-bold ml-10 ">{title}</h2>
        <div className='ml-10'>
          <span className="font-bold">{count} </span>Products
        </div>
        <a style={{backgroundColor: `${color}`}} className="rounded-full border-2   px-4 ml-4 py-1" href="#ds">
          view all items
        </a>
      </div>
    </div>
  );
}

function AllCategories() {
  return (
    <div className="p-4">
      <CategoryBox
        title="headphones"
        count={10}
        url="/images/digital/headphone-1.png"
        color="blue"
      />
      <CategoryBox
        title="laptops"
        count={23}
        url="/images/digital/laptop-1.png"

        color="red"
      />
      <CategoryBox
        title="phones"
        count={15}
        url="/images/digital/phone5.png"

        color="gold"
      />
    
      <CategoryBox
        title="Computers"
        count={7}
        url="/images/digital/case19.png"

        color="green"
      />
        <CategoryBox
        title="watches"
        count={33}
        url="/images/digital/watch-3.png"

        color="purple"
      />
    </div>
  );
}
// complate all catgory box
// edit product box
// create datas
// handel maps on data 
// create search tab
// handel menu js
