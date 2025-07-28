import { Button, Input, Upload, message } from "antd";
import { UploadOutlined, CalendarOutlined } from "@ant-design/icons";
import React from "react";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    message.success("Message sent!");
  };

  return (
    <div className=" rounded-md w-[85%] mx-auto bg-gradient-to-r from-neutral-800 to-blue-950 text-white px-10 py-16 flex flex-col lg:flex-row items-start justify-between gap-12 mt-12">
      
      {/* Left Section - Steps */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h1 className="text-6xl font-bold text-blue-500">Let’s start</h1>
        <div className="text-white space-y-3">
          <p className="text-sm uppercase tracking-wide">You are here</p>
          <div className="space-y-2 text-lg font-medium">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-white"></div>
              <span>1 Share your idea</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-white"></div>
              <span>2 Discuss it with our expert</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-white"></div>
              <span>3 Get an estimation of a project</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-white"></div>
              <span>4 Start the project</span>
            </div>
          </div>
        </div>
        <div className="pt-8 text-lg">
          <p>If you have any questions, email us</p>
          <p className="text-red-400 font-semibold">growthio796@gmail.com</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">My Name*</label>
            <Input
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email Address*</label>
            <Input
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message*</label>
            <Input.TextArea
              name="message"
              rows={4}
              placeholder="Describe your idea"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent text-white"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-snug">
          Please be informed that when you click the Send button Sumatosoft will
          process your personal data in accordance with our{" "}
          <span className="text-red-400">Privacy notice</span> for the purpose
          of providing you with appropriate information. This site is protected
          by reCAPTCHA and the Google{" "}
          <span className="text-red-400">Privacy Policy</span> and{" "}
          <span className="text-red-400">Terms of Service</span> apply.
        </p>

        {/* <div>
          <Upload>
            <Button icon={<UploadOutlined />}>Attach file</Button>
          </Upload>
        </div> */}

        <Button
          type="primary"
          className="bg-[#f8495a] px-10 py-2 rounded-md"
          onClick={handleSend}
        >
          Send
        </Button>

        {/* Account Manager Info */}
      
      </div>
    </div>
  );
};

export default ContactForm;
