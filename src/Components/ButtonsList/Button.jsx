import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      {name.map((val, index) => {
        return (
          <button
            type="button"
            className="px-5 py-2 m-2 bg-gray-100 rounded-lg"
            key={index}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
