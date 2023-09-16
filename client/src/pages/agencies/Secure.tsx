import NavbarLogin from "../../components/NavbarLogin";
import SecureForm from "../../components/forms/Secure.form";

const Secure = () => {
  return (
    <>
      <NavbarLogin />
      <div className="mt-8 md:mt-20">
        <SecureForm />
      </div>
    </>
  );
};

export default Secure;
