import React from "react";
import Button from "./Button";
const Card = ({ postData, like, disLike }) => {
  return (
    <div className="p-12 flex gap-8 flex-wrap ">
      {postData.map((data) => (
        <div
          key={data.id}
          className="card w-64  bg-gray-300 rounded text-center py-5"
        >
          <img
            className="w-20 h-20 rounded-full m-auto object-cover object-center"
            src={data.img}
            alt=""
          />
          <h1 className="text-3xl font-medium font-sans text-fuchsia-700">
            {data.name}
          </h1>
          <h3 className="text-lg font-sans text-gray-600 font-medium">
            {data.role}
          </h3>
          <p className="text-lg font-sans text-gray-600 font-medium flex  justify-center gap-1 items-center">
            likeCount:
            <span className="text-blue-500   font-bold text-2xl">
              {data.likeCount}
            </span>
          </p>
          <Button likes={like} id={data.id} disLike={disLike} />
        </div>
      ))}
    </div>
  );
};

export default Card;
