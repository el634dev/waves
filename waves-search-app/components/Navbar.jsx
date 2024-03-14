import React from "react";
import ProfileIcon from "./ProfileIcon";

const Navbar = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            {/* Links next to hamburger menu */}
            <div className="flex gap-4">
                <span className="text-black/[0.87] text-[15px] text-blue-200 line-height hover:underline cursor-pointer">
                    Privacy
                </span>
                {/* Gift */}
                <span className="text-black/[0.87] text-[15px] text-blue-200 line-height hover:underline cursor-pointer">
                    Gift the ocean
                </span>
            </div>
            {/* Hamburger Icon */}
            <ProfileIcon />
        </header>
    );
};

export default Navbar;
