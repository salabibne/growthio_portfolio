const HeroSection = () => {
  return (
    <div
      className="
        min-h-[300px] sm:min-h-[300px] md:min-h-[700px] 
        mt-[120px] sm:mt-[100px] md:mt-[100px]
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        px-4 sm:px-8 md:px-16
      "
    >
      <div className="flex flex-col items-start justify-center h-full  sm:mt-2 md:mt-6 mt-6">
        <h1
          className="
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
            font-extrabold
            bg-gradient-to-r from-white via-purple-100 to-pink-100
            bg-clip-text text-transparent
            drop-shadow-md  md:mt-16 mt-16 mb-2
          "
        >
          A Legacy of
        </h1>
        <h1
          className="
            text-5xl sm:text-6xl md:text-7xl lg:text-9xl
            font-extrabold
            bg-gradient-to-r from-white via-purple-100 to-pink-100
            bg-clip-text text-transparent
            drop-shadow-md
          "
        >
          <span className="text-cyan-200">Engineering </span>Excellence
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
