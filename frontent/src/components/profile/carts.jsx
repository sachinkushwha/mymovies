import axios from "axios"
import { Cart } from "./cart"
import { useQuery } from "@tanstack/react-query"
import { WaveLoader } from "../loader"
export const Carts = () => {
    const getUserData = async () => {
        const response = await axios.get('https://mymovies-sand.vercel.app/profile', {
            headers: {
                'authorization': localStorage.getItem('movietoken')
            }
        })
        return response.data;
    }
    const { data, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: getUserData
    });
    return (<>
        {
            isLoading?<div className = "flex flex-wrap justify-center gap-4 p-4">
                    { [...Array(6)].map((_, i) => (<WaveLoader key={i} />)) }
                </div > : ('')
                
        }
<div className="flex flex-wrap justify-center gap-4 p-4">

    {
        data?.map((mo, index) => (
            <Cart mov={mo} key={index} />
        ))
    }
</div>

    </>)
}