
import { X } from "lucide-react";

const Popup = ({open,setOpen,headline,paragraph,imgLink,extraMessage,webName}) => {
  

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Popup Box */}
      <div className="bg-red-100 relative w-full max-w-md rounded-2xl  p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-200 transition"
        >
          <X size={22} />
        </button>

        {/* Content */}
        <div className="text-center">
          <img
            src={imgLink}
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-500"
          />

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {headline} <span className="text-blue-600">{webName}</span>
          </h2>

          <p className="mt-2 text-gray-600">
            {paragraph}
          </p> <br />
          <div className="border-t-2 border-gray-300 my-4">
            <p className="mt-2 text-gray-600 text-xl ">
            {extraMessage}
          </p>
          </div>



          {/* <button id="contact" className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition">
            Contact Now
          </button> */}
          
        </div>

        
      </div>
    </div>
  );
};

export default Popup;