import Navbar from "../../components/Navbar";
import SignupForm from "../../components/forms/Signup.form";

const Signup: React.FC = () => {
  return (
    <div className="px-4">
      <Navbar />
      <div className="mt-2">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
