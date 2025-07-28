// import { Card } from "antd";
// import img_f_1 from "../assets/1.jpg";

// const Featured_1 = () => {
//   return (
//      <div className="" data-aos="zoom-in-up"  data-aos-anchor-placement="top-bottom">
//     <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
//       <div className="flex group transition-all duration-300 bg-gradient-to-r from-gray-800 to-yellow-800 hover:from-violet-700 hover:to-stone-800 rounded-md">
//         {/* Text Section - 60% */}
//         <div className="w-[60%] p-8 transition-all duration-300">
//           <h3 className="text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
//             Automate complex workflows to seamlessly integrate systems and
//             intelligently accelerate business growth
//           </h3>
//           <p className="text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
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
//             className="h-full object-cover transform rotate-6 rounded-lg"
//           />
//         </div>
//       </div>
//     </Card>
//     </div>
//   );
// };

// export default Featured_1;

import { Card } from "antd";
import img_f_1 from "../assets/1.jpg";

// const Featured_1 = () => {
//   return (
//     <div className="" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
//       <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
//         <div className="flex flex-col md:flex-row group transition-all duration-300 bg-gradient-to-r from-gray-800 to-yellow-800 hover:from-violet-700 hover:to-stone-800 rounded-md">
//           {/* Text Section */}
//           <div className="w-full md:w-[60%] p-6 md:p-8 transition-all duration-300">
//             <h3 className="text-lg md:text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
//               Automate complex workflows to seamlessly integrate systems and intelligently accelerate business growth
//             </h3>
//             <p className="text-sm md:text-base text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
//               Streamline your entire business ecosystem with our Smart Business Automation Suite — a future-ready platform built for intelligent automation, seamless third-party integration, and high-performance scalability. Eliminate silos, reduce operational friction, and orchestrate complex processes across departments through intuitive dashboards and AI-driven triggers. Whether you're optimizing sales, inventory, HR, or customer engagement, our suite empowers you to automate at scale while maintaining flexibility and control. With deep insights, customizable modules, and real-time performance tracking, you gain the tools to innovate faster and respond smarter — giving your business the agility it needs in today’s fast-paced digital landscape.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-[40%] p-4 md:mt-8 flex justify-center items-center">
//             <img
//               src={img_f_1}
//               alt="service"
//               className="w-full md:w-[90%] object-cover transform rotate-6 rounded-lg"
//             />
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Featured_1;

import React from "react";
import FeatureComponent from "./FeatureComponent";
const Featured_1 = () => {
  return (
    <FeatureComponent
      image={img_f_1}
      headline={` Automate complex workflows to seamlessly integrate systems and intelligently accelerate business growth`}
      texts={`Streamline your entire business ecosystem with our Smart Business Automation Suite — a future-ready platform built for intelligent automation, seamless third-party integration, and high-performance scalability. Eliminate silos, reduce operational friction, and orchestrate complex processes across departments through intuitive dashboards and AI-driven triggers. Whether you're optimizing sales, inventory, HR, or customer engagement, our suite empowers you to automate at scale while maintaining flexibility and control. With deep insights, customizable modules, and real-time performance tracking, you gain the tools to innovate faster and respond smarter — giving your business the agility it needs in today’s fast-paced digital landscape.`}
      reverse={true}
      bg={`bg-gradient-to-r from-gray-800 to-yellow-800 hover:from-violet-700 hover:to-stone-800`}
    />
  );
};

export default Featured_1;
