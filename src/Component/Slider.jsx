import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="mt-6 rounded-2xl overflow-hidden shadow-xl  mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500, 
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/BKrWkn59/image.png"
              alt="Toy Car"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Welcome to Toy <span className="text-yellow-300">Topia</span>
              </h2>
              <p className="text-lg">
                Discover fun toys that bring imagination to life!
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/svNNZBsv/photo-1596464716127-f2a82984de30.jpg"
              alt="Doll House"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Toys that Spark Creativity
              </h2>
              <p className="text-lg">
                Give your kids safe, fun, and creative playtime.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/Gf2963kD/image.png"
              alt="Building Blocks"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Play. Learn. Grow.
              </h2>
              <p className="text-lg">
                Explore the best collection of toys for all ages.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/PZct51Qh/image.png"
              alt="Toy Collection"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Endless Joy Awaits
              </h2>
              <p className="text-lg">
                Find the perfect toy for every moment.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
