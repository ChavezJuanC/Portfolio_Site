import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ projectName }) => {
    return (
        <div className="mx-10">
            <div className="hidden md:mx-0 mx-12 md:block my-6 text-xl font-semibold text-center w-96 text-[#2E2E2E]">
                {projectName}
            </div>
            <div className="w-96 h-60 border-2 border-[#3a74b6] rounded-lg shadow-lg hover:shadow-2xl active:shadow-2xl relative overflow-hidden filter lg:grayscale lg:hover:grayscale-0 transition duration-500 ease-in-out">
                <img
                    src="/project_imgs/appointment_setter_desktop/app1.png"
                    alt="Description"
                    className="absolute w-full h-full object-fill"
                />
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
                <ProjectCard projectName={"Appointment Schedualer"} />
            </div>
            <div
                className="mt-10 md:mt-4"
                onClick={() => {
                    handleProjectClicked(2);
                }}
            >
                <ProjectCard projectName={"Dota 2 Player Search"} />
            </div>
            <div
                className="mt-10 md:mt-4"
                onClick={() => {
                    handleProjectClicked(3);
                }}
            >
                <ProjectCard projectName={"B-12 AI"} />
            </div>
        </div>
    );
};

export default FeaturedProjects;
