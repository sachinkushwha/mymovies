import { Link } from "react-router-dom";
import { ShareIcon } from "./sharebutton";
import { use } from "react";

export const Cart = ({ mov }) => {
  return (
    <div className="w-80  rounded-2xl shadow-lg  bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer m-2">
     <Link  to={mov.movielink} target="_blank"> <img
        src={mov.Thumbnail}
        loading="lazy"
        alt="Video Thumbnail"
        className="w-full h-44 object-cover"
      /></Link>
       {/* <Link  to={`/movie/${mov._id}`} > <img
        src={mov.Thumbnail}
        alt="Video Thumbnail"
        className="w-full h-44 object-cover"
      /></Link> */}
      
      <div className="p-4 flex gap-5 justify-between">
        {/* <img
          src="https://yt3.ggpht.com/ytc/AKedOLQ_WN1O_9V0uD7YuFMKYFYcJrJhMMPQZGH3TqFZ=s68-c-k-c0x00ffffff-no-rj"
          alt="Channel Logo"
          className="w-10 h-10 rounded-full"
        /> */}
        <p className="w-10 h-10 shrink-0 rounded-full bg-blue-600 text-white text-xl flex items-center justify-center shadow hover:bg-blue-700 transition">{ mov.userId?.name}</p>
        <div>
          <h3 className="text-xl  font-semibold line-clamp-2">
          {mov.moviename}
          </h3>
          <p className="text-xs text-gray-600">{mov.userId?.name}</p>
          {/* <p className="text-xs text-gray-500">123K views • 2 days ago</p> */}
        </div>
         <ShareIcon mov={mov.moviename}/>

      </div>
      
    </div>
  );
};
