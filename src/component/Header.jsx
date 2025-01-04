import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[500px] sm:h-[400px] lg:h-[500px] rounded-3xl">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(./con7.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-[#d1808c] opacity-50 blur-sm"></div>
      <div className="relative z-10 flex flex-col sm:grid sm:grid-cols-2 items-center h-full px-4 py-8 sm:px-8">
        {/* Image Section */}
        <div className="flex justify-center sm:justify-end order-first sm:order-last mb-6 sm:mb-0">
          <img
            src="./hss.PNG"
            alt="Natural Glow"
            className="rounded-full border-4 border-white w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
          />
        </div>

        {/* Text Section */}
        <div className="text-white text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Hello, I'm Melat Dawit – a passionate content creator and storyteller.
          </h1>
          <p className="mb-6 text-sm sm:text-base">
            With a deep love for creating meaningful, engaging content, I specialize in crafting narratives
            that resonate with audiences. I believe in the power of words and visuals to connect, inspire, and entertain.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6 sm:mb-0">
            {/* Buttons with anchor links */}
            <a href="#about" className="bg-white text-[#D82D43] font-semibold px-4 py-2 rounded-md text-sm sm:text-base">
              Read More
            </a>
            <a href="#gallery" className="bg-[#D82D43] text-white font-semibold px-4 py-2 rounded-md text-sm sm:text-base">
              Gallery
            </a>
          </div>
          <div className="flex gap-4 items-center justify-center sm:justify-start mt-6">
            {/* Social media icons */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-xl sm:text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-xl sm:text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-xl sm:text-2xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-xl sm:text-2xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

