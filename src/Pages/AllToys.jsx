import React, { useEffect, useState } from "react";
import ToyCard from "../Component/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res)=>res.json())
      .then((data)=>setToys(data))
      .catch((err)=>console.error(err));
  }, []);

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-6">
          All Toys
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Explore all toys available in ToyTopia
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
