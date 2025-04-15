import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";

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
            <div className="md:mt-28 mt-16">
                <FeaturedProjects />
            </div>
        </div>
    );
}

export default Home;
