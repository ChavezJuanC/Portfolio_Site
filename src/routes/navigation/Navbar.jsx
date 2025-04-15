import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [expandNav, setExpandNav] = useState(false);

    const mobileNavButton = (toLink, buttonText) => (
        <li onClick={() => setExpandNav(false)} className="text-center py-3">
            <Link to={toLink}>{buttonText}</Link>
        </li>
    );

    return (
        <>
            {/*Mobile*/}
            <div className="bg-[#F4F4F4] h-12">
                <div
                    className={
                        "w-10 text-center pb-1 border-2 border-[#D1D1D1] bg-[#F4F4F4] rounded-lg absolute top-1.5 right-0 md:hidden mr-3 font-bold"
                    }
                    onClick={() => setExpandNav(!expandNav)}
                >
                    ///
                </div>
                <ul
                    className={
                        expandNav
                            ? "flex flex-col shadow-lg rounded-bl-md rounded-b-md bg-[#F4F4F4] absolute top-12 right-0 text-[#2E2E2E] w-1/3"
                            : "hidden"
                    }
                >
                    {mobileNavButton("/home", "Home")}
                    {mobileNavButton("/about", "About")}
                    {mobileNavButton("/skills", "Skills")}
                    {mobileNavButton("/projects", "Projects")}
                    {mobileNavButton("/contact", "Contact")}
                </ul>

                {/*Desktop*/}
                <nav className="hidden md:flex">
                    <ul className="md:flex md:flex-row">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/skills"}>Skills</Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
