/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/ui/LoginForm';
import useClickOutside from '../hooks/useClickOutside';

function LoginPage() {
  const navigate = useNavigate();

  const loginRef = useRef(null);
  useClickOutside(loginRef, () => navigate('/'));

  // const handleCloseMenu = (e) => {
  //   if (e.target.tagName.toLowerCase() === 'a') {
  //     navigate('/');
  //   }
  // };
  return (
    <div
      ref={loginRef}
      className="fixed right-[5%] top-[13dvh] z-40  mx-auto h-[75dvh] w-11/12 overflow-y-scroll rounded-lg bg-[url(/images/bg/bg3.jpg)] bg-cover pb-7 duration-700"
    >
      <div className="flex h-28 flex-wrap items-center justify-center bg-[url(/images/bg/bg9.jpg)] bg-cover bg-center  text-center text-xl  uppercase text-gray-100 ">
        <div
          onClick={() => navigate(-1)}
          className=" absolute right-0 top-0 m-1 border border-zinc-600 px-3 text-4xl "
        >
          x
        </div>
        <p className="w-3/5 text-xl font-bold"> Access your account</p>
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
