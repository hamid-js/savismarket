import { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';

function useLists(newProduct) {
  const { wishlist, setWishlist, setCompare, compare } =
    useContext(PostContext);
    const isInWishlist = wishlist.some((item) => item.id === newProduct.id);
    const isInCompare = compare.some((item) => item.id === newProduct.id);

  function addToWishlistHandler() {
    if (isInWishlist) {
      setWishlist((prev) => prev.filter((item) => item.id !== newProduct.id));
    } else {
      setWishlist((pre) => [...pre, newProduct]);
    }
  }

  function addToCompareHandler() {
    if (isInCompare) {
      setCompare((prev) => prev.filter((item) => item.id !== newProduct.id));
    } else if (compare.length >= 2) {
      alert('maximum 2 item');
    } else {
      setCompare((pre) => [...pre, newProduct]);
    }
  }

  return{addToWishlistHandler ,addToCompareHandler , isInCompare , isInWishlist }
}

export default useLists;
