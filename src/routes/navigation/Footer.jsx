import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaItchIo } from "react-icons/fa";

function Footer() {
    return (
        <div className="h-10 bg-[#4A4A4A] mt-22 text-[#FFFFFF] flex justify-end items-center w-full">
            <div className="flex flex-row mr-5">
                <FaGithub className="w-5 h-5 mx-2 hover:cursor-pointer" />
                <FaLinkedin className="w-5 h-5 mx-2 hover:cursor-pointer" />
                <FaYoutube className="w-5 h-5 mx-2 hover:cursor-pointer" />
                <FaItchIo className="w-5 h-5 mx-2 hover:cursor-pointer" />
            </div>
        </div>
    );
}
export default Footer;
