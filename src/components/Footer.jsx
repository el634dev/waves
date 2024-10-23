import React from "react";
import { quickLinks, settingMenu } from '../utils/Constants';

const Footer = () => {
    return (
        // bg-cyan-700
        <footer className="border-cyan-900 text-blue-300">
            <div className="flex py-[15px] md:px-[30px] border-b border-[#a3a2a2]">
                <span className="text-[15px] leading-none text-blue-300">
                    United States
                </span>
            </div>
            {/*************/}
            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-[#a3a2a2]">
                <div className="flex justify-center">
                    {quickLinks.map((menu, index) => (
                        <span key={index} className="text-blue-300 text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                            {menu}
                        </span>
                    ))}
                </div>
                {/*************/}
                <div className="flex justify-center">
                    {settingMenu.map((menu, index) => (
                        <span key={index} className="text-blue-300 text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                            {menu}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
