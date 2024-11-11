import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaRegClock } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail, MdPhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1920px] py-0 bg-gray-900 md:py-8 overlay">
      <div className="w-[90%] lg:w-[80%] py-0 md:py-10 mx-auto overlay-content">
        <div className="text-center">
          <h1 className="py-10 text-2xl font-bold text-white uppercase md:text-3xl lg:text-4xl">
            We’re ready to provide the best dining experiences
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row md:flex">
          <div className="w-full text-center md:w-1/2 lg:w-1/4">
            <FaRegClock className="mx-auto text-[#FEBF00] text-2xl" />
            <h4 className="py-4 text-xl font-bold uppercase">Opening hours</h4>
            <p className="text-sm font-normal md:text-base">Monday - Sunday</p>
            <span className="text-sm font-normal md:text-base">9:00 AM to 11:30 PM</span>
          </div>

          <div className="w-full text-center md:w-1/2 lg:w-1/4">
            <MdPhoneInTalk className="mx-auto text-[#FEBF00] text-2xl" />
            <h4 className="py-4 text-xl font-bold uppercase">Let’s Talk</h4>
            <p className="text-sm font-normal md:text-base">Phone: 1-800-222-4545</p>
            <span className="text-sm font-normal md:text-base">Fax: 1-800-222-4545</span>
          </div>

          <div className="w-full text-center md:w-1/2 lg:w-1/4">
            <MdOutlineMail className="mx-auto text-2xl text-[#FEBF00]" />
            <h4 className="py-4 text-xl font-bold uppercase">Book a Table</h4>
            <p className="text-sm font-normal md:text-base">Email: demo@website.com</p>
            <span className="text-sm font-normal md:text-base">Support: support@website.com</span>
          </div>

          <div className="w-full text-center md:w-1/2 lg:w-1/4">
            <IoLocation className="mx-auto text-2xl text-[#FEBF00]" />
            <h4 className="py-4 text-xl font-bold uppercase">Our Address</h4>
            <p className="text-sm font-normal md:text-base">123 Street, New York City</p>
            <span className="text-sm font-normal md:text-base">United States Of America</span>
          </div>
        </div>

        <div className="py-20 mt-10 text-center">
          <div className="flex justify-center mb-6 gap-x-4">
            <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full">
              <FaFacebook className="text-xl text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full">
              <FaXTwitter className="text-xl text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full">
              <FaSquareInstagram className="text-xl text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full">
              <BsLinkedin className="text-xl text-white" />
            </div>
          </div>

          <p className="text-base font-normal text-white md:text-lg">
            © 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
