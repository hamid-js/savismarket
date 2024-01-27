import  Inputbox  from '../ui/Inputbox';

export default function Footer() {
  return (
    <>
      <div className=" mb-14 w-full bg-black py-1">
        <div className="mx-1  rounded-sm bg-indigo-900 ">
          <Inputbox button="Search" title="" placeholder="Search products.." />
        </div>
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
        <Inputbox
          button="Submit"
          title="subscribe to our Newsletter"
          placeholder='"enter your email"'
        />
        <div className="w-full bg-indigo-950 py-3 text-center text-lg capitalize text-indigo-200  ">
          ❤️ created by hamid mohamadi ❤️
        </div>
      </div>
    </>
  );
}
