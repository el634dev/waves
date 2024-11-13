import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if(event?.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };

    return (
        <div id='searchBox' className="outline h-[46px] w-full md:w-[580px] md:mr-2 flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
            {/**********/}
            <input 
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the web..."
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-0 text-black/[0.87]"
            />
            {/**********/}
            <div className="flex items-center gap-3">
                {searchQuery && (
                    <IoMdClose 
                        size={24}
                        color='#000'
                        className='cursor-pointer'
                        onClick={() => setSearchQuery("")}
                    />
                )}
                {/*********/}
                <AiOutlineSearch size={18} color='grey' />
            </div>
        </div>
    );
};

export default SearchInput;
