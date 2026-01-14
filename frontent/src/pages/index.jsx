import { Carts } from "../components/carts"
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { SearchContex } from "../searchContex/searchContex";
import { WaveLoader } from "../components/loader";
import axios from 'axios'
export const Index = ({ query }) => {
  const { result } = useContext(SearchContex);
  const allMovies = async () => {
    const response = await axios.get('https://mymovies-sand.vercel.app/');
    return response.data;
  }
  const { data, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: allMovies
  });
  console.log("query data", data);
  return (
    <>
      {isLoading ? <div className="flex flex-wrap justify-center gap-4 p-4">
        {[...Array(6)].map((_, i) => (<WaveLoader key={i} />))}
      </div> : ('')}

      {result.length > 0 ? <Carts movie={result} /> : <Carts movie={data} />}
    </>
  )
}