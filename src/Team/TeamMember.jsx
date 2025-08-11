

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Card } from "antd";
// import {
//   GithubOutlined,
//   LinkedinOutlined,
//   FacebookOutlined,
//   MailOutlined,
//   PhoneOutlined,
// } from "@ant-design/icons";
// import { teamData } from "../Data/TeamData";
// import ProjectCard from "../projects/ProjectsCard"

// const TeamMember = () => {
//   const { name } = useParams();
//   const member = teamData.find(
//     (m) => m.name.toLowerCase().replace(" ", "-") === name
//   );

//   if (!member) {
//     return <div className="text-center py-12">Team member not found</div>;
//   }

//   return (
//     <div className="max-w-2xl md:max-w-6xl lg:max-w-7xl mt-36 mb-48 md:mb-12 lg:mb-12 mx-auto px-4 py-8">
//       <div className="container mx-auto px-4">
//         {/* Name, designation, and links */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             {member.name}
//           </h1>
//           <p className="text-xl text-indigo-600 mb-6">{member.designation}</p>
//           <div className="flex space-x-6 items-center justify-center">
//             {member.gmail && (
//               <a
//                 href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.gmail}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MailOutlined className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
//               </a>
//             )}
//             {member.phone && (
//               <a
//                 href={`tel:${member.phone}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <PhoneOutlined className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
//               </a>
//             )}
//             {member.github && (
//               <a href={member.github} target="_blank" rel="noopener noreferrer">
//                 <GithubOutlined className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
//               </a>
//             )}
//             {member.linkedin && (
//               <a
//                 href={member.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <LinkedinOutlined className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
//               </a>
//             )}
//             {member.facebook && (
//               <a
//                 href={member.facebook}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FacebookOutlined className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Photos and about me */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
//           {/* About me */}
//           <div className="space-y-4 text-center md:text-left order-2 md:order-1">
//             <h2 className="text-3xl font-bold text-indigo-600">Who Am I</h2>
//             <p className="text-lg leading-relaxed text-justify text-gray-600">
//               {member.about}
//             </p>
//           </div>

//           {/* Image */}
//           <div className="flex justify-center order-1 md:order-2">
//             <img
//               src={member.image500}
//               alt={member.name}
//               className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[350px] object-cover rounded-xl shadow-lg border border-indigo-100"
//             />
//           </div>
//         </div>

//         {/* Education, Skills, Experience, Awards, and Projects */}
//         <div className="grid grid-cols-1 gap-6">
//           {/* Education */}
//           {member.education && (
//             <Card
//               title={
//                 <span className="text-indigo-600 text-xl font-semibold">
//                   Education
//                 </span>
//               }
//               className="shadow-lg border-t-4 border-indigo-600 rounded-xl"
//             >
//               <p className="text-lg font-semibold text-gray-800">
//                 {member.education.degree}
//               </p>
//               <p className="text-gray-600">{member.education.institution}</p>
//               <p className="text-gray-500">{member.education.year}</p>
//             </Card>
//           )}

//           {/* Skills */}
//           {member.skills && member.skills.length > 0 && (
//             <Card
//               title={
//                 <span className="text-indigo-600 text-xl font-semibold">
//                   Skills
//                 </span>
//               }
//               className="shadow-lg border-t-4 border-indigo-600 rounded-xl"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                 {member.skills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-50 p-4 rounded-lg shadow-sm"
//                   >
//                     <p className="text-lg font-semibold text-gray-800">
//                       {skill.category}
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                       {skill.technologies.map((tech, techIndex) => (
//                         <li key={techIndex} className="text-gray-600">
//                           {tech}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           )}

//           {/* Experience */}
//           {member.experience && member.experience.length > 0 && (
//             <Card
//               title={
//                 <span className="text-indigo-600 text-xl font-semibold">
//                   Experience
//                 </span>
//               }
//               className="shadow-lg border-t-4 border-indigo-600 rounded-xl"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                 {member.experience.map((exp, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-50 p-4 rounded-lg shadow-sm"
//                   >
//                     <p className="text-lg font-semibold text-gray-800">
//                       {exp.role}
//                     </p>
//                     <p className="text-gray-600">{exp.company}</p>
//                     <p className="text-gray-500">{exp.duration}</p>
//                     <p className="text-gray-600 mt-2">{exp.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           )}

//           {/* Awards and Certifications */}
//           {member.awardsAndCertifications &&
//             member.awardsAndCertifications.length > 0 && (
//               <Card
//                 title={
//                   <span className="text-indigo-600 text-xl font-semibold">
//                     Awards & Certifications
//                   </span>
//                 }
//                 className="shadow-lg border-t-4 border-indigo-600 rounded-xl"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                   {member.awardsAndCertifications.map((award, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 p-4 rounded-lg shadow-sm"
//                     >
//                       <p className="text-lg font-semibold text-gray-800">
//                         {award.title}
//                       </p>
//                       <p className="text-gray-600">{award.issuer}</p>
//                       <p className="text-gray-500">{award.year}</p>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             )}

//           {/* Projects */}
//           {member.projects && member.projects.length > 0 && (
//             <Card
//               title={
//                 <span className="text-indigo-600 text-xl font-semibold">
//                   Projects
//                 </span>
//               }
//               className="shadow-lg border-t-4 border-indigo-600 rounded-xl"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {member.projects.map((project, index) => (
                
//                   <ProjectCard key={index} {...project} />
                
//               ))}
//               </div>
//             </Card>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMember;



import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { teamData } from "../Data/TeamData";
import ProjectCard from "../projects/ProjectsCard";

const TeamMember = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { name } = useParams();
  const member = teamData.find(
    (m) => m.name.toLowerCase().replace(" ", "-") === name
  );

  if (!member) {
    return (
      <div className="text-center py-12 text-gray-600 font-inter">
        Team member not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-2xl md:max-w-6xl lg:max-w-7xl mt-32 mb-48 md:mb-12 lg:mb-12 mx-auto px-4 py-16 md:py-8 lg:py-8">
        {/* Name, designation, and links */}
        <div
          className="text-center mb-16"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {member.name}
          </h1>
          <p className="text-xl text-indigo-500 mb-6 font-medium">
            {member.designation}
          </p>
          <div className="flex space-x-6 items-center justify-center">
            {member.gmail && (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.gmail}`}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <MailOutlined className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors duration-300" />
              </a>
            )}
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                <PhoneOutlined className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors duration-300" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up-right"
                data-aos-delay="300"
              >
                <GithubOutlined className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors duration-300" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <LinkedinOutlined className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors duration-300" />
              </a>
            )}
            {member.facebook && (
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FacebookOutlined className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>

        {/* Photos and about me */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {/* About me */}
          <div className="space-y-4 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold text-indigo-500">Who Am I</h2>
            <p className="text-lg leading-relaxed text-justify text-gray-600">
              {member.about}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={member.image500}
              alt={member.name}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-[300px] object-cover rounded-2xl shadow-xl border border-indigo-100 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-down"
              data-aos-delay="300"
            />
          </div>
        </div>

        {/* Education, Skills, Experience, Awards, and Projects */}
        <div className="grid grid-cols-1 gap-8">
          {/* Education */}
          {member.education && (
            <Card
              title={
                <span className="text-indigo-500 text-xl font-semibold">
                  Education
                </span>
              }
              className="shadow-xl border-t-4 border-indigo-500 rounded-2xl bg-white"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <p className="text-lg font-semibold text-gray-800">
                {member.education.degree}
              </p>
              <p className="text-gray-600">{member.education.institution}</p>
              <p className="text-gray-500">{member.education.year}</p>
            </Card>
          )}

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <Card
              title={
                <span className="text-indigo-500 text-xl font-semibold">
                  Skills
                </span>
              }
              className="shadow-xl border-t-4 border-indigo-500 rounded-2xl bg-white"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {member.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="text-lg font-semibold text-gray-800">
                      {skill.category}
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="text-gray-600">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Experience */}
          {member.experience && member.experience.length > 0 && (
            <Card
              title={
                <span className="text-indigo-500 text-xl font-semibold">
                  Experience
                </span>
              }
              className="shadow-xl border-t-4 border-indigo-500 rounded-2xl bg-white"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {member.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="text-lg font-semibold text-gray-800">
                      {exp.role}
                    </p>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500">{exp.duration}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Awards and Certifications */}
          {member.awardsAndCertifications &&
            member.awardsAndCertifications.length > 0 && (
              <Card
                title={
                  <span className="text-indigo-500 text-xl font-semibold">
                    Awards & Certifications
                  </span>
                }
                className="shadow-xl border-t-4 border-indigo-500 rounded-2xl bg-white"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {member.awardsAndCertifications.map((award, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <p className="text-lg font-semibold text-gray-800">
                        {award.title}
                      </p>
                      <p className="text-gray-600">{award.issuer}</p>
                      <p className="text-gray-500">{award.year}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

          {/* Projects */}
          {member.projects && member.projects.length > 0 && (
            <Card
              title={
                <span className="text-indigo-500 text-xl font-semibold">
                  Projects
                </span>
              }
              className="shadow-xl border-t-4 border-indigo-500 rounded-2xl bg-white"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {member.projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;