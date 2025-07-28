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
import img_f_2 from "../assets/2.jpg";

const Featured_2 = () => {
  return (
    <div className="" data-aos="zoom-in-down"  data-aos-anchor-placement="center-bottom">
    <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
      <div className="flex flex-row-reverse group transition-all duration-300 bg-gradient-to-r from-violet-800 to-stone-800 hover:from-gray-800 hover:to-yellow-800 rounded-md">
        {/* Text Section - 60% */}
        <div className="w-[60%] p-8 transition-all duration-300">
          <h3 className="text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
            Automate employee attendance to streamline payroll processing and
            ensure accuracy at scale
          </h3>
          <p className="text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
            Modernize your HR operations with a smart solution that automates
            employee attendance tracking and payroll management in one unified
            system. Eliminate manual errors, save valuable admin hours, and
            ensure compliance with real-time reporting and intelligent
            rule-based calculations. Whether you're managing shift-based
            workforces or salaried teams, our automation suite adapts to your
            needs — syncing attendance data directly into payroll and ensuring
            timely, accurate payments every cycle. Gain full visibility, reduce
            overhead, and empower your HR team with technology that scales with
            your organization.
          </p>
        </div>

        {/* Image Section - 40% */}
        <div className="w-[40%] mt-8">
          <img
            src={img_f_2}
            alt="service"
            className="h-full object-cover transform rotate-6 rounded-lg"
          />
        </div>
      </div>
    </Card>
    </div>
  );
};

export default Featured_2;
