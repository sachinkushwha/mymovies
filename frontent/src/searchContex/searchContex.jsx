import { createContext,useState } from "react";

export const SearchContex=createContext({
    result:[],
    setResult:()=>{}
});

export const SearchProvider=({children})=>{
    const [result,setResult]=useState([]);

    return(
        <SearchContex.Provider value={{result,setResult}}>
            {children}
        </SearchContex.Provider>
    );
}