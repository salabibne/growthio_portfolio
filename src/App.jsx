import Navbar from "./components/Navbar";
import ErrorPage from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
       duration: 800,
    offset: 100,
    easing: 'ease-in-out',
    mirror: false,
    });
  }, []);

  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/testimonials" element={<Testimonials />} /> */}
       <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}


