import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getuserdata, movieslist } from '../apis/api';
import { SearchContex } from '../searchContex/searchContex';

export default function MovieForm() {
   const {setusermovie}= useContext(SearchContex);
   const {setmovie}= useContext(SearchContex);
    const handleprofile = () => {
        getuserdata().then((data) => {
            setusermovie(data);
            console.log(data);
        })
    }
    const handlemovie=()=>{
        movieslist().then(data=>{
            setmovie(data);
        })
    }
    const moviename = useRef();
    const Thumbnail = useRef();
    const movielink = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movie = {
            moviename: moviename.current.value,
            Thumbnail: Thumbnail.current.value,
            movielink: movielink.current.value
        }
        const response = await fetch('https://mymovies-sand.vercel.app/movies', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(movie)
        })
        const result = await response.json();
        moviename.current.value = "";
        Thumbnail.current.value = "";
        movielink.current.value = "";
        if (result) {
            handleprofile();
            handlemovie();
            alert(result);
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-center">Add Movie</h2>

            <div>
                <label className="block mb-1 font-medium">Movie Name</label>
                <input
                    type="text"
                    autoFocus
                    ref={moviename}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Thumbnail URL</label>
                <input
                    type="text"
                    name="thumbnail"
                    ref={Thumbnail}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Movie Link</label>
                <input
                    type="text"
                    name="link"
                    ref={movielink}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </form>
    );
}
