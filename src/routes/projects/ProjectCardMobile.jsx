import React from "react";
import Slider from "./Slider";

function ProjectCardMobile({ projectName, ProjectDescription }) {
    return (
        <div className="mx-auto text-center">
            <div>
                <h3 className="text-2xl font-semibold text-center mb-12 mt-10">
                    {projectName}
                </h3>
            </div>
            <div className="w-full sm:w-3/4 lg:1/2 relative overflow-hidden rounded-xl border border-[#D1D1D1] items-center mx-auto mb-10">
                    <Slider />
            </div>
            <p className="text-[#4A4A4A] leading-relaxed px-4 pt-4">
                {ProjectDescription}
            </p>
        </div>
    );
}

export default ProjectCardMobile;
