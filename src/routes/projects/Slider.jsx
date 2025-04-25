import React, { useEffect, useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

function Slider({ photoArray }) {
    const [currentPhoto, setCurrentPhoto] = useState();

    useEffect(() => {
        if (photoArray != undefined) {
            setCurrentPhoto(photoArray[0]);
        } else {
            setCurrentPhoto("project_imgs/appointment_setter_desktop/app2.png");
        }
    });

    return (
        <div className="pt-[66.66%] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#F4F4F4] flex items-center justify-center text-[#6E6E6E]">
                {/* Navigation buttons */}
                <div className="absolute left-0 z-10 p-2 bg-white/15 hover:bg-white/80 cursor-pointer mx-2 rounded-full text-slate-200 text-lg">
                    <IoIosArrowDropleft />
                </div>
                <img
                    src={currentPhoto}
                    alt="Description"
                    className="absolute w-full object-fit"
                />
                <div className="absolute right-0 z-10 p-2 bg-white/15 hover:bg-white/80 cursor-pointer mx-2 rounded-full text-slate-200 text-lg">
                    <IoIosArrowDropright />
                </div>
            </div>
        </div>
    );
}

export default Slider;

/* 
Slider is now using an array of imgs.. 
update the img dynamicaly now.. 
remember.. if photoIndex > photoArray.length -> go back to one.. and the other way around..
pretty much, allow and infinite loop..? Yea that cool for now.
*/
