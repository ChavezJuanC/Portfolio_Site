import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function ProjectCardMobile({
    projectName,
    projectDescription,
    photoArray,
    githubLink,
}) {
    return (
        <div className="mx-auto text-center">
            <div>
                <h3 className="text-2xl font-semibold text-center mb-12 mt-10">
                    {projectName}
                </h3>
            </div>
            <div className="w-full sm:w-3/4 lg:1/2 relative overflow-hidden rounded-xl border border-[#D1D1D1] items-center mx-auto mb-10">
                <Slider photoArray={photoArray} />
            </div>
            <p className="text-[#4A4A4A] leading-relaxed px-4 pt-4">
                {projectDescription}
            </p>
            <div className="mt-6">
                <Link
                    to={githubLink}
                    target="_blank"
                    className="inline-block bg-[#3a74b6] text-white px-4 py-2 rounded-md hover:brightness-110 transition"
                >
                    Code
                </Link>
            </div>
        </div>
    );
}

export default ProjectCardMobile;
