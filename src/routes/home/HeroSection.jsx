import React from "react";

function HeroSection() {
    return (
        <div className="md:flex flex-row justify-center md:items-center mt-10 md:mt-20 mx-5 md:mx-16 border-2 md:border-0 rounded-md pb-10 md:pb-0 pt-8 md:pt-9">
            <div className="w-96 h-96 overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,black_5%,transparent_100%)] mx-auto md:mx-0 md:mb-0 mb-20">
                <img
                    src="/imgs/portfolioimg.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="h-fit text-center">
                <div className="font-semibold text-2xl">
                    Hi, I'm Juan Chavez, Full-Stack Developer in Mexico City
                </div>
                <div className="mt-2 mb-6">
                    Creating web & desktop app solutions to showcase what's
                    possible.
                </div>
                <div className="mx-auto border-2 rounded-lg px-2 py-1 w-36 text-center h-10 mt-10 hover:cursor-pointer">
                    View My Work
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
