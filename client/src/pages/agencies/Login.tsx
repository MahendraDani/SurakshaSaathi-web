import Navbar from "../../components/Navbar";
import LoginForm from "../../components/forms/Login.form";

const Login = () => {
  return (
    <div className="px-4">
      <Navbar />
      <div className="mt-2">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
