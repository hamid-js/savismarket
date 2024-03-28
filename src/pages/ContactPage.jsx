import LoginForm from '../components/ui/LoginForm';

function ContactPage() {
  return (
    <div className='bg-gradient-to-bl from-slate-900 via-slate-600 to-slate-900 py-20 '>
    <div className="border-2 my-20 bg-[url(/images/bg/bg4.jpg)] bg-cover h-[60dvh] mx-5 sm:right-[12%] sm:top-[5dvh] sm:mx-auto  sm:h-[70dvh] lg:sm:h-[85dvh] sm:w-9/12 lg:right-[20%] lg:top-[2dvh]  lg:w-7/12 xl:right-[27%] xl:w-5/12">
      <div>
        <LoginForm
          firstInput="Your Name"
          secondInput="email address"
          thirdInput="Your number"
          btnText="send"
          title="Contact Us"
          addText="We will contact you soon."
        />
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
