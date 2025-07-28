import { Carts } from "../components/carts"
import { useContext, useEffect, useState } from "react";
import { movieslist } from "../apis/api"
import { SearchContex } from "../searchContex/searchContex";

export const Index = () => {
const {result}=useContext(SearchContex);
  const [movie, setmovie] = useState([]);
  useEffect(() => {
      movieslist().then((data) => {
        setmovie(data);
      })
  }, []);

  

  return (
    <>
    {result.length>0?<Carts movie={result} />:<Carts movie={movie} />}
    </>
  )
}