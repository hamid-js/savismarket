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
      <main>
      <Silder />
      <MobileMenu />
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

        my account</a>
        </li>

        <li>
        <a href="#ff">
          <RiBarChartBoxLine className={iconStyle} />
         compare</a>
        </li>
      </ul>
    </div>
  );
}
