import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function ProjectCardRight({ projectName, projectDescription }) {
    return (
        <div className="xl:w-3/4 2xl:w-1/2 hidden lg:block mx-auto bg-[#FAFAFA] text-[#2E2E2E] px-4 rounded-2xl shadow-md border border-[#D1D1D1] pb-20">
            <h3 className="text-2xl font-semibold text-center mb-16 mt-16">
                {projectName}
            </h3>
            <div className="flex justify-between gap-6 px-10">
                <div className="w-1/2 flex items-center">
                    <div className="space-y-4">
                        <p className="text-[#4A4A4A] leading-relaxed">
                            {projectDescription}
                        </p>
                        <div>
                            <Link
                                to="https://www.google.com"
                                target="_blank"
                                className="inline-block bg-[#3a74b6] text-white px-4 py-2 rounded-md hover:brightness-110 transition"
                            >
                                Source Code
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 relative overflow-hidden rounded-xl border border-[#D1D1D1]">
                    <Slider />
                </div>
            </div>
        </div>
    );
}

export default ProjectCardRight;
