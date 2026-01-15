import axios from "axios"
import { Cart } from "./cart"
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { WaveLoader } from "./loader";
export const Carts = () => {

    const fetchMovies = async ({ pageParam = 1 }) => {
        // const response = await axios.get(`https://mymovies-sand.vercel.app/?page=${pageParam}&limit=6`, {
            const response = await axios.get(`http://localhost:3000/?page=${pageParam}&limit=6`, {
            headers: {
                'authorization': localStorage.getItem('movietoken')
            }
        });
        return response.data;
    }

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                if (hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchNextPage, isFetchingNextPage, hasNextPage]);
    return (<>
        {
            isLoading ? <div className="flex flex-wrap justify-center gap-4 p-4">
                {[...Array(6)].map((_, i) => (<WaveLoader key={i} />))}
            </div > : ('')
        }
        <div className="flex flex-wrap justify-center gap-4 p-4">

            {
                data?.pages?.map((page) => (
                    page.slice(-6).map((mov, index) => (
                        <Cart mov={mov} key={index} />
                    ))
                ))
            }

        </div>
        {isFetchingNextPage && <p>Loading...</p>}
    </>)
}