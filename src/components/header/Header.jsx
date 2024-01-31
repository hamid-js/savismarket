import { RiMenuFill, RiShoppingCartLine } from 'react-icons/ri';

export default function Header() {

 
  return (

        <header className="fixed z-20 flex w-full  items-center  justify-between bg-black  p-3 text-2xl text-white duration-700 ">
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
