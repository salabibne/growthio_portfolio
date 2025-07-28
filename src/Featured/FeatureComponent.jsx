// import { Card } from "antd";

// const FeatureComponent = ({ image, headline, texts,reverse=false }) => {
//   return (
//     <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
//       <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
//         <div className={`flex   ${reverse ? "flex-row-reverse" : ""}  group transition-all duration-300 bg-gradient-to-r from-gray-800 to-yellow-800 hover:from-violet-700 hover:to-stone-800 rounded-md`}>
          
//           {/* Text Section */}
//           <div className="w-full md:w-[60%] p-6 md:p-8 transition-all duration-300">
//             <h3 className="text-lg md:text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
//               {headline}
//             </h3>
//             <p className="text-sm md:text-base text-gray-400 font-medium mt-2 group-hover:text-base transition-all duration-300">
//               {texts}
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-[40%] p-4 md:mt-8 flex justify-center items-center">
//             <img
//               src={image}
//               alt="service"
//               className="w-full md:w-[90%] object-cover transform rotate-6 rounded-lg"
//             />
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default FeatureComponent;


import { useState } from "react";
import { Card, Button } from "antd";

const FeatureComponent = ({ image, headline, texts,bg, reverse = false }) => {
  const [expanded, setExpanded] = useState(false);

  // Approx. 50 words preview
  const wordLimit = 50;
  const words = texts.split(" ");
  const previewText = words.slice(0, wordLimit).join(" ");
  const isTruncated = words.length > wordLimit;

  return (
    <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
      <Card className="w-full rounded-xl overflow-hidden bg-transparent border-none shadow-none">
        <div
          className={`flex flex-col-reverse ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } group transition-all duration-300 ${bg}  rounded-md`}
        >
          {/* Image Section */}
          <div className="w-full md:w-[40%] p-4 flex justify-center items-center">
            <img
              src={image}
              alt="service"
              className="w-full md:w-[90%] object-cover transform rotate-6 rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[60%] p-6 md:p-8 transition-all duration-300">
            <h3 className="text-lg md:text-xl group-hover:text-2xl font-semibold text-white transition-all duration-300">
              {headline}
            </h3>
            <p className="text-sm md:text-base text-gray-300 font-medium mt-2 transition-all duration-300">
              {expanded || !isTruncated ? texts : previewText + "..."}
            </p>

            {/* Load More Button */}
            {isTruncated && (
              <Button
                type="text"
                className="mt-2 text-white underline text-sm p-0 hover:text-yellow-300"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "Show Less" : "Load More"}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FeatureComponent;
