import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className=" h-svh flex flex-col items-center justify-center gap-5 text-lg">
      <p className='text-xl font-semibold tracking-widest text-gray-200'>Page Not Found 404</p>
     <div className='bg-black p-2 rounded-sm'><Link  to="/">back to Home</Link></div> 
    </div>
  );
}

export default PageNotFound;
