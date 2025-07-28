import {
  FacebookFilled,
  LinkedinFilled,
  BehanceSquareFilled,
  MediumSquareFilled,
} from "@ant-design/icons";

import logo from "./assets/growthio_remove bg.png"; 
import { Link } from "react-router-dom";
// Adjust the path as necessary
const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white px-10 py-16 mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Headquarters Info */}
        <div className="lg:w-1/5">
          <div className="mb-4 bg-indigo-500 p-4 rounded-lg text-center">
            <img src={logo} alt="Logo" className="w-36 mb-4" /> {/* Replace with real logo */}
          </div>
          <p className="font-semibold">Headquarters:</p>
          <p className="text-sm text-gray-300">
            Rampura, Banasree, Dhaka, Bangladesh<br />
           
           
          </p>
          <div className="text-sm text-gray-300 mt-4 flex flex-col ">
            <p>+8801518308249</p> 
            <p>+8801402-233574</p>
            <p>+8801621839863</p>
            <p>+393927218901</p>
          </div>
          <p className="text-sm text-red-400 mt-4">growthio796@gmail.com</p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* Services */}
          <div>
            <p className="font-semibold mb-2">SERVICES</p>
            {[
              "Business analysis",
              "UI / UX design",
              "Web development",
              "App development",
              "Testing & QA services",
              "Enterprise software",
              "MVP development",
              "Super App development",
              "SaaS development",
              "IT staff augmentation",
            ].map((item) => (
              <p key={item} className="text-gray-300 hover:text-white cursor-pointer">{item}</p>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <p className="font-semibold mb-2">TECHNOLOGIES</p>
            {[
              "AI development",
              "Big Data",
              "Java",
              "Node.js",
              "Ruby on Rails",
              "React.js",
              "OpenAI",
              "Blockchain",
            ].map((item) => (
              <p key={item} className="text-gray-300 hover:text-white cursor-pointer">{item}</p>
            ))}
          </div>

          {/* Industries */}
          <div>
            <p className="font-semibold mb-2">INDUSTRIES</p>
            {[
              "IoT development",
              "IoT & Big Data development",
              "IoT consulting",
              "Healthcare",
              "AdTech",
              "EdTech",
              "Logistics",
              "Fintech",
              "eCommerce",
            ].map((item) => (
              <p key={item} className="text-gray-300 hover:text-white cursor-pointer">{item}</p>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold mb-2">COMPANY</p>
            {[
              "Case studies",
              "Testimonials",
              "About us",
              "FAQ",
              "Engagement models",
              "Development life cycle",
              "Pricing",
              "Whitepapers",
              "Blog",
              "Careers",
              "Referral program",
              "Imprint",
              "Contact us",
            ].map((item) => (
              <p key={item} className="text-gray-300 hover:text-white cursor-pointer">{item}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-gray-400">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Sitemap</a>
          <a href="#" className="hover:text-white">DMCA</a>
        </div>
        <div className="text-center lg:text-right">
          © 2025 growth.IO , All rights reserved. (R)
        </div>
        <div className="flex gap-4 text-white text-xl">
            <Link to="https://web.facebook.com/profile.php?id=61568963341630"><FacebookFilled className="hover:text-blue-500 cursor-pointer" /></Link>
          
        <Link to="https://www.linkedin.com/company/growth-io796/"><LinkedinFilled className="hover:text-blue-300 cursor-pointer" /></Link> 
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
