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
                            "Appointment Setter Desktop is a project designed to showcase the integration of React with Electron, Express.js, and MongoDB. This application provides a functional desktop interface for managing appointments, leveraging modern web technologies to deliver a seamless user experience."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
                <div className="mb-22" id="project_2_desktop">
                    <ProjectCardLeft
                        projectName={"Dota 2 Player Search"}
                        projectDescription={
                            "DotaPlayerSearch is a React Native application that lets users search for Dota 2 player profiles and view key statistics. By entering a player ID, users can access data like match history, win rates, and recent performance. The app uses the OpenDota API to fetch real-time information and features a simple, mobile-friendly design for easy use."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/DotaPlayerSearch"
                        }
                    />
                </div>
                <div className="mb-22" id="project_3_desktop">
                    <ProjectCardRight
                        projectName={"B-12 AI"}
                        projectDescription={
                            "B-12 is a Python desktop application built with Tkinter that lets users run local LLMs through a simple GUI. It integrates with Ollama, supports easy switching between models, and includes features like screen capturing and image uploads for enhanced interactions."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={"https://github.com/ChavezJuanC/b-12-beta"}
                    />
                </div>
                <div className="mb-2">
                    <ProjectCardLeft
                        projectName={"Alprovet"}
                        projectDescription={
                            "Alprovet is a responsive website built with React, designed to showcase the clinic's services, staff, and contact information. The project focuses on front-end development, emphasizing a clean design, smooth navigation, and a mobile-friendly layout to help pet owners easily find the information they need"
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/ALPROVET_WEB"
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardRight
                        projectName={"Monster Hunter Mate"}
                        projectDescription={
                            "Monster Hunter Mate is a mobile app built with React Native, designed for seamless cross-platform compatibility. This app serves as a learning tool, showcasing various monsters, their weaknesses, and strategies for defeating them. It emphasizes smooth navigation, with parameters and nested navigation techniques to provide an intuitive user experience."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/MHW-HunterGuide"
                        }
                    />
                </div>
                <div className="mb-22">
                    <ProjectCardLeft
                        projectName={"LCD controller over the internet"}
                        projectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/ArduinoLCDControlGUI"
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
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
                <div className="mb-28" id="project_2_mobile">
                    <ProjectCardMobile
                        projectName={"Dota 2 Player Search"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
                <div className="mb-28" id="project_3_mobile">
                    <ProjectCardMobile
                        projectName={"B-12 AI"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
                <div className="mb-28">
                    <ProjectCardMobile
                        projectName={"Alprovet"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
                <div className="mb-28">
                    <ProjectCardMobile
                        projectName={"Hunter Mate"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
                <div className="mb-28">
                    <ProjectCardMobile
                        projectName={"LCD controller over the internet"}
                        ProjectDescription={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dolorum in incidunt earum consectetur doloremque, quasi deserunt iste dignissimos non quidem blanditiis aperiam adipisci nemo nesciunt consequatur doloribus eligendi."
                        }
                        photoArray={[
                            "project_imgs/appointment_setter_desktop/app1.png",
                            "project_imgs/appointment_setter_desktop/app2.png",
                            "project_imgs/appointment_setter_desktop/app3.png",
                        ]}
                        githubLink={
                            "https://github.com/ChavezJuanC/Appointment-Setter-Desktop"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
