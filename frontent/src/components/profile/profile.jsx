import { useContext, useEffect,  } from "react";
import { Carts } from "./carts";
import { WaveLoader } from "../loader";
import { getuserdata } from "../../apis/api";
import { SearchContex } from "../../searchContex/searchContex";
export const Profile=()=>{
    const user = localStorage.getItem('logedinuser');
   const {usermovie,setusermovie}= useContext(SearchContex);
    
    return<>
    <h1 className="text-2xl font-bold items-center mt-10 flex justify-center my-10">{user[0].toUpperCase()+user.slice(1)}</h1>
   
    {usermovie.length>0?<></>:(
          <div className="flex flex-wrap justify-center gap-4 p-4">
          {[...Array(6)].map((_,i)=>(<WaveLoader key={i}/>))}
          </div>
        )}
     <Carts movie={usermovie?usermovie:[]} />
    
    </>
}