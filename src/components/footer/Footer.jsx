import {
  RiGithubFill,
  RiMailCheckFill,
  RiPhoneFill,
  RiTelegramFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className=" pb-10 md:pb-0 w-full  bg-black py-1">
        <div className="py-5">
          <h3 className="mb-3 ml-5 text-[5.9vw] font-bold text-indigo-300 md:text-[3.5vw] lg:text-[3vw] md:ml-12">
            Hamid Mohamadi
          </h3>

          <div className=" flex items-center  justify-between gap-1  pb-1">
            <div className="-ml-10 w-7/12 rounded-r-full border-t-2 border-indigo-600 bg-indigo-900 p-5 shadow-lg shadow-indigo-300 sm:w-1/2 lg:w-5/12">
              <img
                className=" rounded-r-full "
                src="/images/footer/m11.jpg"
                alt=""
              />
            </div>
            <div className="pr-3 text-[3.1vw] font-bold text-indigo-300 *:mt-5 *:cursor-pointer md:pr-[10%] md:text-[2.5vw] lg:text-[2.1vw] lg:*:mt-10">
              <div>
                <Link target="_blank" to="tel:+989371355148">
                  <RiPhoneFill className="mx-1 inline" />
                  +98 937 1355148
                </Link>
              </div>
              <div>
                <Link target="_blank" to="https://t.me/hamid_develop">
                  <RiMailCheckFill className="mx-1 inline" />
                  Hamid.ReactJs@gmail.com
                </Link>
              </div>
              <div>
                <Link target="_blank" to="mailto:>Hamid.ReactJs@gmail.com">
                  <RiTelegramFill className="mx-1 inline" />
                  @Hamid-develop
                </Link>
              </div>
              <div>
                <Link target="_blank" to="https://github.com/hamid-js">
                  <RiGithubFill className="mx-1 inline" />
                  Github.com/hamid-js
                </Link>
              </div>
            </div>
          </div>
          <p className="ml-5 mt-5 text-[5.2vw] lg:text-[2.5vw] font-bold text-indigo-300 md:text-[3.2vw] md:ml-14">
            Front-End Developer
          </p>
        </div>
      </div>
    </>
  );
}
