import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Review = () => {
  // const sliderRef = useRef(null);

  // const nextSlide = () => {
  //   sliderRef.current.slickNext();
  // };

  // const prevSlide = () => {
  //   sliderRef.current.slickPrev();
  // };

  // const settings = {
  //   nextArrow: <></>,
  //   prevArrow: <></>,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="relative max-w-[1920px] py-20 bg-gray-100">
      <img
        src="../../public/image/221.png"
        className="absolute hidden md:block w-[80px] h-[160px] sm:w-[100px] sm:h-[203px] left-0 top-28"
        alt="Decorative"
      />
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-between mb-10 md:flex-row">
          <div>
            <div className="flex items-center gap-x-4">
              <div className="w-2.5 h-2.5 mt-[3px] bg-[#BD1F17] rounded-full"></div>
              <span className="text-[#BD1F17] text-lg sm:text-xl font-semibold">
                Crispy, Every Bite Taste
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] mt-4">
              What Some of Our Customers Say
            </h1>
          </div>
          <div className="flex mt-6 gap-x-4 md:mt-0">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer sm:w-12 sm:h-12">
              <MdKeyboardArrowLeft className="text-lg sm:text-xl hover:text-[#BD1F17]" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer sm:w-12 sm:h-12">
              <MdKeyboardArrowRight className="text-lg sm:text-xl text-[#BD1F17]" />
            </div>
          </div>
        </div>

        {/* Reviewer part */}
 
            
    
          <div className="flex flex-col-reverse items-center justify-between mt-8 md:flex-row">
            <div className="w-full relative md:w-2/5 bg-[#FEBF00] p-6 sm:p-8 shadow-lg">
              <img
                src="../../public/image/Group5.png"
                className="absolute bottom-0 left-0 md:bottom-16 md:block"
                alt="Decorative"
              />
              <div className="py-6 lg:py-[71px] px-6 lg:px-[85px]">
                <p className="text-base sm:text-lg md:text-xl font-normal text-[#0A1425] mb-8">
                  You can&apos;t go wrong with Chicken Mandi. I had it twice.
                  The chicken was cooked perfectly, juicy & soft. I would
                  definitely recommend it.
                </p>
                <div className="flex items-center justify-between mt-auto lg:mt-[200px]">
                  <div>
                    <h4 className="text-[#0A1425] font-bold text-lg md:text-xl">
                      Khalid Al Dawsry
                    </h4>
                    <span className="text-sm text-gray-700 md:text-base">
                      Jeddah, Saudi
                    </span>
                  </div>
                  <img
                    src="../../public/image/Image6.png"
                    alt="Reviewer"
                    className="w-10 h-10 rounded-full md:w-12 md:h-12"
                  />
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-4/5 h-1 bg-black"></div>
                  <div className="w-1/5 h-1 bg-[#BD1F17]"></div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6 md:w-3/5 md:mt-0">
              <img
                src="../../public/image/Video.png"
                alt="Food"
                className="object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>
       
        
  



      
        {/* Reviewer part */}
      </div>
    </div>
  );
};

export default Review;