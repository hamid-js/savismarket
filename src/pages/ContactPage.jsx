import LoginForm from '../components/ui/LoginForm';

function ContactPage() {
  return (
    <div className="bg-[url(/images/bg/bg4.jpg)] bg-cover ">
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
  );
}

export default ContactPage;
