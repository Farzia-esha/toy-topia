
import React, { useEffect, useState } from "react";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myToys")) || [];
    setMyToys(saved);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedToys = myToys.filter((_, index) => index !== indexToRemove);
    setMyToys(updatedToys);
    localStorage.setItem("myToys", JSON.stringify(updatedToys));
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        My Tried Toys
      </h2>

      {myToys.length === 0 ? (
        <p className="text-gray-600 text-center">No toys tried yet!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myToys.map((toy, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition relative"
            >
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-purple-700 mb-1">
                  {toy.toyName}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Tried by: <span className="font-semibold">{toy.userName}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Email: {toy.userEmail}
                </p>
                <p className="text-sm text-gray-600 mb-1">Date: {toy.date}</p>
                <p className="text-purple-700 font-semibold mt-1">${toy.price}</p>

                <button
                  onClick={() => handleRemove(index)}
                  className="mt-3 btn bg-green-600 hover:bg-green-800 text-white w-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyToys;
