import { Routes, Route } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Center from "../components/home/Center";
import Input from "../components/home/Input";
import Start from "../components/home/Start";
import End from "../components/home/End";
import Footer from "../components/home/Footer";

const HomePage = () => {
  return (
    <div className="text-white">
      
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-[#00001a] to-black"></div>

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px]
        bg-purple-600 opacity-30 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px]
        bg-blue-500 opacity-30 blur-[150px] rounded-full"></div>

        <div className="relative z-10">
          <Navbar />
          <Center />
          <Input />
        </div>
      </section>

      <section className="bg-[#050014] min-h-screen px-10 py-20">
        <Start />
        <End />
        <Footer />
      </section>
 
    </div>
  );
};

export default HomePage;