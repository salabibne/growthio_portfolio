import React from "react";
import { Mail, Linkedin, Facebook } from "lucide-react";
import img from "../assets/tasir_c1.jpg"; // Adjust as needed

const ContactUs = () => {
  const gmails = [
    "growthio796@gmail.com",
    "salabyaham@gmail.com",
    "tasirulhasan2649@gmail.com",
    "sohrab.hossain853@gmail.com",
    "md.sahin.siraj@g.bracu.ac.bd"
  ];

  const linkedIns = [
    { name: "GrowthIO LinkedIn Page", url: "https://www.linkedin.com/company/105683486" },
    { name: "Salab Ibne Awal Eam", url: "https://www.linkedin.com/in/salab-ibne-awal-eam/" },
    { name: "Sohrab Hossain", url: "https://www.linkedin.com/in/sohrab-hossain-04b7551a0/" },
    { name: "Md Sahin Siraj", url: "https://www.linkedin.com/in/mdsahinsiraj/" },
    { name: "S.M Tasirul Hasan", url: "https://www.linkedin.com/in/s-m-tasirul-hasan-b2889b247/" },
  ];

  const facebooks = [
    { name: "GrowthIO Facebook Page", url: "https://www.facebook.com/profile.php?id=61568963341630" },
    { name: "Salab Ibne Awal", url: "https://www.facebook.com/salab.yam" },
    { name: "Sohrab Hossain", url: "https://www.facebook.com/sohrab.hossain.3139" },
    { name: "Md Sahin Siraj", url: "https://www.facebook.com/sahin.siraj.1122" },
    { name: "S.M Tasirul Hasan", url: "https://www.facebook.com/tasirul.hasan.656331" },
  ];

  return (
    <div className="max-w-2xl md:max-w-6xl lg:max-w-7xl  mt-36 mb-72 md:mb-12 lg:mb-12 mx-auto  px-2 md:px-4 py-8">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Let's Connect with <span className="text-indigo-600">GrowthIO</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We're passionate about building extraordinary partnerships. Reach out
          to our team via email or follow us on social media to start the
          conversation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Team Member Highlight */}
        <div className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 overflow-hidden transition-all duration-300 hover:shadow-2xl animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 opacity-50"></div>
          <div className="relative flex flex-col items-center">
            <img
              src={img}
              alt="S.M Tasirul Hasan"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              S.M Tasirul Hasan
            </h3>
            <p className="text-indigo-600 font-medium mt-1 text-sm sm:text-base md:text-lg">
              Head of Marketing & Client Relations
            </p>
            <div className="flex justify-center space-x-6 sm:space-x-8 mt-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tasirulhasan2649@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-red-500 transform hover:-translate-y-1 transition-all duration-200"
                aria-label="Email S.M Tasirul Hasan"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/s-m-tasirul-hasan-b2889b247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-200"
                aria-label="S.M Tasirul Hasan LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.facebook.com/tasirul.hasan.656331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transform hover:-translate-y-1 transition-all duration-200"
                aria-label="S.M Tasirul Hasan Facebook"
              >
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Email and Social Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in">
          {/* Email Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 mr-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Drop Us a Line
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {gmails.map((email, idx) => (
                <a
                  key={idx}
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200 text-sm sm:text-base"
                >
                  <span className="text-gray-700 font-medium truncate">
                    {email}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Follow Our Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* LinkedIn */}
              <div>
                <div className="flex items-center mb-4">
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    LinkedIn
                  </span>
                </div>
                <div className="space-y-3">
                  {linkedIns.map((person, idx) => (
                    <a
                      key={idx}
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 text-sm sm:text-base"
                    >
                      <span className="text-gray-700 font-medium truncate">
                        {person.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Facebook */}
              <div>
                <div className="flex items-center mb-4">
                  <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 mr-3" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    Facebook
                  </span>
                </div>
                <div className="space-y-3">
                  {facebooks.map((person, idx) => (
                    <a
                      key={idx}
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200 text-sm sm:text-base"
                    >
                      <span className="text-gray-700 font-medium truncate">
                        {person.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
