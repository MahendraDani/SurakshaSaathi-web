import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import statusCodes from "../../constants/statusCodes";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      if (!email || !password) {
        alert("All fields are mandatory!");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/agencies/login",
        {
          email: email,
          password: password,
        }
      );

      const key = response.status;
      switch (key) {
        case statusCodes.SUCCESS:
          const isTokenPresent = localStorage.getItem("token");
          console.log(response);
          if (!isTokenPresent) {
            const token = response.data.accessToken;
            localStorage.setItem("token", token);
            navigate("/home");
            return;
          }

          break;
        case statusCodes.FORBIDDEN:
          alert("User does not exists");
          navigate("/signup");
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full h-[calc(100vh-6rem)] sm:h-auto grid place-content-center">
        <form className="border-2 border-slate-100 rounded-sm p-8 px-16 flex flex-col justify-evenly items-start gap-6 text-lg shadow-sm text-slate-500">
          <div className="w-full flex justify-center items-center mb-4">
            <h1 className="text-3xl font-semibold text-slate-600">LOGIN</h1>
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
            <label>Password</label>
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
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
