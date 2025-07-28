import { useState } from "react";
import { Card, Button } from "antd";

const FeatureComponent = ({ image, headline, texts, bg, reverse = false }) => {
  const [expanded, setExpanded] = useState(false);

  // Approx. 50 words preview
  const wordLimit = 50;
  const words = texts.split(" ");
  const previewText = words.slice(0, wordLimit).join(" ");
  const isTruncated = words.length > wordLimit;

  return (
    <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
      <Card className="w-full rounded-xl overflow-hidden bg-transparent  ">
        <div
          className={`flex ${
            reverse ? "flex-col md:flex-row-reverse" : "flex-col"
          } group transition-all duration-300 ${bg}  rounded-md`}
        >
          {/* Image Section */}
          <div className=" w-full md:w-[40%] p-4 flex justify-center items-center">
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
