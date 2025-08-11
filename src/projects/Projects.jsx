import ProjectsCard from "./ProjectsCard";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsSectionHeader from "./ProjectsSectionHeader";


const Projects = () => {
    return (
        <div className="flex flex-col max-w-2xl md:max-w-6xl lg:max-w-7xl  mt-36 mb-72 md:mb-12 lg:md-12 mx-auto gap-y-4 px-4 py-8 border-2 border-gray-700">
            <ProjectsSectionHeader />
            <ProjectsGrid></ProjectsGrid>
        </div>
    );
};

export default Projects;