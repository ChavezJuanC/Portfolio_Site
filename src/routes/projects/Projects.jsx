import React from "react";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCardLeft from "./ProjectCardLeft";

function Projects() {
    return (
        <div className="bg-[#FAFAFA] text-[#2E2E2E] px-6 md:py-32 py-16 md:px-20">
            <div className="max-w-3xl mx-auto mb-32">
                <h2 className="text-3xl font-semibold mb-4 border-b border-[#D1D1D1] pb-2">
                    My work
                </h2>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                    Real solutions, experiments, and full-stack demos I've
                    created to push my skills forward.
                </p>
            </div>
            <div>
                <div className="mb-22">
                    <ProjectCardRight
                        projectName={"Project Name"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardLeft
                        projectName={"Project Name"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardRight
                        projectName={"Project Name"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardLeft
                        projectName={"Project Name"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardRight
                        projectName={"Project Name"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardLeft
                        projectName={"Project Name"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
