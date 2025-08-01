import { createContext, useState, useEffect } from "react";
import { deletemovie, movieslist } from "../apis/api";
import { getuserdata } from "../apis/api";
export const SearchContex = createContext({
    result: [],
    movie: [],
    usermovie: [],
    setResult: () => { },
    setmovie: () => { },
    setusermovie: () => { },
});

export const SearchProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [movie, setmovie] = useState([]);
    const [usermovie, setusermovie] = useState([]);

    useEffect(() => {
        movieslist().then((data) => {
            setmovie(data);
        })
    }, []);

    useEffect(() => {
        getuserdata().then((data) => {
            setusermovie(data);
            console.log(data);
        })
    }, [])

    const handleDelete=async(id)=>{
        deletemovie(id).then(res=>{
         if(res.ok){
            setusermovie((prev)=>prev.filter((movie)=>movie._id!==id));
         }
        })
    }

    return (
        <SearchContex.Provider value={{handleDelete, result, movie,usermovie,setusermovie, setmovie, setResult }}>
            {children}
        </SearchContex.Provider>
    );
}