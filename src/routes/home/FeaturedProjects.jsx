import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (projectName, projectLink) => {
    return (
        <div className="mx-10">
            <div className="hidden md:block my-6 text-xl font-semibold text-center w-96 text-[#2E2E2E]">
                {projectName}
            </div>
            <Link to={projectLink}>
                <div className="w-96 border-2 border-[#4A90E2] rounded-lg h-60 shadow-lg hover:shadow-2xl active:shadow-2xl">
                    PICTURE HERE
                </div>
            </Link>
            <div className="md:hidden block mt-4 mb-12 text-xl font-semibold text-center w-96">
                {projectName}
            </div>
        </div>
    );
};
const FeaturedProjects = () => {
    return (
        <div className="flex flex-row justify-center flex-wrap">
            {ProjectCard("Project Name", "/projects/f1")}
            {ProjectCard("Project Name", "/projects/f2")}
            {ProjectCard("Project Name", "/projects/f3")}
        </div>
    );
};

export default FeaturedProjects;
