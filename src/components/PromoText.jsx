import { Typewriter } from "react-simple-typewriter";

const PromoText = () => {
  return (
    <div className="text-center px-4 sm:px-8  mb-8 mt-4">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-purple-800 leading-snug">
        <Typewriter
          words={[
            "Unlock Your Business Potential",
            "Unlock Your Business Potential",
            "Unlock Your Business Potential",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default PromoText;
