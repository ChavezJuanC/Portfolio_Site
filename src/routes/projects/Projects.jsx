import React from "react";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCardLeft from "./ProjectCardLeft";
import ProjectCardMobile from "./ProjectCardMobile";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Projects() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToId) {
            const element = document.getElementById(location.state.scrollToId);
            const yOffset = -100;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="bg-[#FAFAFA] text-[#2E2E2E] px-6 md:py-32 py-16 md:px-20">
            <div className="max-w-3xl mx-auto mb-32">
                <h2 className="text-3xl font-semibold mb-4 border-b border-[#D1D1D1] pb-2">
                    My work
                </h2>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed text-base">
                    Real solutions, experiments, and full-stack demos I've
                    created to push my skills forward.
                </p>
            </div>
            <div className="hidden md:block" id="project_1_desktop">
                <div className="mb-22">
                    <ProjectCardRight
                        projectName={"Appointment Schedualer"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22" id="project_2_desktop">
                    <ProjectCardLeft
                        projectName={"Dota 2 Player Search"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22" id="project_3_desktop">
                    <ProjectCardRight
                        projectName={"B-12 AI"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-2">
                    <ProjectCardLeft
                        projectName={"Alprovet"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardRight
                        projectName={"Hunter Mate"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardLeft
                        projectName={"LCD controller over the internet"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
                <div className="mb-28" id="project_1_mobile">
                    <ProjectCardMobile
                        projectName={"Appointment Schedualer"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-28" id="project_2_mobile">
                    <ProjectCardMobile
                        projectName={"Dota 2 Player Search"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-28" id="project_3_mobile">
                    <ProjectCardMobile
                        projectName={"B-12 AI"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-28">
                    <ProjectCardMobile
                        projectName={"Alprovet"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-28">
                    <ProjectCardMobile
                        projectName={"Hunter Mate"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
                <div className="mb-28">
                    <ProjectCardMobile
                        projectName={"LCD controller over the internet"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
