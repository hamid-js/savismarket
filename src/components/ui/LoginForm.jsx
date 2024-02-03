import Button from './Button';

function LoginForm({
  firstInput = 'Username or email address',
  btnText = 'log in',
  title = 'login',
  secondInput,
  thirdInput,
  addText,
  remember,
}) {
  return (
    <form className="m-5   text-zinc-900 ">
      <p className="my-5 mt-12 text-2xl font-bold">{title}</p>
      <label>
        {firstInput} <span className="m-1 text-red-500">*</span>
        <input
          className=" mb-3 mt-1 block h-10 w-4/5 rounded-full bg-zinc-100 px-3 outline-none"
          type="text"
        />
      </label>
      {secondInput && (
        <label>
          {secondInput}
          <span className="m-1 text-red-500">*</span>
          <input
            className="mb-3 mt-1 block h-10 w-4/5 rounded-full bg-zinc-100 px-3 outline-none"
            type="text"
          />
        </label>
      )}
      {thirdInput && (
        <label>
          {thirdInput}
          <span className="m-1 text-red-500">*</span>
          <input
            className="mb-3 mt-1 block h-10 w-4/5 rounded-full bg-zinc-100 px-3 outline-none"
            type="text"
          />
        </label>
      )}
      {remember && (
        <label>
          Remember me
          <input className="m-2  h-4 w-4" type="checkbox" name="remember me" />
        </label>
      )}

      <div className="text-white">
        <Button>{btnText}</Button>
      </div>
      {addText && <p>{addText}</p>}
    </form>
  );
}

export default LoginForm;
