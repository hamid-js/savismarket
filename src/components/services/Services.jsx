import {
  RiCustomerService2Fill,
  RiRoadMapLine,
  RiRocketFill,
  RiVerifiedBadgeFill,
} from 'react-icons/ri';

export default function Services() {
  return (
    <div className="bg-gradient-to-t  from-zinc-950 via-zinc-800 via-50% to-zinc-950">
      <div className="px-3 py-10 text-xl capitalize  text-gray-200  *:my-8 ">
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
