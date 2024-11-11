import Button from "./Button";

const AboutMore = () => {
  return (
    <div className="max-w-[1920px] py-10 lg:py-48">
      <div className="relative">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row mb-16 lg:mb-[74px] items-center justify-between gap-y-8 lg:gap-x-20">
            <div className="w-full lg:w-1/2">
              <img className="w-full h-auto" src="/image/Image.png" alt="About Image" />
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="flex items-center mb-4 gap-x-4">
                <li className="bg-[#c52b1f] cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 text-white font-semibold text-sm sm:text-[14px]">
                  About
                </li>
                <li className="hover:bg-[#c52b1f] cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 hover:text-white text-[#333333] font-semibold text-sm sm:text-[14px]">
                  Experience
                </li>
                <li className="hover:bg-[#c52b1f] cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 hover:text-white text-[#333333] font-semibold text-sm sm:text-[14px]">
                  Contact
                </li>
              </ul>
              <div className="w-full h-[2px] bg-[#c52b1f]"></div>
              <div className="mt-6 lg:mt-8">
                <h2 className="text-2xl sm:text-[32px] uppercase font-bold leading-tight lg:leading-[44px] mb-4">
                  Exceptional culinary experience and delicious food
                </h2>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className="flex items-center gap-4 mt-6 lg:mt-8 sm:gap-x-8">
                  <Button title={"About More"} />
                  <div className="flex items-center gap-2">
                    <img className="w-6 h-6 sm:w-8 sm:h-8" src="/image/call-alt.png" alt="Call Icon" />
                    <span className="font-bold text-base sm:text-[18px]">01703946056</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Icon Section */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-x-16">
            {[
              { imgSrc: "package.png", title: "fast delivery", desc: "Within 30 minutes" },
              { imgSrc: "medal.png", title: "absolute dining", desc: "Best buffet restaurant" },
              { imgSrc: "bag.png", title: "pickup delivery", desc: "Grab your food order" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex items-center justify-center w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-full shadow-md">
                  <img src={`../../public/image/${item.imgSrc}`} alt={`${item.title} Icon`} />
                </div>
                <div>
                  <p className="text-[#0A1425] font-bold uppercase text-lg sm:text-3xl">{item.title}</p>
                  <span className="text-[#0A1425] text-base sm:text-xl mt-[2px]">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
        className="absolute right-0 hidden w-24 lg:block bottom-36 lg:w-auto"
        src="../../public/image/aboutview.png"
        alt="Decorative"
      />
      </div>

     
    </div>
  );
};

export default AboutMore;
