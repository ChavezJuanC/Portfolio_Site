import React, { useEffect, useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

function Slider({ photoArray }) {
    const [currentPhoto, setCurrentPhoto] = useState();
    const [indexTracker, setIndexTracker] = useState(0);

    useEffect(() => {
        if (photoArray != undefined) {
            setCurrentPhoto(photoArray[0]);
        } else {
            setCurrentPhoto("project_imgs/appointment_setter_desktop/app2.png");
        }
    }, []);

    function updateCurrentPhoto(direction) {
        let newIndex = indexTracker;

        if (direction) {
            if (newIndex >= photoArray.length - 1) {
                return;
            }
            newIndex++;
        } else {
            if (newIndex <= 0) {
                return;
            }
            newIndex--;
        }

        setIndexTracker(newIndex);
        setCurrentPhoto(photoArray[newIndex]);
    }

    return (
        <div className="pt-[66.66%] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#F4F4F4] flex items-center justify-center text-[#6E6E6E]">
                {/* Navigation buttons */}
                <div
                    className="absolute left-0 z-10 p-2 bg-white/15 hover:bg-white/80 cursor-pointer mx-2 rounded-full text-slate-200 text-lg"
                    onClick={() => {
                        updateCurrentPhoto(false);
                    }}
                >
                    <IoIosArrowDropleft />
                </div>
                <img
                    src={currentPhoto}
                    alt="Description"
                    className="absolute w-full object-fit"
                />
                <div
                    className="absolute right-0 z-10 p-2 bg-white/15 hover:bg-white/80 cursor-pointer mx-2 rounded-full text-slate-200 text-lg"
                    onClick={() => {
                        updateCurrentPhoto(true);
                    }}
                >
                    <IoIosArrowDropright />
                </div>
            </div>
        </div>
    );
}

export default Slider;
