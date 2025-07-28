// import Featured_1 from "./Featured_1";
// import Featured_2 from "./Featured_2";
// import Featured_3 from "./Featured_3";
// import Featured_4 from "./Featured_4";
// import Featured_5 from "./Featured_5";

// const Featured = () => {
//   return (
//     <div className="min-h-screen  gap-10 flex flex-col gap-y-4 px-20 ">
//       <div className="ml-auto w-[70%] ">
//         <Featured_1 />
//       </div>
//       <div className="mr-auto w-[70%]">
//         <Featured_2 />
//       </div>
//       <div className="ml-auto w-[70%]">
//         <Featured_3 />
//       </div>
//       <div className="mr-auto w-[70%]">
//         <Featured_4 />
//       </div>
//       <div className="ml-auto w-[70%]">
//         <Featured_5 />
//       </div>
     
//     </div>
//   );
// };

// export default Featured;

import Featured_1 from "./Featured_1";
import Featured_2 from "./Featured_2";
import Featured_3 from "./Featured_3";
import Featured_4 from "./Featured_4";
import Featured_5 from "./Featured_5";
const Featured = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-10 px-4 md:px-10 lg:px-20 py-12">
      <div className="md:ml-auto md:w-[70%] w-full ">
        <Featured_1 />
      </div>
      <div className="md:mr-auto md:w-[70%] w-full">
        <Featured_2 />
      </div>
      <div className="md:ml-auto md:w-[70%] w-full">
        <Featured_3 />
      </div>
      <div className="md:mr-auto md:w-[70%] w-full">
        <Featured_4 />
      </div>
      <div className="md:ml-auto md:w-[70%] w-full">
        <Featured_5 />
      </div>
    </div>
  );
};

export default Featured;
