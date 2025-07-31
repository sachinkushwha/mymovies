import { useEffect, useState } from "react";
import { getuserdata } from "../../apis/api";
import { Cart } from "../cart";

export const Profile=()=>{
    const user = localStorage.getItem('logedinuser');
    const [movie,setmovie]=useState()
    useEffect(()=>{
        getuserdata().then((data)=>{
            setmovie(data);
            console.log(data);
        })
    })
    return<>
    <h1>{user}</h1>
    {/* <Cart movie={movie} /> */}
    </>
}