import { useEffect, useState } from "react";
import { getuserdata } from "../../apis/api";
import { Cart } from "../cart";

export const Profile=()=>{
    const user = localStorage.getItem('logedinuser');
    const [movie,setmovie]=useState()
    useEffect(()=>{
        getuserdata().then((data)=>{
            setmovie(data);
        })
    })
    return<>
    <Cart movie={movie} />
    </>
}