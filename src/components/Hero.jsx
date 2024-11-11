import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="max-w-[1920px]  bg-[#c52b1f]"
      style={{
        backgroundImage: "url(/image/mainbg.png)", // Use relative path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        width: "100%",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="w-[90%] md:w-[80%] py-16 flex flex-col md:flex-row relative items-center mx-auto">
        {/* Left content */}
        <div className="w-full mb-8 md:w-1/2 md:mb-0">
          <div className="w-[90%] block md:absolute top-28 sm:w-[320px] md:w-[700px] lg:w-[830px] py-5 h-auto md:h-[272px] z-20 bg-custom-gradient mx-auto md:mx-0">
            <span className=" font-bold  text-white uppercase text-2xl sm:text-[30px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[70px] lg:leading-[100px]">
              Taste the authentic Saudi cuisine
            </span>
          </div>
          <div className="w-[90%] sm:w-[320px] md:w-[460px] lg:w-[560px] mt-6 md:mt-48 mx-auto md:mx-0">
            <p className="mb-4 text-xs leading-5 text-white sm:text-lg md:text-xl lg:text-2xl md:leading-7 lg:leading-8 md:mb-6 lg:mb-9">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <Button title={"Explore Menu"} />
          </div>
        </div>

        {/* Right image content */}
        <div className="relative flex justify-center w-full md:w-1/2 md:justify-end">
          <img
            className=" opacity-100 md:opacity-100 w-[90%] z-20 sm:z-0 sm:w-[60%] md:w-[80%] lg:w-auto"
            src="/image/image 1.png" // Simplified the path
            alt="Authentic Saudi Cuisine"
          />
          <img
            className="absolute z-0 w-12 right-4 sm:-right-12 -top-5 sm:-top-14 sm:w-20"
            src="/image/Vector.png" // Simplified the path
            alt=""
          />
          <div className="bg-[#FEBF00] absolute -right-[-40px] md:-right-16 bottom-3 md:bottom-0 z-20 w-[100px] md:w-[124px] flex justify-center items-center h-[100px] md:h-[124px] rounded-full">
            <div className="bg-[#FEBF00] text-center border-2 border-dashed border-[#c52b1f] w-[94px] md:w-[118px] flex justify-center items-center h-[94px] md:h-[118px] rounded-full">
              <span className="text-lg font-bold text-black uppercase md:text-3xl">
                Today Offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
