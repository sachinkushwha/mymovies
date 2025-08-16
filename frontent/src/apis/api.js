import {jwtDecode} from 'jwt-decode';

export const  isTokenExpired=(token)=>{
    if(!token) return true;
    const decode=jwtDecode(token);
    return decode.exp*1000<Date.now();
}

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