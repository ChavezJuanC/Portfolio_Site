import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { LuGamepad2 } from "react-icons/lu";

function SkillsSnapshot() {
    return (
        <>
            {/*Desktop */}
            <div className="overflow-x-auto p-4 md:block hidden">
                <div className="text-center text-2xl text-[#3a74b6] font-semibold mb-10">
                    My Toolbox
                </div>
                <table className="table-auto w-full lg:w-3/4 2xl:w-1/2 mx-auto border border-[#D1D1D1] border-collapse shadow-sm rounded-lg">
                    <tbody>
                        <tr className="align-top">
                            <th className="p-0 border-b border-[#D1D1D1] w-1/3 align-top">
                                <div className="flex items-start gap-2 px-4 py-3 text-[#2E2E2E] bg-[#f9f9f9] h-full">
                                    <CgWebsite className="text-xl mt-1" />
                                    Front-End
                                </div>
                            </th>
                            <td className="px-4 py-3 text-[#4A4A4A] border-b border-[#D1D1D1]">
                                React · HTML · JavaScript/TypeScript ·
                                Tailwind-CSS
                            </td>
                        </tr>
                        <tr className="align-top">
                            <th className="p-0 border-b border-[#D1D1D1] w-1/3 align-top">
                                <div className="flex items-start gap-2 px-4 py-3 text-[#2E2E2E] bg-[#f9f9f9] h-full">
                                    <FaServer className="text-xl mt-1" />
                                    Back-End
                                </div>
                            </th>
                            <td className="px-4 py-3 text-[#4A4A4A] border-b border-[#D1D1D1]">
                                Node.js/Express · Flask · FastAPI · ASP-.NET
                                Web-API · MongoDB
                            </td>
                        </tr>
                        <tr className="align-top">
                            <th className="p-0 border-b border-[#D1D1D1] w-1/3 align-top">
                                <div className="flex items-start gap-2 px-4 py-3 text-[#2E2E2E] bg-[#f9f9f9] h-full">
                                    <IoDesktopOutline className="text-xl mt-1" />
                                    Desktop Apps
                                </div>
                            </th>
                            <td className="px-4 py-3 text-[#4A4A4A] border-b border-[#D1D1D1]">
                                .NET (Windows-Forms, Console) · Electron ·
                                Tkinter
                            </td>
                        </tr>
                        <tr className="align-top">
                            <th className="p-0 w-1/3 align-top">
                                <div className="flex items-start gap-2 px-4 py-3 text-[#2E2E2E] bg-[#f9f9f9] h-full">
                                    <LuGamepad2 className="text-xl mt-1" />
                                    Game Development
                                </div>
                            </th>
                            <td className="px-4 py-3 text-[#4A4A4A]">
                                Godot · Unity · Pygame · Arduino
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/*Mobile*/}
            <div className="overflow-x-auto p-4 md:hidden">
                <div className="text-center text-2xl text-[#2E2E2E] border-[#3a74b6] font-semibold mb-16 border-b-1 w-3/4 mx-auto pb-4 px-4">
                    My toolbox
                </div>
                <div className="mb-20">
                    <div className="flex flex-row justify-center mb-14">
                        <div className="text-xl text-[#2E2E2E]">Front-End</div>
                        <CgWebsite className="text-xl mt-1 mx-2" />
                    </div>
                    <ul className="list-disc ml-10">
                        <li className="my-1 text-[#4A4A4A]">React</li>
                        <li className="my-1 text-[#4A4A4A]">HTML</li>
                        <li className="my-1 text-[#4A4A4A]">
                            JavaScript/TypeScript
                        </li>
                        <li className="my-1 text-[#4A4A4A]">Tailwind-CSS</li>
                    </ul>
                </div>
                <div className="mt-10 mb-20">
                    <div className="flex flex-row justify-center mb-14">
                        <div className="text-xl text-[#2E2E2E]"> Back-End</div>
                        <FaServer className="text-xl mt-1 mx-2" />
                    </div>
                    <ul className="list-disc ml-10">
                        <li className="my-1 text-[#4A4A4A]">Node.js/Express</li>
                        <li className="my-1 text-[#4A4A4A]">Flask</li>
                        <li className="my-1 text-[#4A4A4A]">FastAPI</li>
                        <li className="my-1 text-[#4A4A4A]">
                            ASP-.NET Web-API
                        </li>
                        <li className="my-1 text-[#4A4A4A]">MongoDB</li>
                    </ul>
                </div>
                <div className="mt-10 mb-20">
                    <div className="flex flex-row justify-center mb-14">
                        <div className="text-xl text-[#2E2E2E]">
                            Desktop Apps
                        </div>
                        <IoDesktopOutline className="text-xl mt-1 mx-2" />
                    </div>
                    <ul className="list-disc ml-10">
                        <li className="my-1 text-[#4A4A4A]">
                            .NET (Windows-Forms, Console)
                        </li>
                        <li className="my-1 text-[#4A4A4A]">Electron</li>
                        <li className="my-1 text-[#4A4A4A]">Tkinter</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <div className="flex flex-row justify-center mb-14">
                        <div className="text-xl text-[#2E2E2E]">
                            Game Development
                        </div>
                        <LuGamepad2 className="text-xl mt-1 mx-2" />
                    </div>
                    <ul className="list-disc ml-10">
                        <li className="my-1 text-[#4A4A4A]">Godot</li>
                        <li className="my-1 text-[#4A4A4A]">Unity</li>
                        <li className="my-1 text-[#4A4A4A]">Pygame</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SkillsSnapshot;
