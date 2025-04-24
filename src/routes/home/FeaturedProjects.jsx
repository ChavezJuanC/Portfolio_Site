import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ projectName }) => {
    return (
        <div className="mx-10">
            <div className="hidden md:mx-0 mx-12 md:block my-6 text-xl font-semibold text-center w-96 text-[#2E2E2E]">
                {projectName}
            </div>
            <div className="w-96 border-2 border-[#3a74b6] rounded-lg h-60 shadow-lg hover:shadow-2xl active:shadow-2xl">
                PICTURE HERE
            </div>
            <div className="md:hidden block mt-4 mb-12 text-xl font-semibold text-center w-96">
                {projectName}
            </div>
        </div>
    );
};

const FeaturedProjects = () => {
    const navigate = useNavigate();
    function handleProjectClicked(projectIndex) {
        navigate("/projects", {
            state: {
                scrollToId: `project_${projectIndex}_${
                    window.innerWidth >= 1024 ? "desktop" : "mobile"
                }`,
            },
        });
    }

    return (
        <div className="flex flex-row justify-center flex-wrap">
            <div
                className="mt-10 md:mt-4"
                onClick={() => {
                    handleProjectClicked(1);
                }}
            >
                {ProjectCard("Project Name")}
            </div>
            <div
                className="mt-10 md:mt-4"
                onClick={() => {
                    handleProjectClicked(2);
                }}
            >
                {ProjectCard("Project Name")}
            </div>
            <div
                className="mt-10 md:mt-4"
                onClick={() => {
                    handleProjectClicked(3);
                }}
            >
                {ProjectCard("Project Name")}
            </div>
        </div>
    );
};

export default FeaturedProjects;
