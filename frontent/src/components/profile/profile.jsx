import { useContext} from "react";
import { Carts } from "./carts";
import { WaveLoader } from "../loader";
import { isTokenExpired } from "../../apis/api";
import { SearchContex } from "../../searchContex/searchContex";
import { useNavigate } from "react-router-dom";
export const Profile=()=>{
  const navigate=useNavigate();
    const user = localStorage.getItem('logedinuser');
   const {usermovie,setusermovie}= useContext(SearchContex);

   if(isTokenExpired(localStorage.getItem('token'))){
    localStorage.removeItem('token');
    localStorage.removeItem('logedinuser');
    navigate('/login');
    return null;
}
    
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