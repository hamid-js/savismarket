import { useNavigate, useParams } from 'react-router-dom';
import { allCategoriesData } from '../data';
import { useEffect, useRef } from 'react';
console.log('allCategoriesData:', allCategoriesData);
function ProductPreviewPage() {
  const { id } = useParams();
  let product = null;
  allCategoriesData.some((Category) => {
    product = Category.products.find((item) => item.id === parseInt(id));
    return product !== undefined;
  });

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

  if (!product) return <div className="p-40"> product not find</div>;

  return (
    <div
      ref={productRef}
      className="fixed right-[5%] top-[13dvh] z-40  mx-auto h-[75dvh] w-11/12 overflow-y-scroll rounded-lg bg-zinc-300 pb-7 duration-700"
    >
      <div className="flex h-28 flex-wrap items-center justify-center bg-zinc-700 text-center text-xl  uppercase text-gray-100 ">
        <div
          onClick={() => navigate(-1)}
          className=" absolute right-0 top-0 m-1 border border-zinc-600 px-3 text-4xl "
        >
          x
        </div>
        <p className="w-1/2 font-bold"> Access your account</p>
      </div>
      <div></div>
    </div>
  );
}

export default ProductPreviewPage;
