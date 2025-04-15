import React from "react";

const ProjectCard = (projectName) => {
    return (
        <div className="mx-10">
            <div className="hidden md:block my-6 text-xl font-semibold text-center w-96 text-[#2E2E2E]">
                {projectName}
            </div>
            <div className="w-96 border-2 border-[#4A90E2] rounded-lg h-60 shadow-lg">
                PICTURE HERE
            </div>
            <div className="md:hidden block mt-4 mb-12 text-xl font-semibold text-center w-96">
                {projectName}
            </div>
        </div>
    );
};
const FeaturedProjects = () => {
    return (
        <div className="flex flex-row justify-center flex-wrap">
            {ProjectCard("Project Name")}
            {ProjectCard("Project Name")}
            {ProjectCard("Project Name")}
        </div>
    );
};

export default FeaturedProjects;
