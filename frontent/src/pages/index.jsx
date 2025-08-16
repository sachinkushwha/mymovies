import { Carts } from "../components/carts"
import { useContext, useEffect, useState } from "react";
import { movieslist } from "../apis/api"
import { SearchContex } from "../searchContex/searchContex";
import { WaveLoader } from "../components/loader";

export const Index = ({query}) => {
  console.log("index",query);
const {result}=useContext(SearchContex);
const {movie}=useContext(SearchContex);
 

  

  return (
    <>
    {movie.length>0?<></>:(
      <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...Array(6)].map((_,i)=>(<WaveLoader key={i}/>))}
      </div>
    )}

    {result.length>0?<Carts movie={result} />:<Carts movie={movie} />}
    </>
  )
}