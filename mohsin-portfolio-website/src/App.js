import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/pages/Homepage/Homepage";
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import Contact from "./components/pages/Contact/Contact";
import Navbar from "./components/layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
