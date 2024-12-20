import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

// Import icons as needed
// import { GoSearch } from "react-icons/go";
// import { BsImage } from "react-icons/bs";
// import { BiNews } from "react-icons/bi";
// import { RiVideoLine } from "react-icons/ri";
// import { SlTag } from "react-icons/sl";

import Logo from "../assets/waves-logo.png";
import SearchInput from "./SearchInput";
import MenuIcon from "./MenuIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

export default function SearchResultHeader() {
    const [selectedMenu, setSelectedMenu] = useState("All");
    const { setImageSearch } = useContext(Context);

    useEffect(() => {
        return () => setImageSearch(false);
    }, []);

    const clickHandler = (menuItem) => {
        let isTypeImage = menuItem.name === "Images";
        setImageSearch(isTypeImage ? true : false);
        setSelectedMenu(menuItem.name);
    };

    return (
        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-slate-100 flex md:block flex-col items-center sticky top-0 bg-slate-100">
            <div className="flex items-center justify-between md:w-[full]">
                <div className="flex items-center grow">
                    <Link to="/">
                        <img
                            className="md:block w-[92px] mr-10"
                            src={Logo}
                            alt="Logo"
                        />
                    </Link>
                    <SearchInput from="searchResult" />
                </div>
                <div className="hidden md:block">
                    <MenuIcon />
                </div>
            </div>

            <div className="flex ml-[-12px] mt-3">
                {menu.map((menu, index) => (
                    <span
                        key={index}
                        className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
                            selectedMenu === menu.name ? "text-[#1a73e8]" : ""
                        }`}
                        onClick={() => clickHandler(menu)}
                    >
                        <span className="hidden md:block mr-2">
                            {menu.icon}
                        </span>
                        <span className="text-sm">{menu.name}</span>
                        {selectedMenu === menu.name && (
                            <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};
