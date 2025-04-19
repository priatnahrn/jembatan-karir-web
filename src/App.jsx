// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PilihAkun from "./pages/PilihAkun";
import RegisterDisabilitas from "./pages/disabilitas/Register";
import RegisterPerusahaan from "./pages/perusahaan/Register";
import Login from "./pages/Login";
import ProfilDisabilitas from "./pages/disabilitas/ProfilDisabilitas";
import DashboardFreelancer from "./pages/freealancer/DashboardFreelancer";

import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pilih-akun" element={<PilihAkun />} />
        <Route path="/disabilitas/register" element={<RegisterDisabilitas />} />

        <Route path="/perusahaan/register" element={<RegisterPerusahaan />} />

        <Route path="/login" element={<Login />} />

        <Route path="/disabilitas/profil" element={<ProfilDisabilitas />} />

        <Route path="/dashboard-freelancer" element={<DashboardFreelancer />} />


        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
