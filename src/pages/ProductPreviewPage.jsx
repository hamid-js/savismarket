/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from 'react-router-dom';
import { allCategoriesData } from '../data';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import { RiHeartLine, RiListCheck3, RiSearchLine } from 'react-icons/ri';
console.log('allCategoriesData:', allCategoriesData);
function ProductPreviewPage() {
  // handle useParams
  const { id } = useParams();
  let product = null;
  allCategoriesData.some((Category) => {
    product = Category.products.find((item) => item.id === parseInt(id));
    return product !== undefined;
  });
  // handle useParams
  // slider
  const sliderImages = [product.firstImage, product.hoverImage];
  const [sliderIndex, setSliderIndex] = useState(1);
  // slider

  // handle clickoutside
  const navigate = useNavigate();
  const productRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productRef.current && !productRef.current.contains(event.target)) {
        navigate('/');
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navigate]);
  // handle clickoutside

  const hoverStyle =
    'hover:scale-125 z-10 hover:bg-indigo-700 hover:text-green-500';
  // handle incorrect  useParams path
  if (!product) return <div className="p-40"> product not find</div>;

  return (
    <div
      ref={productRef}
      className="fixed border-2 border-indigo-600 right-[5%] top-[13dvh] z-40  mx-auto h-[75dvh] w-11/12 overflow-y-scroll rounded-lg bg-zinc-300 pb-7 duration-700"
    >
      <div className="flex h-12 flex-wrap items-center justify-center bg-slate-400  text-center text-xl  uppercase text-gray-700 ">
        <div
          onClick={() => navigate(-1)}
          className="absolute right-0 top-0  h-12 border border-zinc-600 bg-zinc-700 px-3 text-4xl text-white "
        >
          x
        </div>
        <p className="w-2/3 font-semibold"> {product.name}</p>
      </div>
      <div className="text-gray-700">
        <button
          onClick={() => setSliderIndex((pre) => (pre > 0 ? pre - 1 : 1))}
          className="absolute left-5 top-24 cursor-pointer border-none bg-none  py-2 text-7xl duration-1000 hover:scale-110 hover:animate-pulse "
        >
          &#8249;
        </button>
        <button
          onClick={() => setSliderIndex((next) => (next < 1 ? next + 1 : 0))}
          className="absolute right-5 top-24 cursor-pointer border-none bg-none py-2 text-7xl duration-1000 hover:scale-110 hover:animate-pulse  "
        >
          &#8250;
        </button>
        <div className='bg-white  w-2/3 m-auto'>
        <img
          className="m-auto mt-3 h-44 w-auto  "
          src={sliderImages[sliderIndex]}
          alt={product.name}
        />
        </div>
        <div className=" mx-auto flex w-5/6 flex-col items-start justify-center gap-3 pt-5 text-lg capitalize *:flex *:w-full *:justify-between ">
          <p>
            <span> category :</span>
            <span className="text-red-600">{product.category}</span>
          </p>
          <p>
            <span> details :</span>
            <span className="text-red-600">{product.details}</span>
          </p>

          <p>
            <span> id :</span>
            <span className="text-red-600">{product.id}</span>
          </p>
          <p>
            <span> count :</span>
            <span className="text-red-600">{product.count}</span>
          </p>
          <p>
            <span> price :</span>
            <span className="text-red-600">${product.price}</span>
          </p>
        </div>

        <div className="absolute left-0  top-[28.2rem] mt-5 flex w-full  items-center justify-evenly gap-44 text-2xl text-white *:rounded-full *:bg-indigo-600 *:p-2">
          <div className={`${hoverStyle} ml-2`}>
            <RiHeartLine />
          </div>
          <div className={`${hoverStyle} mr-2`}>
            <RiListCheck3 />
          </div>
        </div>
        <div className="text-center text-white">
          <Button>
            <Link to="#ee">add to cart</Link>
          </Button>
        </div>
        <div className="text m-auto w-5/6 pr-4 text-sm">
          <h3 className="py-2 text-lg font-bold">Description :</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            animi voluptates magnam excepturi? Soluta necessitatibus harum id
            sint officia pariatur labore corrupti! Temporibus corporis
            perspiciatis debitis optio rerum perferendis vitae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPreviewPage;
