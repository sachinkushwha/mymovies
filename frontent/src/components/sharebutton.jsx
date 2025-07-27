import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const ShareIcon = ({mov}) => {
  const [open, setOpen] = useState(false);

  const handleShare =()=>{
    if(navigator.share){
        try{
            navigator.share({
                url:window.location.href,
            });
            console.log(mov);
        }catch(err){
            alert("share not suport on this browser");
        }
    }
  }
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <BsThreeDotsVertical className="text-xl" />
      </button>

      {open && (
        <div
          className="absolute text-white h-10 flex right-[-11px] justify-center items-center top-10 w-29 bg-neutral-800 rounded-lg shadow-lg z-50"
        >
          <ul className="py-2">
            {/* <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer flex items-center gap-2">
              📄 Add to queue
            </li>
            <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer flex items-center gap-2">
              ⬇️ Download
            </li> */}
            <li onClick={handleShare} className="px-4 py-2 hover:bg-neutral-700 cursor-pointer flex items-center gap-2">
            ➦ Share
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
