const HeroSection = () => {
  return (
    <div
      className="
        min-h-[500px] sm:min-h-[600px] md:min-h-[700px] 
        mt-[120px] sm:mt-[100px] md:mt-[100px]
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        px-4 sm:px-8 md:px-16
      "
    >
      <div className="flex flex-col items-start justify-center h-full ">
        <h1
          className="
            text-4xl sm:text-6xl md:text-7xl lg:text-9xl
            font-extrabold
            p-4 sm:p-6 md:p-8 lg:p-10
            bg-gradient-to-r from-white via-purple-100 to-pink-100
            bg-clip-text text-transparent
            drop-shadow-md
          "
        >
          A Legacy of
        </h1>
        <h1
          className="
            text-4xl sm:text-6xl md:text-7xl lg:text-9xl
            font-extrabold
            px-4 sm:px-6 md:px-8 lg:px-10
            pb-4 sm:pb-6 md:pb-8 lg:pb-10
            bg-gradient-to-r from-white via-purple-100 to-pink-100
            bg-clip-text text-transparent
            drop-shadow-md
          "
        >
          {/* <span className="text-cyan-200">Engineering </span>Excellence */}
          <span className="text-cyan-200">Engineering </span>Excellence
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
