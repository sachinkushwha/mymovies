import { useContext, useEffect, useState, } from "react";
import { Carts } from "./carts";
import { WaveLoader } from "./loader";
import { useNavigate, useParams } from "react-router-dom";
import { SearchContex } from "../searchContex/searchContex";
export const UserProfile = () => {
    const { userId } = useParams();
    const { movie } = useContext(SearchContex);
    const usermovie = movie.filter(mov => mov.userId?._id.includes(userId));
    console.log("user profile", movie);
    
    return <>
       <h1 className="text-2xl font-bold items-center mt-10 flex justify-center my-10">{usermovie[0]?.userId?.name[0].toUpperCase()+usermovie[0]?.userId?.name.slice(1)}</h1>
        {usermovie.length > 0 ? <Carts movie={usermovie ? usermovie : []} /> : (
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {[...Array(6)].map((_, i) => (<WaveLoader key={i} />))}
            </div>
        )}
    </>
}