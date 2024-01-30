import Button from '../ui/Button';

export default function PricingTable({ url, price, text1, text2, text3, text4 }) {
  return (
    <div className="item-center mb-14 flex  w-80 flex-col uppercase justify-center gap-2 text-center ">
      <p className="py-2 text-xl font-semibold uppercase tracking-widest">
        premium build
      </p>
      <div className=" mx-5 border-2 border-indigo-600  bg-gray-900">
        <div className=" relative pb-4 font-bold">
          <img
            className="h-24  w-full filter brightness-75"
            src={url}
            alt=""
          />
          <div className='absolute top-2 right-24'>
    
            <div className="z-10  text-4xl">${price}</div>
            <div className="z-10  text-gray-300 ">per month</div>
          </div>
        </div>
        <div>
          <ul className="flex flex-col items-center justify-between   p-4 text-lg text-gray-300">
            <li className="border- w-full  py-3">{text1}</li>
            <li className="w-full border-t  py-3">{text2}</li>
            <li className="w-full border-t  py-3">{text3}</li>
            <li className="w-full border-t  py-3">{text4}</li>
          </ul>
          <div className=" border-t">
            <Button>buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
