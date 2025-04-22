import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import SkillsSnapshot from "./SkillsSnapshot";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        let screen_size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        if (screen_size.width <= 640) {
            console.log("Mobile site detected..");
        }
    }, []);

    return (
        <div>
            <HeroSection />
            <div className="text-center md:mt-42 mt-32 text-xl mx-10 text-[#4A4A4A]">
                "I'm a self-taught developer who swapped call-center headsets
                for code editors. Explore my demos, skills, and how I solve
                real-world challenges."
            </div>
            <div
                className="text-center animate-bounce mt-20 hover:cursor-pointer"
                onClick={() =>
                    document
                        .getElementById("featured_projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            >
                <RiArrowDownWideFill className="mx-auto text-4xl text-[#2E2E2E] hover:text-[#000000]" />
            </div>
            <div className="md:mt-28 mt-20" id="featured_projects">
                <FeaturedProjects />
            </div>
            <div className="md:mt-32 mt-16" id="skills_section">
                <SkillsSnapshot />
            </div>
            <div className="border-1 md:w-1/2 rounded-lg p-6 flex flex-col mx-10 md:mx-auto mt-32 border-[#D1D1D1] mb-20">
                <div className="text-[#4A4A4A] text-lg">
                    Over the past year, I've built React+Mongo CRUD apps, .NET
                    Windows Forms tools, and Arduino-powered hardware demos. I
                    thrive on solving real-world challenges.
                </div>
                <div className="self-end mt-6 bg-[#3a74b6] text-[#FFFFFF] border-[#4A90E2] border-1 px-3 py- rounded-md items-center flex shadow-2xl hover:shadow-xl active:shadow-xl hover:cursor-pointer">
                    <Link to="/about">Read my story</Link>
                    <FaArrowRightLong className="inline mx-2" />
                </div>
            </div>
        </div>
    );
}

export default Home;
