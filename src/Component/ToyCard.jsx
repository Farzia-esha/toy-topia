import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;

  return (
<Link to={`/toyDetails/${toyId}`} state={toy} >
    <div className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 p-4 flex flex-col items-center ">
      <img
        src={pictureURL}
        alt={toyName}
        className=" md:h-48 w-full object-cover rounded-lg mb-4 "
      />
      <h3 className="text-lg font-semibold text-gray-800">{toyName}</h3>
      <div className="flex items-center justify-center mt-2 text-yellow-500">
        <FaStar className="mr-1" /> <span className="text-gray-700">{rating}</span>
      </div>
      <p className="text-gray-600 text-sm mt-2">Available: {availableQuantity}</p>
      <p className="font-semibold text-purple-600 text-lg mt-2">${price}</p>
      <Link
        to={`/toyDetails/${toyId}`} state= {toy}
        className="mt-3 btn bg-purple-600 hover:bg-purple-700 text-white border-none"
      >
        View More
      </Link>
    </div>
    </Link>


  );
};

export default ToyCard;
