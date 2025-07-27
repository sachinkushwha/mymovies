import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "./search";
import { SearchContex } from "../searchContex/searchContex";

export const Nav = () => {
    const {setResult}=useContext(SearchContex);
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

    const handleisopneandsearchresult=()=>{
        setIsOpen(false);
        setResult([]);
    }
    return (
        <div className="bg-blue-500 text-white font-bold px-4 py-3 w-full">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link className="text-xl" onClick={()=>setResult([])} to="/">🎬FlickStreak</Link>
 <div className="flex-1 text-center">
      <Search/>
    </div>
                <div className="flex items-center gap-4 md:hidden">
                    {user && <span>{user.charAt(0).toUpperCase()+user.slice(1).split(" ")[0]}</span>}
                    <button
                        className="text-white text-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link onClick={()=>setResult([])} to="/">Home</Link>
                    {user ? (
                        <>
                            <Link onClick={handlelogout}>Logout</Link>
                            <Link to="/upload">Upload</Link>
                            <span>{user.charAt(0).toUpperCase()+user.slice(1).split(" ")[0]}</span>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mt-3 md:hidden flex flex-col items-center gap-3 bg-blue-600 p-4 rounded">
                    <Link to="/" onClick={handleisopneandsearchresult}>Home</Link>
                    {user ? (
                        <>
                            <Link onClick={() => { handlelogout(); setIsOpen(false); }}>Logout</Link>
                            <Link to="/upload" onClick={() => setIsOpen(false)}>Upload</Link>
                        </>
                    ) : (
                        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                    )}
                </div>
            )}
        </div>
    );
};
