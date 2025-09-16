import React, { useEffect, useState } from "react";
import Home from "./Pages/Home.jsx";
import Form from "./Pages/Form.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
 const switchTheme = () => {
    setDarkMode((prev) => !prev);
  }; 
  
  return (
   <div>
     <Navbar darkMode={darkMode} switchTheme={switchTheme} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} switchTheme={switchTheme}/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
      <Footer />
   </div>
  );
};

export default App;
