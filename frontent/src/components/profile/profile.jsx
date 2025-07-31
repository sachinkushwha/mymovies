import { useEffect, useState } from "react";
import { getuserdata } from "../../apis/api";
import { Carts } from "../carts";
export const Profile=()=>{
    const user = localStorage.getItem('logedinuser');
    const [movie,setmovie]=useState([])
    useEffect(()=>{
        getuserdata().then((data)=>{
            setmovie(data);
            console.log(data);
        })
    },[])
    return<>
    
    <Carts movie={movie} />
    
    </>
}