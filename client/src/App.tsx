import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/agencies/Signup";
import TempHome from "./pages/TempHome";
import Login from "./pages/agencies/Login";
import RegisterDetails from "./pages/agencies/RegisterDetails";
import Secure from "./pages/agencies/Secure";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/details" element={<RegisterDetails />} />
          <Route path="/secure" element={<Secure />} />
          <Route path="/home" element={<TempHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
