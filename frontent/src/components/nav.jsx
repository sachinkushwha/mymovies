import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "./search";
import { SearchContex } from "../searchContex/searchContex";

export const Nav = () => {
    const { setResult } = useContext(SearchContex);
    const navigate = useNavigate();
    const [user, setuser] = useState(localStorage.getItem('logedinuser'));
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const updateuser = () => {
            setuser(localStorage.getItem('logedinuser'));
        };
        window.addEventListener('logedindatachange', updateuser);
        return () => window.removeEventListener('logedindatachange', updateuser);
    }, []);

    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('logedinuser');
        window.dispatchEvent(new Event('logedindatachange'));
        navigate('/');
    };

const handleprofile=()=>{
    console.log("profile clicked");
}
    return (
        <div className="bg-blue-500 text-white font-bold px-4 py-3 w-full">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link className="text-xl" onClick={() => setResult([])} to="/">Streamify</Link>
                <div className="flex-1 text-center">
                    <Search />
                </div>
                <div className="flex items-center gap-4 md:hidden">

                    <button
                        className="w-10 h-10 rounded-full bg-blue-600 text-white text-xl flex items-center justify-center shadow hover:bg-blue-700 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {user[0] || user.charAt(0) }
                    </button>
                    

                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link onClick={() => setResult([])} to="/">Home</Link>
                    {user ? (
                        <>
                            <Link onClick={handlelogout}>Logout</Link>
                            <Link to="/upload">Upload</Link>
                            <span onClick={handleprofile} className="w-10 h-10 rounded-full bg-blue-600 text-white text-xl flex items-center justify-center shadow hover:bg-blue-700 transition">{user.at(0).toUpperCase()}</span>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mt-3 md:hidden flex flex-col items-center gap-3 bg-blue-600 p-4 rounded">
                    {user ? (
                        <>
                            {user && <span>{user}</span>}
                            <Link to="/upload" onClick={() => setIsOpen(false)}>Upload</Link>
                            <Link onClick={() => { handlelogout(); setIsOpen(false); }}>Logout</Link>

                        </>
                    ) : (
                        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                    )}
                </div>
            )}
        </div>
    );
};
