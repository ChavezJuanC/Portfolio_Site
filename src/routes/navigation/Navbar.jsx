import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [expandNav, setExpandNav] = useState(false);
    const nav = useNavigate();

    const mobileNavButton = (toLink, buttonText) => (
        <li
            onClick={() => setExpandNav(false)}
            className="text-center py-3  hover:text-[#4A90E2] active:text-[#4A90E2]"
        >
            <Link to={toLink}>{buttonText}</Link>
        </li>
    );

    const desktopNavigationButton = (toLink, buttonText) => (
        <li className="text-center py-3 px-3 hover:text-[#4A90E2] active:text-[#4A90E2]">
            <Link to={toLink}>{buttonText}</Link>
        </li>
    );

    function handleSkillsNavigation() {
        setExpandNav(false);
        const current_route = location.pathname;
        console.log(current_route);

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
            {/*Mobile*/}
            <div className="bg-[#EDEDED] h-12">
                <div
                    className={
                        "w-10 text-center pb-1 border-2 border-[#2E2E2E] bg-[#F4F4F4] rounded-lg absolute top-1.5 right-0 md:hidden mr-3 font-bold"
                    }
                    onClick={() => setExpandNav(!expandNav)}
                >
                    ///
                </div>
                <ul
                    className={
                        expandNav
                            ? "flex flex-col shadow-lg rounded-bl-md rounded-b-md bg-[rgba(244,244,244,0.9)] absolute top-12 right-0 text-[#2E2E2E] w-1/3 z-10"
                            : "hidden"
                    }
                >
                    {mobileNavButton("/", "Home")}
                    {mobileNavButton("/about", "About")}
                    <li
                        onClick={handleSkillsNavigation}
                        className="text-center py-3  hover:text-[#4A90E2] active:text-[#4A90E2]"
                    >
                        Skills
                    </li>
                    {mobileNavButton("/projects", "Projects")}
                    {mobileNavButton("/contact", "Contact")}
                </ul>

                {/*Desktop*/}
                <nav className="hidden md:flex">
                    <ul className="md:flex md:flex-row">
                        {desktopNavigationButton("/", "Home")}
                        {desktopNavigationButton("/about", "About")}
                        <li
                            onClick={handleSkillsNavigation}
                            className="text-center py-3 hover:text-[#4A90E2] active:text-[#4A90E2] hover:cursor-pointer"
                        >
                            Skills
                        </li>
                        {desktopNavigationButton("/projects", "Projects")}
                        {desktopNavigationButton("/contact", "Contact")}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
