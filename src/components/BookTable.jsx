import { useState } from "react";
import bgImg from "../../public/image/booktable.jpeg";
import Button from "./Button";


const BookTable = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!emailPattern.test(email)) newErrors.email = "Invalid email format.";
    if (!date) newErrors.date = "Please select a reservation date.";
    if (people <= 0) newErrors.people = "Total people should be at least 1.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setDate("");
      setPeople("");
      setMessage("");
      setErrors({});
    } else {
      
      alert("All fields are required");
    }
  };

  return (
    <div
      className="max-w-[1920px] py-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">
        <div>
          <div className="w-full sm:w-[475px]">
            <div className="flex items-center gap-x-4">
              <div className="w-[10px] h-[10px] mt-[3px] bg-[#BD1F17]"></div>
              <span className="text-[#BD1F17] text-lg sm:text-xl font-bold">Book Now</span>
            </div>
            <h1 className="my-2 text-3xl font-bold text-white sm:my-4 sm:text-4xl">
              Book Your Table
            </h1>
            <span className="text-white text-sm sm:text-[16px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </span>
          </div>
        </div>

        <div className="w-full sm:w-[750px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4 mt-8 sm:gap-5 sm:mt-10">
              <div className="w-full sm:w-[320px]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-white bg-transparent border border-white placeholder:text-white focus:outline-none"
                  placeholder="Your Name*"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="w-full sm:w-[320px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-white bg-transparent border border-white placeholder:text-white focus:outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="w-full sm:w-[320px]">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 text-white bg-transparent border border-white placeholder:text-white focus:outline-none"
                  placeholder="Reservation Date"
                />
                {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
              </div>

              <div className="w-full sm:w-[320px]">
                <input
                  type="number"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full px-4 py-3 text-white bg-transparent border border-white placeholder:text-white focus:outline-none"
                  placeholder="Total People"
                />
                {errors.people && <p className="text-sm text-red-500">{errors.people}</p>}
              </div>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full sm:w-[665px] h-32 my-6 px-4 py-3 text-white bg-transparent border border-white placeholder:text-white focus:outline-none"
            ></textarea>

            <Button type="submit" title={"Book A Table"} />
          </form>


        </div>
      </div>
    </div>
  );
};

export default BookTable;
