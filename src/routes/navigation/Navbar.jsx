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

    const desktopNavigationButton = (toLink, buttonText) => (
        <li className="text-center py-3 px-3">
            <Link to={toLink}>{buttonText}</Link>
        </li>
    );

    return (
        <>
            {/*Mobile*/}
            <div className="bg-[#EDEDED] h-12">
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
                    {mobileNavButton("/", "Home")}
                    {mobileNavButton("/about", "About")}
                    {mobileNavButton("/skills", "Skills")}
                    {mobileNavButton("/projects", "Projects")}
                    {mobileNavButton("/contact", "Contact")}
                </ul>

                {/*Desktop*/}
                <nav className="hidden md:flex">
                    <ul className="md:flex md:flex-row">
                        {desktopNavigationButton("/", "Home")}
                        {desktopNavigationButton("/about", "About")}
                        {desktopNavigationButton("/skills", "Skills")}
                        {desktopNavigationButton("/projects", "Projects")}
                        {desktopNavigationButton("/contact", "Contact")}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
