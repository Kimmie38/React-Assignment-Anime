import React from "react";


const Card = ({ title, description, name, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="font-bold mt-2">({name})</p>
    </div>
  );
};

export default Card;
