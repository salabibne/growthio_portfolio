// import { Card, Col, Row } from "antd";
// import img_f_1 from "../assets/1.jpg"; // Assuming you have an image at this path

// const Featured_1 = () => {
//   return (
//     <Card
//       className="w-[65%]  rounded-xl overflow-hidden  "
//       style={{ bg: "Transparent" }}
//     >
//       <div className="flex bg-gradient-to-r from-gray-800 to-yellow-800 rounded-md">
//         {/* Text Section - 60% */}
//         <div className="w-[60%] p-8">
//           <h3 className="text-xl font-semibold text-white">
//             Automate complex workflows to seamlessly integrate systems and
//             intelligently accelerate business growth
//           </h3>
//           <p className="text-gray-400 font-medium mt-2">
//             Streamline your entire business ecosystem with our Smart Business
//             Automation Suite — a future-ready platform built for intelligent
//             automation, seamless third-party integration, and high-performance
//             scalability. Eliminate silos, reduce operational friction, and
//             orchestrate complex processes across departments through intuitive
//             dashboards and AI-driven triggers. Whether you're optimizing sales,
//             inventory, HR, or customer engagement, our suite empowers you to
//             automate at scale while maintaining flexibility and control. With
//             deep insights, customizable modules, and real-time performance
//             tracking, you gain the tools to innovate faster and respond smarter
//             — giving your business the agility it needs in today’s fast-paced
//             digital landscape.
//           </p>
//         </div>

//         {/* Image Section - 40% */}
//         <div className="w-[40%] mt-8">
//           <img
//             src={img_f_1}
//             alt="service"
//             className="h-full object-cover transform rotate-6 rounded-lg "
//           />
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default Featured_1;

import { Card } from "antd";
import img_f_3 from "../assets/3.jpg";

// const Featured_3 = () => {
//   return (
//     <div className="" data-aos="zoom-in-left" data-aos-anchor-placement="bottom-bottom"> 
//     <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
//       <div className="flex  group transition-all duration-300 bg-gradient-to-r from-gray-800 to-green-700 hover:from-violet-800 hover:to-stone-800 rounded-md">
//         {/* Text Section - 60% */}
//         <div className="w-[60%] p-8 transition-all duration-300">
//           <h3 className="text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
//             Build custom mobile apps faster with intuitive drag-and-drop tools
//             and deploy across platforms effortlessly
//           </h3>
//           <p className="text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
//             Launch powerful mobile applications without writing complex code
//             using our Custom Mobile App Builder. Designed for startups,
//             enterprises, and agencies, this platform empowers teams to
//             prototype, build, and deploy apps with ease — using visual
//             components, pre-built templates, and real-time previews. Integrate
//             backend services, authentication, payments, and notifications
//             seamlessly through modular APIs. Whether you're targeting Android,
//             iOS, or both, our builder ensures cross-platform compatibility and
//             scalability from day one. Reduce development time, lower costs, and
//             bring your app ideas to life faster — all without compromising
//             performance or user experience.
//           </p>
//         </div>

//         {/* Image Section - 40% */}
//         <div className="w-[40%] mt-8">
//           <img
//             src={img_f_3}
//             alt="service"
//             className="h-full object-cover transform rotate-6 rounded-lg"
//           />
//         </div>
//       </div>
//     </Card>
//      </div>
//   );
// };

import React from "react";
import FeatureComponent from "./FeatureComponent";
const Featured_3 = () => {
  return(
    <FeatureComponent
      image={img_f_3}
      headline={`Build custom mobile apps faster with intuitive drag-and-drop tools
//             and deploy across platforms effortlessly`}
      texts={`Launch powerful mobile applications without writing complex code
//             using our Custom Mobile App Builder. Designed for startups,
//             enterprises, and agencies, this platform empowers teams to
//             prototype, build, and deploy apps with ease — using visual
//             components, pre-built templates, and real-time previews. Integrate
//             backend services, authentication, payments, and notifications
//             seamlessly through modular APIs. Whether you're targeting Android,
//             iOS, or both, our builder ensures cross-platform compatibility and
//             scalability from day one. Reduce development time, lower costs, and
//             bring your app ideas to life faster — all without compromising
//             performance or user experience.`}
reverse={true}
bg={`bg-gradient-to-r from-gray-800 to-green-700 hover:from-violet-800 hover:to-stone-800`}
    />
  )
};

export default Featured_3;



