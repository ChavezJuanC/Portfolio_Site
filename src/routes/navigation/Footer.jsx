import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaItchIo } from "react-icons/fa";

function Footer() {
    return (
        <div className="h-10 bg-[#4A4A4A] mt-22 text-[#FFFFFF] flex justify-end items-center w-full">
            <div className="flex flex-row mr-5">
                <a href="https://github.com/ChavezJuanC">
                    <FaGithub className="w-5 h-5 mx-2 hover:cursor-pointer" />
                </a>
                <FaLinkedin className="w-5 h-5 mx-2 hover:cursor-pointer" />
                <FaYoutube className="w-5 h-5 mx-2 hover:cursor-pointer" />
                <FaItchIo className="w-5 h-5 mx-2 hover:cursor-pointer" />
            </div>
        </div>
    );
}
export default Footer;
