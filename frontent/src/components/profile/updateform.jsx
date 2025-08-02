import { useEffect, useRef } from "react"
import { FaAws } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Update = () => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const thumbnailRef = useRef()
    const linkRef = useRef()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('updatedata'));
        console.log(data);
        if (data) {
            nameRef.current.value = data.name;
            thumbnailRef.current.value = data.thumbnail;
            linkRef.current.value = data.link;
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updated = {
            name: nameRef.current.value,
            thumbnail: thumbnailRef.current.value,
            link: linkRef.current.value
        }
        // console.log(updated);
        const response = await fetch(`https://mymovies-sand.vercel.app/update/${JSON.parse(localStorage.getItem('updatedata')).id}`, {
            method: "PUT",
            headers: {
                'authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        const result = await response.json();
        if (result) {
            navigate('/profile')
        }


    }
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-center">Add Movie</h2>

                <div>
                    <label className="block mb-1 font-medium">Movie Name</label>
                    <input
                        type="text"
                        autoFocus
                        ref={nameRef}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Thumbnail URL</label>
                    <input
                        type="text"
                        name="thumbnail"
                        ref={thumbnailRef}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Movie Link</label>
                    <input
                        type="text"
                        name="link"
                        ref={linkRef}
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
        </>
    )
}