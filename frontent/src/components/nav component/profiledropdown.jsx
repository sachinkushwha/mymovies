import { Link } from "react-router-dom"
export const Dropdown = ({handledropdown}) => {
    return (
        <>
            {handledropdown && (
                <div className="relative inline-block text-left">
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-2">
                            <a className="text-black block px-4 py-2 text-sm hover:bg-gray-100" href="/profile">Your Channel</a>
                            <a href="#" className="text-black block px-4 py-2 text-sm hover:bg-gray-100">
                                Settings
                            </a>
                            <Link className="text-black block px-4 py-2 text-sm hover:bg-gray-100" to="/upload">Upload</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}