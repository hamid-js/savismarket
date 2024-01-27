import  Button  from '../ui/Button';

export default function PricingTable() {
  return (
    <div className="item-center mb-14 flex  w-80 flex-col  justify-center gap-2 text-center ">
      <p className="py-2 text-xl font-semibold uppercase tracking-widest">
        premium build
      </p>
      <div className="mx-5 border-2 border-indigo-600  bg-gray-900">
        <div className=" -z-10 bg-[url(/images/digital/gallery-9.jpg)] bg-cover bg-center py-4 font-bold brightness-90">
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
