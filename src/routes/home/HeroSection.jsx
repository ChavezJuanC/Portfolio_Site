import React from "react";

function HeroSection() {
    return (
        <div className="md:flex flex-row justify-center md:items-center mt-10 md:mt-20 mx-5 md:mx-16 border-2 md:border-0 border-[#2E2E2E] rounded-md pb-10 md:pb-0 pt-8 md:pt-9">
            <div className="w-96 h-96 overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,black_5%,transparent_100%)] mx-auto md:mx-0 md:mb-0 mb-20 shadow=lg">
                <img
                    src="/imgs/portfolioimg.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="h-fit text-center">
                <div className="font-semibold text-2xl text-[#2E2E2E]">
                    Hi, I'm Juan Chavez, Full-Stack Developer in Mexico City
                </div>
                <div className="mt-2 mb-6 text-[#4A4A4A]">
                    Creating web & desktop app solutions to showcase what's
                    possible.
                </div>
                <div className="mx-auto border-2 rounded-lg px-2 py-1 w-36 text-center h-10 mt-10 hover:cursor-pointer bg-[#4A90E2] text-[#FFFFFF] border-[#4A90E2] hover:font-semibold active:font-semibold">
                    View My Work
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
