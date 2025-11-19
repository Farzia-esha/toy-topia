import React from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ToyDetails = () => {
  const location = useLocation();
  const toy = location.state;

  if (!toy) {
    return (
      <div className="text-center mt-10 text-xl text-gray-600">
        please go back & select again
      </div>
    );
  }

  
  const handleTryNow = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const triedToy = {
      toyName: toy.toyName,
      pictureURL: toy.pictureURL,
      price: toy.price,
      rating: toy.rating,
      availableQuantity: toy.availableQuantity,
      description: toy.description,
      userName: name,
      userEmail: email,
      date: new Date().toLocaleString(),
    };

    
    const existing = JSON.parse(localStorage.getItem("myToys")) || [];
    existing.push(triedToy);
    localStorage.setItem("myToys", JSON.stringify(existing));

    toast.success(`"${toy.toyName}" added to My Toys!`);
    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full md:w-1/3 object-cover rounded-lg"
        />

        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-purple-700 mb-3">
            {toy.toyName}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Seller:</strong> {toy.sellerName} ({toy.sellerEmail})
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {toy.subCategory}
          </p>
          <p className="text-gray-700 mb-2 flex items-center gap-2">
            <strong>Rating:</strong> <FaStar className="text-yellow-400" />{" "}
            {toy.rating}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Price:</strong> ${toy.price}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Available Quantity:</strong> {toy.availableQuantity}
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {toy.description}
          </p>

          {/* Try Now form */}
          <form
            onSubmit={handleTryNow}
            className="mt-6 flex flex-col gap-3 max-w-sm"
          >
            <h3 className="text-xl font-semibold text-purple-700">
              Try This Toy
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <button
              type="submit"
              className="btn bg-purple-600 hover:bg-purple-700 text-white mt-2 w-full"
            >
              Try Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
