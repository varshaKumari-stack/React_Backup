 import React from "react";

const Button = ({ card }) => {
  return (
    <div className="follow">
      <button
        className="fbtn"
        style={{
          color: "#fff",
          backgroundColor: card.isFollowed ? "green" : "red",
          padding: "0.5rem 3rem",
        }}
      >
        {card.isFollowed ? "Follow" : "UnFollow"}
      </button>
    </div>
  );
};

export default Button;