import { createContext, useState, useEffect } from "react";
import { deletemovie, getuserdata, movieslist } from "../apis/api";
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
        getuserdata().then(data => {
            console.log("test user data searchcontex",data)
            setusermovie(data);
        })
    }, [])
    const handleDelete = async (id) => {
        try {
            setusermovie((prev) => prev.filter((movie) => movie._id !== id));
            setmovie((prev) => prev.filter((movie) => movie._id !== id));
            deletemovie(id)
        }catch(err){
            console.log("delete error ",err);
        }
        
    }

    return (
        <SearchContex.Provider value={{handleDelete, result, movie, usermovie, setusermovie, setmovie, setResult }}>
            {children}
        </SearchContex.Provider>
    );
}