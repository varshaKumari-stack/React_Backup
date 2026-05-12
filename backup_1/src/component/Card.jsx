import React from "react";
import Button from "./Button";
const Card = ({ data }) => {
  return (
    <div className="card">
      <img className="dollImg" src={data.image} />
      <h1>{data.name}</h1>
      <h2>{data.age}</h2>
      <p>{data.description}</p>
      <Button card={data} />
    </div>
  );
};

export default Card;
