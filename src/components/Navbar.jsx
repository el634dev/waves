import React from "react";

const Navbar = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                    Privacy
                </span>
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                    Gift the ocean
                </span>
            </div>
        </header>
    );
};

export default Navbar;
