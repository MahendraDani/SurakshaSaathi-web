import { useState } from "react";
import CenterContianer from "../../layout/Center.container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SecureForm = () => {
  const [createPin, setCreatePin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const navigate = useNavigate();
  const hanldePinSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      if (createPin !== confirmPin) {
        alert("Incorrect Confirm or Create Pin");
        return;
      }
      const token = localStorage.getItem("token");
      const agencyId = localStorage.getItem("id");
      const response = await axios.post(
        "http://localhost:3000/api/agency/secure",
        {
          pincode: confirmPin,
        },
        {
          headers: {
            authorization: token,
            id: agencyId,
          },
        }
      );
      console.log(response);
      navigate("/home");
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CenterContianer>
        <section className="flex flex-col gap-4 justify-center items-center">
          <div className="text-slate-500 text-center flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Why should you secure your account with{" "}
              <span className="text-sky-400 font-bold">Pin</span>?
            </h2>
            <p className="text-lg md:text-xl">
              We secure all your data with a{" "}
              <span className="text-sky-300 font-bold">
                triple layer security
              </span>
              , so that you don't have to worry about your valuable data!
            </p>
          </div>
          <div>
            <form
              className="md:mt-12 border-2 rounded-sm p-12 flex flex-col justify-center items-center 
            "
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl">
                  Create Secure{" "}
                  <span className="text-sky-400 font-bold">Pin</span>
                </h2>
                <div className="flex flex-col gap-1">
                  <label>Create Pin</label>
                  <input
                    type="password"
                    className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                    placeholder="******"
                    onChange={(e) => {
                      setCreatePin(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label>Confirm Pin</label>
                  <input
                    type="password"
                    className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                    placeholder="******"
                    onChange={(e) => {
                      setConfirmPin(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="border-2 border-slate-500 px-4 rounded-sm text-slate-500-400 hover:bg-slate-500 hover:text-white ease-in duration-200"
                    onClick={hanldePinSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </CenterContianer>
    </>
  );
};

export default SecureForm;
