import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      if (!name || !email || !password) {
        alert("All fields are mandatory");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/agencies/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      const AgencyId = response.data.agency.id;
      const agencyName = response.data.agency.name;
      const accessToken = response.data.accessToken;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("id", AgencyId);
      localStorage.setItem("name", agencyName);
      navigate("/register/details");
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full h-[calc(100vh-6rem)] sm:h-auto grid place-content-center">
        <form className="border-2 border-slate-100 rounded-sm p-8 px-16 flex flex-col justify-evenly items-start gap-4 text-lg shadow-sm text-slate-500">
          <div className="w-full flex justify-center items-center mb-4">
            <h1 className="text-3xl font-semibold text-slate-600">REGISTER</h1>
          </div>
          <div className="flex flex-col justify-between items-start gap-1">
            <label>Name of the Agency</label>
            <input
              type="text"
              className="border-2 border-slate-100 focus:outline-none focus:border-purple-400 px-1 placeholder:text-[1rem] placeholder:text-slate-300"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col justify-between items-start gap-1">
            <label>Email address</label>
            <input
              type="text"
              className="border-2 border-slate-100 focus:outline-none focus:border-purple-400 px-1 placeholder:text-[1rem]  placeholder:text-slate-300"
              placeholder="Name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col justify-between items-start gap-1">
            <label>Create Password</label>
            <input
              type="password"
              className="border-2 border-slate-100 focus:outline-none focus:border-purple-400 px-1 placeholder:text-[1rem]  placeholder:text-slate-300"
              placeholder="*******"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-6 w-full flex justify-center items-center">
            <button
              className="border-2 min-w-[4rem] px-4 pb-[0.1rem] rounded-sm border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 duration-200 ease-in cursor-pointer text-[1rem]"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignupForm;
