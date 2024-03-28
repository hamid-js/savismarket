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
      className="fixed right-[5%] top-[10dvh] z-40  mx-auto h-[80dvh] w-11/12 overflow-y-scroll rounded-lg bg-[url(/images/bg/bg3.jpg)] bg-cover pb-7 duration-700 sm:right-[12%] sm:top-[5dvh]  sm:h-[90dvh] sm:w-9/12 lg:right-[20%] lg:top-[2dvh] lg:h-[95dvh] lg:w-7/12 xl:right-[27%] xl:w-5/12"
    >
      <div className="sticky top-0 flex h-28 sm:h-24 lg:h-20 flex-wrap items-center justify-center bg-[url(/images/bg/bg9.jpg)] bg-cover bg-center  text-center text-xl  uppercase text-gray-100 ">
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
          firstInput=" Email Address"
          secondInput="Password"
          btnText="log in"
          title="Login"
          addText="Lost your password?"
          checkbox=" Remember me"
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
