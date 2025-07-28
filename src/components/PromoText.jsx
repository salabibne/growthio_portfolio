// const PromoText = () => {
//   return (
//     <div className="text-center px-12 py-20 mb-8   text-black ">
//       <h1
//         className="text-5xl font-bold text-purple-800"
      
//       >
//         Unlock Your Business Potential
//       </h1>
//     </div>
//   );
// };

// export default PromoText;

import { Typewriter } from "react-simple-typewriter";

const PromoText = () => {
  return (
    <div className=" text-center px-12 py-20 mb-8 mt-4">
      <h1 className="text-7xl font-bold text-purple-800">
        <Typewriter
          words={[
            "Unlock Your Business Potential",
            "Unlock Your Business Potential",
            "Unlock Your Business Potential",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default PromoText;
