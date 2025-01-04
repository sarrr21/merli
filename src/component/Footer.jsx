import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Footer() {
  return (
    <div className="bg-[#D82D43] p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-white font-semibold text-lg md:text-base">Contact Us</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <a
            href="mailto:example@example.com"
            className="text-white flex items-center space-x-2 hover:underline"
          >
            <AiOutlineMail size={24} />
            <span>example@example.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="text-white flex items-center space-x-2 hover:underline"
          >
            <AiOutlinePhone size={24} />
            <span>+1 234 567 890</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
