import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getsearch } from "../apis/api";
import { SearchContex } from "../searchContex/searchContex";

export const Search = () => {
    const [query, setQuery] = useState("");
    const {setResult}=useContext(SearchContex);
    const handleSearch = (e) => {
        e.preventDefault();
          getsearch(query).then((data)=>{
            setResult(data)
          })
    };
    return (
        <>
        <form
            onSubmit={handleSearch}
            className="w-full px-4 sm:px-6 md:px-8 lg:px-0"
        >
            <div className="flex items-center rounded-full overflow-hidden w-[150px] sm:w-full max-w-xl mx-auto bg-white border">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-grow px-4 py-2 outline-none bg-transparent text-black text-sm sm:text-base"
                />
                <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200">
                    <FaSearch className="text-gray-600 text-lg" />
                </button>
            </div>
        </form>
        </>
    );
};
