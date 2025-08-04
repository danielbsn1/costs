import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contato from "./Contato";
import Sobre from "./Sobre";
import Projects from "./Projects"; // Adicione esta linha se existir o componente
import "./App.css";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/newprojects" element={<Newprojects />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;