import { useEffect } from "react";

const useClickOutside = (targetRef , callback ) => {


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (targetRef.current && !targetRef.current.contains(event.target)) {
            callback()
          }
        };
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [targetRef ,callback]);

    

      return callback 
};

export default useClickOutside;
