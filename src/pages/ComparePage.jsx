import { useContext } from 'react';
import ProductCard from '../components/products/ProductCard';
import { PostContext } from '../contexts/PostContext';
import { RiShuffleFill } from 'react-icons/ri';
import Button from '../components/ui/Button';

function ComparePage() {
  const { compare, setCompare } = useContext(PostContext);
  const handleDeleteWish = (id) =>
    setCompare((prev) => prev.filter((item) => item.id !== id));
  return (
    <div className='bg-[url(/images/bg/bg4.jpg)] bg-cover bg-centeroverflow-x-hidden'>
      <div className="flex  scale-75 justify-center gap-1  pt-10 ">
        {compare.length !== 0 ? (
          compare.map((product) => (
            <div key={product.id}>
              <div className="flex items-center justify-between bg-zinc-400 p-1 text-black">
                <div
                  onClick={() => handleDeleteWish(product.id)}
                  className="flex items-center justify-center gap-1"
                >
                  <span className="text-3xl ">&times;</span>
                  <span className="pt-1">Remove</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                firstImage={product.firstImage}
                hoverImage={product.hoverImage}
                details={product.details}
              />
            </div>
          ))
        ) : (
          <div className='py-5 flex flex-col gap-10 items-center justify-evenly'>
          <RiShuffleFill className='text-9xl text-zinc-800 scale-150 -rotate-90' />
         <p className=' font-semibold text-xl text-stone-300 capitalize'>No products in the Compare.</p> 
         <Button>return to shop</Button>
        </div>
        )}
      </div>
    </div>
  );
}

export default ComparePage;
