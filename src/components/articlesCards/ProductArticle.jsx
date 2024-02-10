import  Button  from '../ui/Button';

export default function ProductArticle() {
  return (
    <div className="  flex pl-10 w-72 mb-5 border border-zinc-700 flex-col  items-center justify-center ">
      <div className=" w-full">
        <img src="/images/digital/case2.png" alt="" />
      </div>
      <div className="w-full p-4">
        <h3 className="my-4 text-2xl font-semibold capitalize">
          skyTech Omega
        </h3>
        <ul className="text-gray-300">
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>geforce GTX1060 </span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>Intel Corei5 7500</span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>16GB DDR4</span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>512GB SSD</span>
          </li>
          <li>
            <img
              className="my-2 mr-3 inline  h-6 w-6"
              src="/images/digital/tik.svg"
              alt=""
            />
            <span>Windows 12!</span>
          </li>
        </ul>
       <div className='w-2/3 py-4'><Button>Read me</Button></div> 
      </div>
    </div>
  );
}
