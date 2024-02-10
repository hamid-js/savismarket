import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import toast from 'react-hot-toast';

function useLists(newProduct) {
  const { wishlist, setWishlist, setCompare, compare } =
    useContext(PostContext);
    const isInWishlist = wishlist.some((item) => item.id === newProduct.id);
    const isInCompare = compare.some((item) => item.id === newProduct.id);

  function addToWishlistHandler(event) {
    event.stopPropagation()
    if (isInWishlist) {
      setWishlist((prev) => prev.filter((item) => item.id !== newProduct.id));
      toast.success('💔favorite Removed ')
      
    } else {
      setWishlist((pre) => [...pre, newProduct]);
      toast.success('❤️Added to favorites')
    }
  }

  function addToCompareHandler(event) {
    event.stopPropagation()
    if (isInCompare) {
      setCompare((prev) => prev.filter((item) => item.id !== newProduct.id));
      toast.success("🗑️Product Removed" )
    } else if (compare.length >= 2) {
      toast.error("Maximum 2 products")
    } else {
      setCompare((pre) => [...pre, newProduct]);
      toast.success("Added to Comparison")
    }
  }

  return{addToWishlistHandler ,addToCompareHandler , isInCompare , isInWishlist }
}

export default useLists;
