import  Inputbox  from '../ui/Inputbox';
import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <>
      <div className=" mb-14 w-full bg-black py-1">
      <Inputbox
          button="Submit"
          title="subscribe to our Newsletter"
          placeholder='"enter your email"'
        />
      <div className='flex justify-around'>
      <FooterItem />
        <FooterItem />

      </div>
        
        
        <div className="w-full bg-indigo-950 py-3 text-center text-lg capitalize text-indigo-200  ">
          ❤️ created by hamid mohamadi ❤️
        </div>
      </div>
    </>
  );
}
