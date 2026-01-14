import { useContext } from "react";
import { Carts } from "./carts";
import { WaveLoader } from "../loader";
import { isTokenExpired } from "../../apis/api";
import { SearchContex } from "../../searchContex/searchContex";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('logedinuser');
  const { usermovie, setusermovie } = useContext(SearchContex);
  console.log(usermovie);
  if (isTokenExpired(localStorage.getItem('movietoken'))) {
    localStorage.removeItem('movietoken');
    localStorage.removeItem('logedinuser');
    navigate('/login');
    return null;
  }

  return <>
    <h1 className="text-2xl font-bold items-center mt-10 flex justify-center my-10">{user[0].toUpperCase() + user.slice(1)}</h1>
    <Carts/>

  </>
}