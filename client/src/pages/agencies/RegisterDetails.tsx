import { useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterDetails = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [helpineNumber1, setHelplineNumber1] = useState("");
  const [helpineNumber2, setHelplineNumber2] = useState("");

  const [areasOfExpertise, setAreasOfExpertise] = useState("");
  const [workforce, setWorkforce] = useState("");

  const [foodItem, setFoodItem] = useState("");
  const [foodItemQuantity, setFoodItemQuantity] = useState(0);

  const [vehicle, setVehicle] = useState("");
  const [vechicleQuantity, setVehicleQuantity] = useState(0);

  const handleRegistrationDetails = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      e.preventDefault();
      if (
        !address ||
        !city ||
        !pincode ||
        !state ||
        !country ||
        !helpineNumber1 ||
        !helpineNumber2! ||
        !areasOfExpertise ||
        !workforce ||
        !foodItem ||
        !foodItemQuantity ||
        !vehicle ||
        !vechicleQuantity
      ) {
        alert("All fields are required");
        return;
      }
      const agencyId = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/agencies/details/${agencyId}`,
        {
          location: {
            address: address,
            city: city,
            pincode: pincode,
            state: state,
            country: country,
            helplineNumbers: [helpineNumber1, helpineNumber2],
          },

          areasOfExpertise: [areasOfExpertise],
          resources: [
            {
              workforce: workforce,
              foodSupply: [
                {
                  foodItem: foodItem,
                  foodItemQuantity: foodItemQuantity,
                },
              ],
              vehicles: [
                {
                  vehicle: vehicle,
                  vehicleQuantity: vechicleQuantity,
                },
              ],
            },
          ],
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      navigate("/secure");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavbarLogin />
      <form className="flex flex-col gap-8 mt-12 border-2 p-1 py-4 sm:max-w-[85%] lg:max-w-[70%] mx-auto text-lg md:text-xl text-slate-500">
        {/* Geographic details */}
        <section className="flex flex-col gap-4">
          <h2 className="text-center text-4xl text-sky-500 font-semibold">
            Geographical Details
          </h2>
          <div className="md:w-[73%] mx-auto flex flex-col justify-between items-start gap-1">
            <label>Address</label>
            <input
              type="text"
              className="w-full border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
              placeholder="123 baker street"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex justify-around items-center gap-5">
            <div className="flex flex-col gap-1">
              <label>City</label>
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="Bhopal"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Pin code</label>
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="983322"
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-around items-center gap-5">
            <div className="flex flex-col gap-1">
              <label>State</label>
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="Madhya Pradesh"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Country</label>
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="India"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-around items-center gap-5">
            <div className="flex flex-col gap-1">
              <label>Helpline number 1</label>
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="+91 1800 532 532"
                onChange={(e) => {
                  setHelplineNumber1(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Helpline number 2</label>
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="+91 1800 532 533"
                onChange={(e) => setHelplineNumber2(e.target.value)}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-center text-4xl text-sky-500 font-semibold">
            Area of Expertise
          </h2>
          <div className="flex flex-col justify-center items-center gap-2">
            <label>For which natural disasters you provide help?</label>
            <div className="flex justify-center items-center gap-2">
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="Earthquake"
                onChange={(e) => {
                  setAreasOfExpertise(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <label>What is the total workforce of your</label>
            <div className="flex justify-center items-center gap-2">
              <input
                type="text"
                className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                placeholder="1000"
                onChange={(e) => setWorkforce(e.target.value)}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-center text-4xl text-sky-500 font-semibold">
            Resources
          </h2>
          <div>
            <h3 className="text-[1.1rem] text-center text-sky-300 text-2xl">
              Food Resources
            </h3>
            <div className="flex justify-around items-center">
              <div className="flex flex-col gap-1">
                <label>Food Item</label>
                <input
                  type="text"
                  className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                  placeholder="Apple"
                  onChange={(e) => setFoodItem(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Quantity</label>
                <input
                  type="text"
                  className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                  placeholder="100"
                  onChange={(e) =>
                    setFoodItemQuantity(parseInt(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[1.1rem] text-center text-sky-300 text-2xl">
              Vehicles
            </h3>
            <div className="flex justify-around items-center">
              <div className="flex flex-col gap-1">
                <label>Vehicle</label>
                <input
                  type="text"
                  className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                  placeholder="Oranges"
                  onChange={(e) => setVehicle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Quantity</label>
                <input
                  type="text"
                  className="border-2 border-slate-100 focus:outline-none focus:border-sky-400 p-1 placeholder:text-[1rem]  placeholder:text-slate-300"
                  placeholder="50"
                  onChange={(e) => {
                    setVehicleQuantity(parseInt(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <button
            className="border-2 border-sky-400 px-4 pb-1 rounded-sm text-sky-400 hover:bg-sky-400 duration-200 ease-in hover:text-white"
            onClick={handleRegistrationDetails}
          >
            Submit
          </button>
        </section>
      </form>
    </>
  );
};

export default RegisterDetails;
