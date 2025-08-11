import Navbar from "./components/Navbar";
import ErrorPage from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./projects/Projects";
import ComingSoon from "./CommonSection/CommonSection";
import ContactUs from "./contactUs/Contact";
import TeamSection from "./Team/Team";
import TeamMember from "./Team/TeamMember";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      mirror: false,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/careers"
          element={<ComingSoon title="Careers Coming Soon" />}
        />
        <Route
          path="/story"
          element={<ComingSoon title="Our Story Coming Soon" />}
        />
        <Route
          path="/blog"
          element={<ComingSoon title="Blog Articles Coming Soon" />}
        />
        <Route
          path="/whitepapers"
          element={<ComingSoon title="Whitepapers Coming Soon" />}
        />
        <Route
          path="/tutorials"
          element={<ComingSoon title="Technical Tutorials Coming Soon" />}
        />
        <Route
          path="/webinars"
          element={<ComingSoon title="Webinars Coming Soon" />}
        />
        <Route
          path="/docs"
          element={<ComingSoon title="Product Documentation Coming Soon" />}
        />
        <Route
          path="/contact"
          element={<ContactUs/>}
        />

        <Route path="/team" element={<TeamSection/>} />
        <Route path="/team/:name" element={<TeamMember/>} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
