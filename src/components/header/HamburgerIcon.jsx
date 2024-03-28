import { useContext } from "react";
import { RiMenuFill } from "react-icons/ri"
import { PostContext } from "../../contexts/PostContext";

function HamburgerIcon() {
    const {setIsOpenMenu,setIsOpenCart } = useContext(PostContext)

    const handleMenuClick = (event) => {
        event.stopPropagation();
        setIsOpenMenu((prev) => !prev);
        setIsOpenCart(false);
      };
    return (
        <div onClick={handleMenuClick}>
        <RiMenuFill className='sm:text-4xl ml-3'  />
      </div>
    )
}

export default HamburgerIcon
