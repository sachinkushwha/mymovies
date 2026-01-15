import axios from "axios"
import { Cart } from "./cart"
import { useInfiniteQuery } from "@tanstack/react-query";

export const Carts = () => {

    const fetchMovies = async ({pageParem=1}) => {
        const response = await axios.get(`https://mymovies-sand.vercel.app/?page=${pageParem}&limit=6`, {
            headers: {
                'authorization': localStorage.getItem('movietoken')
            }
        });
        return response.data;
    }

    const { data,fetchNextPage } = useInfiniteQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
        getNextPageParam: (lastPage, allPage) => {
            if (lastPage.length === 0) {
                return undefined;
            } else {
                return allPage.length + 1;
            }
        }
    });

    console.log(data);


    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {
                movie?.map((mo, index) => (
                    <Cart mov={mo} key={index} />
                ))
            }
        </div>

    )
}