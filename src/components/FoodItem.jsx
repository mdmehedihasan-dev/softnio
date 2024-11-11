/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const FoodItem = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    nextArrow: <></>,
    prevArrow: <></>,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1920px] relative bg-[#fbf7f2] py-20 sm:py-28">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-between sm:flex-row gap-y-6">
          <div>
            <div className="flex items-center gap-x-4">
              <div className="w-2.5 h-2.5 mt-1 bg-[#BD1F17]"></div>
              <span className="text-[#BD1F17] text-lg sm:text-xl font-bold">
                Crispy, Every Bite Taste
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#181818] mt-2 sm:mt-4">
              POPULAR FOOD ITEMS
            </h1>
          </div>
          
         <div className="hidden sm:block">
         <div className="flex gap-x-4 sm:gap-x-8">
            <div
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer sm:w-16 sm:h-16"
            >
              <MdKeyboardArrowLeft className="hover:text-[#BD1F17] text-lg sm:text-xl font-bold" />
            </div>
            <div
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer sm:w-16 sm:h-16"
            >
              <MdKeyboardArrowRight className="text-[#BD1F17] text-lg sm:text-xl font-bold" />
            </div>
          </div>
         </div>
        </div>
      

        {/* Slider Section */}
        <Slider ref={sliderRef} {...settings} className="mt-10 sm:mt-14">
          {[
            { imgSrc: "burger.png", title: "Vegetables Burger", desc: "Barbecue Italian cuisine pizza" },
            { imgSrc: "pizza.png", title: "Special Pizza", desc: "Barbecue Italian cuisine pizza" },
            { imgSrc: "French.png", title: "Special French Fries", desc: "Barbecue Italian cuisine" },
            { imgSrc: "Chicken.png", title: "Cuisine Chicken", desc: "Japanese Cuisine Chicken" },
          ].map((item, index) => (
            <div key={index} className="text-center bg-white w-full sm:w-[280px] h-[300px] mx-2">
              <div className="py-8">
                <img src={`../../public/image/${item.imgSrc}`} className="mx-auto" alt={item.title} />
                <div className="h-1 w-14 my-6 mx-auto bg-[#BD1F17]"></div>
                <p className="font-bold uppercase text-lg sm:text-2xl text-[#0A1425]">{item.title}</p>
                <span className="text-sm sm:text-[16px] text-[#0A1425]">{item.desc}</span>
              </div>
            </div>
          ))}
        </Slider>
         
        <div className="block mt-10 sm:hidden">
        <div className="flex justify-center gap-x-4 sm:gap-x-8">
            <div
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer sm:w-16 sm:h-16"
            >
              <MdKeyboardArrowLeft className="hover:text-[#BD1F17] text-lg sm:text-xl font-bold" />
            </div>
            <div
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer sm:w-16 sm:h-16"
            >
              <MdKeyboardArrowRight className="hover:text-[#BD1F17] text-lg sm:text-xl font-bold" />
            </div>
          </div>
        </div>
       
      </div>
      <img
        className="absolute left-0 hidden w-24 lg:block bottom-28 lg:w-auto"
        src="../../public/image/top-view.png"
        alt=""
      />
    </div>
  );
};

export default FoodItem;
