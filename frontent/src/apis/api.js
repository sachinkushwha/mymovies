import { useNavigate } from "react-router-dom";

export const movieslist = async () => {
    
        const response = await fetch('https://mymovies-sand.vercel.app/', {
            headers: { "authorization": localStorage.getItem('token') }
        });
        const data = await response.json();
        let j = (data.length) - 1;
        for (let i = 0; i < j; i++, j--) {
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        return data;
    
}



export const getuserdata=async(userId)=>{
    const response=await fetch('https://mymovies-sand.vercel.app/profile',{
        headers:{"authorization":localStorage.getItem('token')}
    })
    const data=await response.json();
    return data;
}
export const deletemovie=async(id)=>{
    console.log(id);
    const response=await fetch(`https://mymovies-sand.vercel.app/delete/${id}`,{
        method:'DELETE',
        headers:{'authorization':localStorage.getItem('token')}
    });
    const data=await response.json();
    return data;
}