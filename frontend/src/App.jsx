import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      {/* visible on all the pages- the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
