import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Login from "./Pages/Login/Login";
import Appoinment from "./Pages/Appoinment/Appoinment";
import SignUp from "./Pages/Login/SignUp";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route path="/Appoinment" element={<Appoinment></Appoinment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
