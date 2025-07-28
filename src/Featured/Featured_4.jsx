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
import img_f_4 from "../assets/4.jpg";

// const Featured_4 = () => {
//   return (
//     <div className="" data-aos="zoom-in-right"  data-aos-anchor-placement="top-center">
//     <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
//       <div className="flex flex-row-reverse group transition-all duration-300 bg-gradient-to-r from-gray-800 to-yellow-800 hover:from-violet-700 hover:to-stone-800rounded-md">
//         {/* Text Section - 60% */}
//         <div className="w-[60%] p-8 transition-all duration-300">
//           <h3 className="text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
//             Simplify online bookings streamline scheduling workflows and enhance
//             customer experience effortlessly
//           </h3>
//           <p className="text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
//             Transform how you manage appointments with our all-in-one Online
//             Booking & Scheduling Platform. Designed for service-based
//             businesses, this intuitive system enables customers to book in
//             real-time, receive automated reminders, and manage reschedules — all
//             from any device. From salons and clinics to consultants and fitness
//             studios, our platform reduces no-shows, optimizes staff
//             availability, and integrates seamlessly with your calendar and
//             payment systems. With customizable booking rules, smart availability
//             settings, and branded interfaces, you get full control over your
//             scheduling while delivering a frictionless experience to your
//             clients.
//           </p>
//         </div>

//         {/* Image Section - 40% */}
//         <div className="w-[40%] mt-8">
//           <img
//             src={img_f_4}
//             alt="service"
//             className="h-full object-cover transform rotate-6 rounded-lg"
//           />
//         </div>
//       </div>
//     </Card>
//         </div>
//   );
// };

import React from "react";
import FeatureComponent from "./FeatureComponent";
const Featured_4 = () => {
  return (
    <FeatureComponent
      image={img_f_4}
      headline={` Simplify online bookings streamline scheduling workflows and enhance
            customer experience effortlessly`}
      texts={`Transform how you manage appointments with our all-in-one Online
           Booking & Scheduling Platform. Designed for service-based
             businesses, this intuitive system enables customers to book in
             real-time, receive automated reminders, and manage reschedules — all
             from any device. From salons and clinics to consultants and fitness
         studios, our platform reduces no-shows, optimizes staff
             availability, and integrates seamlessly with your calendar and
             payment systems. With customizable booking rules, smart availability
             settings, and branded interfaces, you get full control over your
             scheduling while delivering a frictionless experience to your
             clients.`}
      reverse={true}
      bg={`bg-gradient-to-r from-gray-800 to-yellow-800 hover:from-violet-700 hover:to-stone-800`}
    />
  );
};

export default Featured_4;
