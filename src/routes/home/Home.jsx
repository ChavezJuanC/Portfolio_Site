import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import SkillsSnapshot from "./SkillsSnapshot";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
    return (
        <div>
            <HeroSection />
            <div className="text-center md:mt-32 mt-16 text-xl mx-10 text-[#4A4A4A]">
                "I'm a self-taught developer who swapped call-center headsets
                for code editors. Explore my demos, skills, and how I solve
                real-world challenges."
            </div>
            <div className="text-center animate-bounce mt-10">ARROW HERE</div>
            <div className="md:mt-28 mt-20">
                <FeaturedProjects />
            </div>
            <div className="md:mt-32 mt-10">
                <SkillsSnapshot />
            </div>
            <div className="border-1 md:w-1/2 rounded-lg p-6 flex flex-col mx-10 md:mx-auto mt-10 md:mt-22 border-[#D1D1D1] mb-20">
                <div className="text-[#4A4A4A] text-lg">
                    Over the past year, I've built React+Mongo CRUD apps, .NET
                    Windows Forms tools, and Arduino-powered hardware demos. I
                    thrive on solving real-world challenges.
                </div>
                <div className="text-[#2E2E2E] self-end mt-6 border-[#2E2E2E] border-1 px-3 py-1.5 rounded-md items-center flex shadow-2xl hover:shadow-xl active:shadow-xl hover:cursor-pointer">
                    Read my story
                    <FaArrowRightLong className="inline mx-2" />
                </div>
            </div>
        </div>
    );
}

export default Home;
