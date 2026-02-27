import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/home";
import AboutPage from "./routes/about";
import Services from "./routes/services";
import Career from "./routes/career";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Career />} />
    </Routes>
  );
};

export default App;
