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
import img_f_5 from "../assets/datasceince.jpg";

// const Featured_5 = () => {
//   return (
//     <div className="" data-aos="zoom-out-up" data-aos-anchor-placement="center-center">

//     <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
//       <div className="flex  group transition-all duration-300 bg-gradient-to-r from-gray-800 to-green-700 hover:from-violet-800 hover:to-stone-800 rounded-md">
//         {/* Text Section - 60% */}
//         <div className="w-[60%] p-8 transition-all duration-300">
//           <h3 className="text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
//             Collect data intelligently visualize insights in real time and drive
//             smarter business decisions
//           </h3>
//           <p className="text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
//             Unlock the power of your data with our Smart Data Analytics
//             Dashboard — a centralized platform for real-time data tracking,
//             visualization, and decision-making. Designed for modern teams, it
//             aggregates data from multiple sources, applies intelligent
//             analytics, and presents actionable insights through customizable
//             dashboards and interactive charts. Whether you're monitoring sales
//             performance, user behavior, or operational metrics, the system helps
//             you identify trends, spot anomalies, and act fast. With role-based
//             access, drill-down reports, and AI-driven recommendations, you gain
//             full visibility into your business and the tools to make data-backed
//             decisions with confidence.
//           </p>
//         </div>

//         {/* Image Section - 40% */}
//         <div className="w-[40%] mt-8">
//           <img
//             src={img_f_5}
//             alt="service"
//             className="h-full object-cover transform rotate-6 rounded-lg"
//           />
//         </div>
//       </div>
//     </Card>
            
//     </div>
//   );
// };

// export default Featured_5;

import React from "react";
import FeatureComponent from "./FeatureComponent";
const Featured_5 = () => {
  return(
    <FeatureComponent
      image={img_f_5}
      headline={` Collect data intelligently visualize insights in real time and drive
            smarter business decisions`}
      texts={` Unlock the power of your data with our Smart Data Analytics
             Dashboard — a centralized platform for real-time data tracking,
            visualization, and decision-making. Designed for modern teams, it
            aggregates data from multiple sources, applies intelligent
            analytics, and presents actionable insights through customizable
            dashboards and interactive charts. Whether you're monitoring sales
            performance, user behavior, or operational metrics, the system helps
            you identify trends, spot anomalies, and act fast. With role-based
            access, drill-down reports, and AI-driven recommendations, you gain
            full visibility into your business and the tools to make data-backed
          decisions with confidence.`}
reverse={true}
bg={`bg-gradient-to-r from-gray-800 to-green-700 hover:from-violet-800 hover:to-stone-800`}
    />
  )
};

export default Featured_5;


