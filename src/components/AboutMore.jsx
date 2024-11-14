import { useState } from "react";
import AboutItem from "./AboutItem";
import Experience from "./Experience";
import Contact from "./Contact";

const AboutMore = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleChange = (section) => {
    if (section === "about") {
      setShowAbout(true);
      setShowExperience(false);
      setShowContact(false)
    } else if (section === "experience") {
      setShowAbout(false);
      setShowExperience(true);
      setShowContact(false)
    }else if (section === "contact"){
      setShowAbout(false);
      setShowExperience(false);
      setShowContact(true)
    }
  };

  return (
    <div className="max-w-[1920px] py-10 lg:py-48">
      <div className="relative">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row mb-16 lg:mb-[74px] items-center justify-between gap-y-8 lg:gap-x-20">
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-auto"
                src="/image/Image.png"
                alt="About Image"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="flex items-center mb-4 gap-x-4">
                <li 
                  onClick={() => handleChange("about")} 
                  className={`cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 font-semibold text-sm sm:text-[14px] ${showAbout ? "bg-[#c52b1f] text-white" : "text-[#333333] hover:bg-[#c52b1f] hover:text-white"}`}
                >
                  About
                </li>
                <li 
                  onClick={() => handleChange("experience")} 
                  className={`cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 font-semibold text-sm sm:text-[14px] ${showExperience ? "bg-[#c52b1f] text-white" : "text-[#333333] hover:bg-[#c52b1f] hover:text-white"}`}
                >
                  Experience
                </li>
                <li onClick={() => handleChange("contact")} className={`cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 font-semibold text-sm sm:text-[14px] ${showContact ? "bg-[#c52b1f] text-white" : "text-[#333333] hover:bg-[#c52b1f] hover:text-white"}`}>
                  Contact
                </li>
              </ul>

              <div className="w-full h-[2px] bg-[#c52b1f]"></div>

              {showAbout && <AboutItem />}
              {showExperience && <Experience />}
              {showContact && <Contact/>}
            </div>
          </div>

          {/* Icon Section */}
          <div className="flex flex-col items-center gap-8 md:flex-row sm:gap-x-16">
            {[{
              imgSrc: "package.png",
              title: "fast delivery",
              desc: "Within 30 minutes",
            }, {
              imgSrc: "medal.png",
              title: "absolute dining",
              desc: "Best buffet restaurant",
            }, {
              imgSrc: "bag.png",
              title: "pickup delivery",
              desc: "Grab your food order",
            }].map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex items-center justify-center w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] rounded-full shadow-md">
                  <img
                    src={`/image/${item.imgSrc}`}
                    alt={`${item.title} Icon`}
                  />
                </div>
                <div>
                  <p className="text-[#0A1425] font-bold uppercase text-lg sm:text-3xl">
                    {item.title}
                  </p>
                  <span className="text-[#0A1425] text-base sm:text-xl mt-[2px]">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          className="absolute right-0 hidden w-24 lg:block bottom-36 lg:w-auto"
          src="/image/aboutview.png"
          alt="Decorative"
        />
      </div>
    </div>
  );
};

export default AboutMore;
