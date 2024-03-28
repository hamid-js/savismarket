import { useNavigate, useParams } from 'react-router-dom';
import { allCategoriesData } from '../data';
import { useRef, useState } from 'react';
import { RiCheckFill, RiHeartFill,  RiListCheck3, RiShoppingCartLine } from 'react-icons/ri';
import useClickOutside from '../hooks/useClickOutside';
import useCart from '../hooks/useCart';
import useLists from '../hooks/useLists'

function ProductPreviewPage() {
  // handle useParams
  const { id } = useParams();
  let product = null;
  allCategoriesData.some((Category) => {
    product = Category.products.find((item) => item.id === parseInt(id));
    return product !== undefined;
  });


 // handle clickoutside with custom hook
  const navigate = useNavigate();
  const productRef = useRef(null);
  useClickOutside(productRef, () => navigate(-1));

  // using custom hooks
  const {
    addToCartHandler,
    decreaseOrderHandler,
    increaseOrderHandler,
    itemInCart,
  } = useCart(product);

  const {
    addToWishlistHandler,
    addToCompareHandler,
    isInCompare,
    isInWishlist,
  } = useLists(product);


  // slider
  const sliderImages = [product.firstImage, product.hoverImage];
  const [sliderIndex, setSliderIndex] = useState(1);
 

 

  // handle incorrect  useParams path
  if (!product) return <div className="p-40"> product not find</div>;

  return (
    <div
      ref={productRef}
      className="fixed right-[5%] top-[13dvh] z-40 mx-auto h-[80dvh]  w-11/12 overflow-y-scroll rounded-lg border-2 border-indigo-600 bg-slate-300 pb-7 duration-700"
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
        <div className="m-auto  w-2/3 bg-white">
          <img
            className="m-auto mt-3 h-44 w-auto  "
            src={sliderImages[sliderIndex]}
            alt={product.name}
          />
        </div>
        <div className=" mx-auto flex w-5/6 flex-col items-start justify-center gap-5 py-7 text-[4.3vw] font-bold capitalize *:flex *:w-full *:justify-between ">
          <p>
            <span> category :</span>
            <span className="text-indigo-600">{product.category}</span>
          </p>
          <p>
            <span> details :</span>
            <span className="text-indigo-600">{product.details}</span>
          </p>

          <p>
            <span> id :</span>
            <span className="text-indigo-600">{product.id}</span>
          </p>
          <p>
            <span> count :</span>
            <span className="text-indigo-600">{product.count}</span>
          </p>
          <p>
            <span> price :</span>
            <span className="text-indigo-600">${product.price}</span>
          </p>
        </div>

        <div className="  -z-10 mt-5 text-center text-white">
          <div className="  my-4  flex w-full  items-center justify-center gap-20 text-2xl text-white *:rounded-md *:bg-indigo-800 *:p-2">
          <div style={{ backgroundColor: `${isInCompare ? '#4f46e5' : ''}`,color: `${isInCompare ? '#5eead4' : ''}` }} onClick={addToCompareHandler}>
            {isInCompare ? (
              <RiCheckFill className='font-bold text-2xl'  />

            ) : (
              <RiListCheck3 />
            )}
          </div>
          <div
            style={{ backgroundColor: `${isInWishlist ? '#4f46e5' : ''}`,color: `${isInWishlist ? '#e11d48' : ''}` }}
            onClick={addToWishlistHandler}
          
          >
        <RiHeartFill />

          </div>
          
          </div>
          {itemInCart ? (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-1/2 gap-1 bg-indigo-600  ">
                <div
                  onClick={decreaseOrderHandler}
                  className=" flex  text-5xl pb-2 w-full  items-center justify-center hover:scale-125  hover:text-green-500"
                >
                  -
                </div>
                <div className='text-xl ' >{itemInCart.orderCount}</div>
                <div
                  onClick={increaseOrderHandler}
                  className=" flex text-4xl pb-2 w-full items-center justify-center hover:scale-125  hover:text-green-500"
                >
                  +
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div
                onClick={addToCartHandler}
                className="flex h-14 w-2/3 max-w-40 items-center  justify-center gap-3 bg-indigo-600 pb-2  rounded-md pt-2 hover:text-green-500"
              >
                <span>Add To Cart</span>
                <span>
                  +{' '}
                  <RiShoppingCartLine className="inline -scale-x-100 py-1 text-3xl " />
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="text px-8 m-auto w-6/6 pr-4 text-sm">
          <h3 className=" text-lg py-4 font-bold">Description :</h3>
          <p className='text-lg'>
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
