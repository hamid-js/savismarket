import  Inputbox  from '../ui/Inputbox';
import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <>
      <div className=" my-14 w-full bg-black py-1">
        <div className="mx-1  rounded-sm bg-indigo-900 ">
          <Inputbox button="Search" title="" placeholder="Search products.." />
        </div>
      <div className='flex justify-around'>
      <FooterItem />
        <FooterItem />

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
