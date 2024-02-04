/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/ui/LoginForm';

function LoginPage() {
  const navigate = useNavigate();

  const loginRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        navigate('/');
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navigate]);

  const handleCloseMenu = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      navigate('/');
    }
  };
  return (
    <div
      ref={loginRef}
      className="fixed right-[5%] top-[14dvh] z-40  mx-auto h-[70dvh] w-11/12 overflow-y-scroll rounded-lg bg-zinc-300 pb-7 duration-700"
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
      <div>
        <LoginForm
          firstInput="Username or email address"
          secondInput="Password"
          btnText="log in"
          title="Login"
          addText="Lost your password?"
          remember
        />
        <LoginForm
          title="Register"
          firstInput="Username "
          secondInput="email address"
          thirdInput="Password"
          btnText="Register"
        />
      </div>
    </div>
  );
}

export default LoginPage;
