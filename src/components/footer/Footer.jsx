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
      <div className=" mb-14 w-full  bg-black py-1">
        <div className='py-10'>
          <h3 className='font-bold text-indigo-300 text-[5.4vw] ml-5 mb-3'>Hamid Mohamadi</h3>
        
        <div className=" flex gap-1  items-center justify-between  pb-1">
          <div className="-ml-10 w-7/12 rounded-r-full border-t-2 border-indigo-600 bg-indigo-900 p-5 shadow-lg shadow-indigo-300">
            <img
              className=" rounded-r-full "
              src="/images/footer/m11.jpg"
              alt=""
            />
          </div>
          <div className="pr-3 font-bold text-[3.1vw] text-indigo-300 *:mt-5 *:cursor-pointer ">
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
        <p className='font-bold text-indigo-300 text-[5.2vw] ml-5 mt-5'>Front-End Developer</p>
</div>
        <div className="w-full bg-indigo-950 py-3 text-center text-lg capitalize text-indigo-200  ">
          ❤️ created by hamid mohamadi ❤️
        </div>
      </div>
    </>
  );
}
