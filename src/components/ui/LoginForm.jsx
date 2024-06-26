import Button from './Button';

function LoginForm({
  firstInput = 'Username or email address',
  btnText = 'log in',
  title = 'login',
  secondInput,
  thirdInput,
  addText,
  checkbox,
}) {
  return (
    <form className="p-5  font-semibold text-white c">
      <p className="my-5 mt-12 text-2xl font-bold">{title}</p>
      <label>
        {firstInput} <span className="m-1 text-red-500">*</span>
        <input
          className=" text-black mb-3 mt-1 block h-10 w-4/5 rounded-full bg-zinc-200 px-3 outline-none"
          type="text"
        />
      </label>
      {secondInput && (
        <label>
          {secondInput}
          <span className="m-1 text-red-500">*</span>
          <input
            className="mb-3 text-black   mt-1 block h-10 w-4/5 rounded-full bg-zinc-100 px-3 outline-none"
            type="text"
          />
        </label>
      )}
      {thirdInput && (
        <label>
          {thirdInput}
          <span className="m-1  text-red-500">*</span>
          <input
            className="mb-3 mt-1 text-black  block h-10 w-4/5 rounded-full bg-zinc-100 px-3 outline-none"
            type="text"
          />
        </label>
      )}
      {checkbox && (
        <label>
          {checkbox}
          <input className="m-2  h-4 w-4" type="checkbox" name="remember me" />
        </label>
      )}

      <div className="text-white w-2/3 max-w-32 my-5">
        <Button>{btnText}</Button>
      </div>
      {addText && <p className='mt-5 text-xl'>{addText}</p>}
    </form>
  );
} 



export default LoginForm;

