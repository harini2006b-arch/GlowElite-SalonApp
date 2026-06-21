import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExploreSalons from "./pages/ExploreSalons";
import SalonDetails from "./pages/SalonDetails";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAppointments from "./pages/MyAppointments";
import AIBeautyScan from "./pages/AIBeautyScan";
import Favourites from "./pages/Favourites";


function App() {
  return (
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/salons" element={<ExploreSalons />} />
  <Route path="/booking" element={<Booking />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/offers" element={<Offers />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/appointments" element={<MyAppointments />} />
  <Route path="/ai-beauty-scan" element={<AIBeautyScan />} />
  <Route path="/favourites" element={<Favourites />} />
  <Route path="/salon/:id" element={<SalonDetails />}/>

</Routes>
    </BrowserRouter>
  );
}

export default App;