import React from "react";

const Button = ({ name }) => {
  return (
    <div >
      <button type="button" className="px-5 py-3 m-2 bg-gray-100 rounded-full">
        {name}
      </button>
    </div>
  );
};

export default Button;
