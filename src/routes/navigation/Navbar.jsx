import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

function Navbar() {
    const [expandNav, setExpandNav] = useState(false);
    const nav = useNavigate();

    const mobileNavButton = (toLink, buttonText) => (
        <li
            onClick={() => setExpandNav(false)}
            className="text-center py-3 hover:text-[#4A90E2] active:text-[#4A90E2]"
        >
            <Link to={toLink}>{buttonText}</Link>
        </li>
    );

    const desktopNavigationButton = (toLink, buttonText) => (
        <li className="text-center py-3 px-4 hover:text-[#4A90E2] active:text-[#4A90E2]">
            <Link to={toLink}>{buttonText}</Link>
        </li>
    );

    function handleSkillsNavigation() {
        setExpandNav(false);
        const current_route = location.pathname;

        if (current_route == "/") {
            document
                .getElementById("skills_section")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            nav("/");
            setTimeout(() => {
                document
                    .getElementById("skills_section")
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }

    return (
        <>
            {/* Fixed navbar container */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#EDEDED] h-14 flex items-center px-6 border-b border-[#D1D1D1]">
                <FaHome className="text-3xl text-[#3a74b6] md:hidden" />

                {/* Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex flex-row">
                        {desktopNavigationButton("/", "Home")}
                        {desktopNavigationButton("/about", "About")}
                        <li
                            onClick={handleSkillsNavigation}
                            className="text-center py-3 px-4 hover:text-[#3a74b6] active:text-[#4A90E2] hover:cursor-pointer"
                        >
                            Skills
                        </li>
                        {desktopNavigationButton("/projects", "Projects")}
                        {desktopNavigationButton("/contact", "Contact")}
                    </ul>
                </nav>

                {/* Mobile menu */}
                <div
                    className="w-10 text-center text-[#3a74b6] rounded-lg md:hidden font-bold ml-auto"
                    onClick={() => setExpandNav(!expandNav)}
                >
                    <GiHamburgerMenu className="text-3xl mx-auto mt-1 text-[#3a74b6]" />
                </div>

                <ul
                    className={
                        expandNav
                            ? "flex flex-col shadow-lg rounded-bl-md rounded-b-md bg-[rgba(244,244,244,0.9)] absolute top-14 right-0 text-[#2E2E2E] w-1/3 z-10"
                            : "hidden"
                    }
                >
                    {mobileNavButton("/", "Home")}
                    {mobileNavButton("/about", "About")}
                    <li
                        onClick={handleSkillsNavigation}
                        className="text-center py-3 hover:text-[#3a74b6] active:text-[#4A90E2]"
                    >
                        Skills
                    </li>
                    {mobileNavButton("/projects", "Projects")}
                    {mobileNavButton("/contact", "Contact")}
                </ul>
            </div>
            {/* Spacer */}
            <div className="h-14"></div>
        </>
    );
}

export default Navbar;
