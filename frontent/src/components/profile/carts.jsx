import axios from "axios"
import { Cart } from "./cart"
import { useInfiniteQuery } from "@tanstack/react-query"
import { WaveLoader } from "../loader"
import { useEffect } from "react"
export const Carts = () => {
    const getUserData = async ({ pageParam = 1 }) => {
        const response = await axios.get(`https://mymovies-sand.vercel.app/profile?page=${pageParam}&limit=6`, {
            headers: {
                'authorization': localStorage.getItem('movietoken')
            }
        })
        return response.data;
    }
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['profile'],
        queryFn: getUserData,
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

            {/* {
                data?.map((mo, index) => (
                    <Cart mov={mo} key={index} />
                ))
            } */}
            {
                data?.pages?.map((page) => (
                    page?.map((mo, index) => (
                        <Cart mov={mo} key={index} />
                    ))
                ))
            }
        </div>

    </>)
}