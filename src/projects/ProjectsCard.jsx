import { useRef, useState } from "react";
import { Tag, Tooltip, Button, Modal, Carousel } from "antd";
import { GithubOutlined, LinkOutlined, EyeOutlined } from "@ant-design/icons";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ProjectCard = ({
  images = [],
  title,
  status,
  description,
  techStack,
  liveLink,
  githubLink,
}) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const carouselRef = useRef();

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-200">
        <div className="relative group">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-60 object-cover"
          />

          {/* Blur Overlay on Hover */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

          {/* Preview Button */}
          <button
            onClick={() => setPreviewVisible(true)}
            className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <EyeOutlined className="text-2xl mr-2" />
            Preview
          </button>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <Tag color={status === "Completed" ? "green" : "orange"}>
              {status}
            </Tag>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ name, icon }) => (
              <Tooltip title={name} key={name}>
                <img src={icon} alt={name} className="h-6 w-6" />
              </Tooltip>
            ))}
          </div>
          <div className="flex gap-4 pt-3">
            {liveLink && (
              <Button
                type="link"
                href={liveLink}
                icon={<LinkOutlined />}
                target="_blank"
              >
                Live
              </Button>
            )}
            {githubLink && (
              <Button
                type="link"
                href={githubLink}
                icon={<GithubOutlined />}
                target="_blank"
              >
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Preview Modal with Carousel */}
    
      <Modal
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={null}
        centered
        width="90vw"
        bodyStyle={{ padding: 0, backgroundColor: "black" }}
      >
        <div className="relative w-full h-[90vh]">
          {/* Left Button */}
          <button
            onClick={() => carouselRef.current.prev()}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 text-white hover:text-red-500 text-3xl"
          >
            <LeftOutlined />
          </button>

          {/* Right Button */}
          <button
            onClick={() => carouselRef.current.next()}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 text-white hover:text-red-500 text-3xl"
          >
            <RightOutlined />
          </button>

          {/* Carousel */}
          <Carousel ref={carouselRef} dots autoplay className="w-full h-full">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full bg-black"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="max-h-[90vh] object-contain mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
