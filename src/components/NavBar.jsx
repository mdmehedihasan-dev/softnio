import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // import icons for menu toggle

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#cb3f32] sticky top-0  z-20 max-w-[1920px] ">
      {/*   */}
      <div className="flex w-[90%] md:w-[80%] py-6 mx-auto justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/image/Logo.png" alt="Logo" aria-label="Company Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main Navigation">
          <ul className="flex font-semibold text-[15px] text-white justify-center items-center gap-x-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Clients</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            className="text-[#0A1425] font-bold text-[16px] bg-[#FEBF00] py-2 px-6 uppercase"
            aria-label="Book a Table Button"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Navigation Menu">
            {isMenuOpen ? <FiX className="text-2xl text-white" /> : <FiMenu className="text-2xl text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#c52b1f]">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col font-semibold text-[15px] text-white items-center gap-y-4 py-4">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Portfolio</li>
              <li className="cursor-pointer">Clients</li>
              <li className="cursor-pointer">Blog</li>
              <li>
                <button
                  className="text-[#0A1425] font-bold text-[16px] bg-[#FEBF00] py-2 px-6 uppercase mt-4"
                  aria-label="Book a Table Button"
                >
                  Book a Table
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
