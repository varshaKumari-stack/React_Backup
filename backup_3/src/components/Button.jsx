import React from "react";

const Button = ({ likes, id, disLike }) => {
  return (
    <div>
      <div className="btn mt-4 flex gap-5 justify-center">
        <button
          onClick={() => likes(id)}
          className="bg-emerald-700 px-4 py-2  user-select-none rounded text-white text-xl font-medium active:scale-95 active:bg-emerald-800"
        >
          Like
        </button>
        <button
          onClick={()=>disLike(id)}
          className="bg-red-500 px-4 py-2  user-select-none rounded text-white text-xl font-medium active:scale-95 active:bg-red-600"
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default Button;
