import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaItchIo } from "react-icons/fa";

function Footer() {
    return (
        <div className="h-12 bg-[#4A4A4A] mt-22 text-[#FFFFFF] flex justify-end items-center w-full">
            <div className="flex flex-row mr-5">
                <a href="https://github.com/ChavezJuanC">
                    <FaGithub className="mx-4 hover:cursor-pointer text-xl" />
                </a>
                <a
                    href="
                "
                >
                    <FaLinkedin className="mx-4 hover:cursor-pointer text-xl" />
                </a>
                <a
                    href="https://skrptz.itch.io
                "
                >
                    <FaItchIo className="mx-4 hover:cursor-pointer text-xl" />
                </a>
                <a
                    href="
                "
                >
                    <FaYoutube className="mx-4 hover:cursor-pointer text-xl" />
                </a>
            </div>
        </div>
    );
}
export default Footer;
