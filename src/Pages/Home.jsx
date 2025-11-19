import React, { useEffect, useState } from "react";
import Slider from "../Component/Slider";
import ToyCard from "../Component/ToyCard";
import { Link } from "react-router";

const Home = () => {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 6))); 
  }, []);

  return (
    <div className="bg-purple-100">
      <div className="flex justify-center items-center mx-auto w-6/7">
        <Slider></Slider>
    </div>
{/* extra1 */}
<div className="w-6/7 mt-12 rounded-2xl overflow-hidden shadow-xl  mx-auto">
      <div className="relative">
            <img
              src="https://i.ibb.co.com/RTgTG1gJ/image.png"
              className="w-full h-[200px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
            <p className="text-xl font-bold">
                Barbie Doll With Accessories
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-3 text-yellow-300">
                Flat 30 % off
              </h2>
              
            </div>
          </div>
</div>


      {/* Popular */}
      <section className="mt-12 px-4 md:px-6 w-11/12 mx-auto ">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mt-8">
          🌟 Popular Toys
        </h2>
        <p className="text-gray-500 text-center mt-4 mb-8">Explore All Trending Toys on the Market developed by us </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>

        <div>
        <div className=" mt-10 text-center">
          <Link
            to={"/toys"}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl border-none  mb-8"
          >
            Show All
          </Link>
        </div>
        </div>
      </section>
      {/* extra */}
      <section className="py-12 bg-white m-12 w-11/12 mx-auto rounded-xl ">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
            Customers Review
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Hear from happy parents & kids who love ToyTopia toys!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700">
                “My daughter loves her building blocks! Great quality and safe
                materials.”
              </p>
              <h3 className="mt-4 font-bold text-purple-700"> Farhana, Dhaka</h3>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className=" text-gray-700">
                “Fast delivery and amazing packaging. The toys are exactly as
                shown!”
              </p>
              <h3 className="mt-4 font-bold text-purple-700"> Rahim, Chittagong</h3>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className=" text-gray-700">
                “The educational toys really help my kid learn while playing. Highly recommend!”
              </p>
              <h3 className="mt-4 font-bold text-purple-700"> Nabila, Sylhet</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

