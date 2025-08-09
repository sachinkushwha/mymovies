import { Cart } from "./cart"

export const Carts = ({ movie }) => {
    console.log(movie)
    return (
        <div  className="flex flex-wrap justify-center gap-4 p-4">
            {
               movie?.map((mo,index)=>(
                    <Cart mov={mo} key={index}/>
                ))
            }
        </div>

    )
}